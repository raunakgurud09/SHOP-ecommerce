import { GitHubLogo } from '@/components/Icons'
import Image from 'next/image'
import Link from 'next/link'
import phot from '../../../public/download.jpeg'
import Wishlist from '../Badges/wishlist'

export default function ProductCard({ image, name, price, id }) {
  return (
    <Link href={`/products/${id}`} passHref>
      <div className="m-2 bg-secondary-200 max-w-[220px] h-80 w-full rounded">
        <div className="h-3/4">
          <Image
            src={image}
            alt={name}
            width={220}
            height={180}
            className="h-full object-cover fill"
          />
        </div>
        <div className="m-2">
          <h3 className="truncate font-semibold text-lg">{name}</h3>
          <div className="flex my-2">
            <p className="text-sm font-medium w-3/4 text-green-500">${price}</p>
            <div className="w-1/4 flex justify-center items-center">
              <Wishlist />
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
