import CartList from '@/components/cart/CartList'
import Container from '@/components/core/Layouts/Container'
import withAuth from '@/components/withAuth'
import React from 'react'

const cart = () => {
  return (
    <>
      {/* <Meta title="Cart" /> */}
      <Container>
        <h2 className="font-bold text-xl">YOUR CART</h2>
        <br />
        <CartList />
      </Container>
    </>
  )
}

export default withAuth(cart)
