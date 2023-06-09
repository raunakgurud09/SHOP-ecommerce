import Image from 'next/image'
import Products from '@/components/Home/Products'
import Wishlist from '@/components/ui/Badges/wishlist'
import FilledButton from '@/components/ui/Buttons/Filled'
import { GetServerSidePropsContext } from 'next'
import ProductServices from '@/services/ProductService'
import Router from 'next/router'
import { useUser } from 'hooks/user/useUser'
import { useState } from 'react'
import useAddItem from 'hooks/cart/useAddItem'
import Container from '@/components/core/Layouts/Container'
import ProductInputQuantity from '@/components/products/ProductInputQuantity'

const CACHE_REVALIDATION = 60

export default function product({ product, relatedProducts }) {
  const [size, setSize] = useState<string>('M')
  const [qty, setQty] = useState<number>(1)
  const { data: currentUser } = useUser()
  // const { setToast } = useToast()
  // const { isOpen, showToast } = usePopUp();

  const { addToCart, addingToCart } = useAddItem()
  const handleChangeInputQty = (value: string | number) => {
    if (Number(value) > 10) {
      // setToast('error', 'Ops up to 10 max only')
      setQty(10)
      return
    }
    // setQty(value)
  }

  const handleButtonChangeQty = (action: string) => {
    if (action === 'add') {
      if (qty >= 10) {
        // setToast('error', 'Ops you can add to cart up to 10 max only')
        return
      }
      setQty((qty) => Number(qty) + 1)
    } else {
      if (qty > 1) setQty((qty) => Number(qty) - 1)
    }
  }
  const handleChangeBlur = (val: string) => {
    if (!val) {
      setQty(1)
    }
  }

  const handleSizeChange = (e) => {
    const size = e.target.value
    setSize(size)
  }

  const handleAddToCart = async () => {
    try {
      if (!currentUser) {
        return Router.push(`/login?ref=${product._id}`)
      }
      await addToCart(product._id, Number(qty), String(size))
      // showToast();
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <div>
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2">
            {/* // eslint-disable-next-line @next/next/no-img-element */}
            <Image
              src={product.imageUrl}
              alt="product"
              width={220}
              height={300}
              className="w-full max-h-[500px] object-cover"
            />
          </div>
          <div className="w-full lg:w-1/2 p-4 space-y-5">
            <h3 className="text-4xl font-bold">{product.name}</h3>
            <p className="font-light text-sm">{product.description}</p>
            <div className="flex ">
              <p className="text-xl font-medium w-3/4 text-green-500">
                Rs.{product.price}
              </p>
              <div className="w-1/4 flex justify-center items-center">
                <Wishlist />
              </div>
            </div>
            <div>
              <p>Chose your size</p>
              <form className="flex justify-start items-start flex-col">
                <label>
                  <input
                    type="radio"
                    value="S"
                    name="size"
                    onChange={handleSizeChange}
                  />
                  S
                </label>
                <label>
                  <input
                    type="radio"
                    value="M"
                    name="size"
                    onChange={handleSizeChange}
                  />
                  M
                </label>
                <label>
                  <input
                    type="radio"
                    value="L"
                    name="size"
                    onChange={handleSizeChange}
                  />
                  L
                </label>
              </form>
            </div>
            <div>
              <ProductInputQuantity
                value={qty}
                onButtonClick={handleButtonChangeQty}
                onChangeBlur={handleChangeBlur}
                onChangeInput={handleChangeInputQty}
              />
              <div>
                <FilledButton text="Add to cart" onClick={handleAddToCart} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Products
            initialProducts={relatedProducts}
            title="RELATED PRODUCTS"
          />
        </div>
      </div>
    </Container>
  )
}

export async function getStaticProps({
  params,
}: GetServerSidePropsContext<{ id: string }>) {
  const id = params?.id as string

  try {
    const { product, relatedProducts } = await ProductServices.getProduct(id)
    // console.log(relatedProducts)
    return {
      props: {
        product,
        relatedProducts,
        revalidate: CACHE_REVALIDATION,
      },
    }
  } catch (error) {
    return {
      props: {
        product: null,
        error: 'Unexpected error occurred. Please try again later.',
      },
    }
  }
}
export async function getStaticPaths() {
  return { paths: [], fallback: 'blocking' }
}
