import { GitHubLogo } from '@/components/Icons'
import Image from 'next/image'
import phot from '../../../public/download.jpeg'
import Wishlist from '../Badges/wishlist'

export default function ProductCard() {
  return (
    <div className="m-2 bg-secondary-200 max-w-[220px] h-80 w-full rounded">
      <div className="h-3/4">
        <Image
          src={phot}
          alt="product"
          width={220}
          height={180}
          className="h-full object-cover fill"
        />
      </div>
      <div className="m-2">
        <h3 className="truncate font-semibold text-lg">Product name</h3>
        <div className="flex my-2">
          <p className="text-sm font-medium w-3/4 text-green-500">$ 4585</p>
          <div className="w-1/4 flex justify-center items-center">
            <Wishlist />
          </div>
        </div>
      </div>
    </div>
  )
}
