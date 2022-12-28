import Link from 'next/link'
import ProductCard from '../ui/Cards/Product'

export default function Products({ title }) {
  return (
    // eslint-disable-next-line @next/next/link-passhref
    <Link href={'/products/846185285'}>
      <div className="flex flex-col  p-3">
        <h3 className="text-2xl font-bold">{title}</h3>
        <br />
        <div
          className="flex w-full flex-wrap justify-evenly items-center"
          aria-label="card wrapper"
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <div className="flex flex-wrap w-full justify-between"></div>
        </div>
      </div>
    </Link>
  )
}
