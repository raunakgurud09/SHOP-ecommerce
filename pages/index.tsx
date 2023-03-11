import Container from '@/components/core/Layouts/Container'
import Banners from '@/components/Home/Banner'

import Products from '@/components/Home/Products'
import ProductServices from '@/services/ProductService'
import CheckAPI from '@/services/CheckAPI'
import Slideshow from '@/components/ui/slider'
import Categories from '@/components/Home/Categories'

const Home = ({ working, products, banner, categories }) => {
  const live = working
  return (
    <>
      {live ? (
        <Container>
          <Banners banner={banner} />
          <Categories Categories={categories} />
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
    const banner = await ProductServices.getBanner()
    const categories = await ProductServices.getCategory()
    return {
      props: {
        working: true,
        products,
        banner,
        categories,
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
