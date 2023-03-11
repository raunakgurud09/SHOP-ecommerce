import React from 'react'
import AddProduct from './AddProduct'
import AllProducts from './AllProducts'
import Banner from './Banner'
import General from './General'

function Index({ value }) {
  return (
    <div>
      {(() => {
        if (value === 0) {
          return <General />
        } else if (value === 1) {
          return <Banner />
        } else if (value === 2) {
          return <AddProduct />
        } else if (value === 3) {
          return <AllProducts />
        } else {
          return <div>error</div>
        }
      })()}
    </div>
  )
}

export default Index
