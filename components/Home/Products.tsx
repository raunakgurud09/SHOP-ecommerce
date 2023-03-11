import Link from 'next/link'
import ProductCard from '../ui/Cards/Product'

export default function Products({ initialProducts, title }) {
  return (
    // eslint-disable-next-line @next/next/link-passhref

    <div className="flex flex-col p-3">
      <h3 className="text-2xl font-bold">{title}</h3>
      <br />
      <div
        className="flex w-full flex-wrap justify-start items-start"
        aria-label="card wrapper"
      >
        {initialProducts.map((product) => (
          <ProductCard
            key={product._id}
            name={product.name}
            image={product.imageUrl}
            price={product.price}
            id={product._id}
          />
        ))}
        <div className="flex flex-wrap w-full justify-between"></div>
      </div>
    </div>
  )
}
