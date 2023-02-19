import Container from '@/components/core/Layouts/Container'
import Banners from '@/components/Banner'

import Products from '@/components/Home/Products'
import ProductServices from '@/services/ProductService'

const Home = ({ products }) => {
  return (
    <>
      <Container>
        {/* <Banners banners={banners} /> */}
        {/* <div className="bg-slate-200/20"></div> */}
        {/* <div>Products</div> */}
        <div className="h-[100vh]">Catagories</div>
        <Products title="PRODUCT" initialProducts={products} />
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const products = await ProductServices.getProducts()
  return {
    props: {
      products,
    },
  }
}

export default Home
