import Container from '@/components/core/Layouts/Container'
import Banners from '@/components/Banner'

import Products from '@/components/Home/Products'
import ProductServices from '@/services/ProductService'
import CheckAPI from '@/services/CheckAPI'
import Slideshow from '@/components/ui/slider'

const Home = ({ working, products }) => {
  const live = working
  return (
    <>
      {live ? (
        <Container>
          {/* <div className="bg-slate-200/20"></div> */}
          {/* <div>Products</div> */}
          {/* <div className="h-[100vh]">Catagories</div> */}
          {/* <Banners /> */}
          {/* <Slideshow /> */}
          <Products title="PRODUCT" initialProducts={products} />
        </Container>
      ) : (
        <h1>SERVER DOWN</h1>
      )}
    </>
  )
}

export async function getStaticProps() {
  const status = await CheckAPI.check()
  if (status === 'OK') {
    const products = await ProductServices.getProducts()
    return {
      props: {
        working: true,
        products,
      },
    }
  } else {
    const products = [
      {
        name: 'dummy',
        price: '778',
        image: '',
        _id: 'akdo2i22f23f9v209i3jiujj',
      },
    ]
    return {
      props: {
        working: false,
        products,
      },
    }
  }
}

export default Home
