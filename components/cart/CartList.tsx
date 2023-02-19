import useCart from 'hooks/cart/useCart'
import React from 'react'
import FilledButton from '../ui/Buttons/Filled'
import Image from 'next/image'
import Spinner from '../ui/spinner'
import Link from 'next/link'
import { useUser } from 'hooks/user/useUser'
import useRemoveItem from 'hooks/cart/useRemoveItem'
import Router from 'next/router'

export default function CartList() {
  const { isLoading, data, error } = useCart()
  const { removeItem } = useRemoveItem()
  const { data: currentUser } = useUser()

  if (isLoading) {
    return <Spinner />
    // load skeleton
  }

  if (error) {
    // return <ErrorMessage message="Cannot fetch cart at this moment. Please try again" />;
  }

  const handleDeleteItem = async (e) => {
    try {
      if (!currentUser) return Router.push(`/login`)
      const productId = e.target.value
      await removeItem(productId)
      Router.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="flex flex-row w-full flex-wrap justify-between font-medium text-lg">
        {data?.items.length ? (
          data.items.map((item) => (
            <div
              className="flex flex-row p-2 rounded-lg bg-slate-600/10"
              aria-label="cart"
              key={item._id}
            >
              <Link href={`/products/${item.product?._id}`} passHref>
                <div>
                  <Image
                    src={item.product?.imageUrl}
                    alt={item.product?.name}
                    width={140}
                    height={140}
                    className="h-full object-cover fill"
                  />
                </div>
                <div className="m-2">
                  <h3>{item.product?.name}</h3>
                  <p>size: {item.size}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: {item.product?.price}</p>
                </div>
              </Link>
              <div>
                <button value={item.product?._id} onClick={handleDeleteItem}>
                  delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="h-[100vh] flex justify-start flex-col items-center text-justify">
            <p>YOUR CART IS EMPTY</p>
            <br />
            <FilledButton href="/" text="GO SHOP" />
          </div>
        )}
      </div>
    </>
  )
}
