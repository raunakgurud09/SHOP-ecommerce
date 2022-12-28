import Image from 'next/image'
// import Image from '../../components/ui/Image'
import Products from '@/components/Home/Products'
import Wishlist from '@/components/ui/Badges/wishlist'
import FilledButton from '@/components/ui/Buttons/Filled'
// const phot = '/../../public/static/download.jpeg'
const phot = '/../../public/photo1.jpeg'

export default function product() {

  

  const handleAddtocart = () => {

  }


  return (
    <div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          {/* // eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src="https://res.cloudinary.com/dmaeznlik/image/upload/v1671720353/tmp-2-1671720349209.jpg"
            alt="product"
            width={220}
            height={300}
            className="w-full max-h-[500px] object-cover"
          />
        </div>
        <div className="w-full lg:w-1/2 p-4 space-y-5">
          <h3 className="text-4xl font-bold">Product name</h3>
          <p className="font-light text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            recusandae asperiores, veniam suscipit neque hic autem consequatur
            cu illo animi officia aut!
          </p>
          <div className="flex ">
            <p className="text-xl font-medium w-3/4 text-green-500">$ 4585</p>
            <div className="w-1/4 flex justify-center items-center">
              <Wishlist />
            </div>
          </div>
          <div>
            <p>Chose your size</p>
            <form>
              <input type="radio" id="child" name="age" value="child" />
              <input type="radio" id="adult" name="age" value="adult" />
              <input type="radio" id="senior" name="age" value="senior" />
            </form>
          </div>
          <div>
            <div>quantity</div>
            <div>
              <FilledButton text="Add to cart" onClick={handleAddtocart}/>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* <h3>RELATED PRODUCTS</h3> */}
        <Products title="RELATED PRODUCTS" />
      </div>
    </div>
  )
}
