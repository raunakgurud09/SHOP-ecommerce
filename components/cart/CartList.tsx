import useCart from 'hooks/cart/useCart'
import React from 'react'
import FilledButton from '../ui/Buttons/Filled'
import Image from 'next/image'
import Spinner from '../ui/spinner'
import Link from 'next/link'

export default function CartList() {
  const { isLoading, data, error } = useCart()

  if (isLoading) {
    return <Spinner />
    // load skeleton
  }

  if (error) {
    // return <ErrorMessage message="Cannot fetch cart at this moment. Please try again" />;
  }

  return (
    <>
      <div className="flex flex-row w-full flex-wrap justify-between font-medium text-lg">
        {data?.items.length ? (
          data.items.map((item) => (
            <Link key={item._id} href={`/products/${`item.product._id`}`} passHref>
              <div
                className="flex flex-row p-2 rounded-lg bg-slate-600/10"
                aria-label="cart"
              >
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
              </div>
            </Link>
          ))
        ) : (
          <div>
            <FilledButton>Go SHOP</FilledButton>
          </div>
        )}
      </div>
    </>
  )
}
