import Container from '@/components/core/Layouts/Container'
import Banners from '@/components/Banner'

import banners from '@/data/banners'
import Products from '@/components/Home/Products'

const Home = () => {
  return (
    <>
      {/* <Banners banners={banners} /> */}
      {/* <div className="bg-slate-200/20"></div> */}

      <div className="h-[100vh]">Catagories</div>
      {/* <div>Products</div> */}
      <Products title="PRODUCT" />
    </>
  )
}

// export async function getStaticProps() {}

export default Home
