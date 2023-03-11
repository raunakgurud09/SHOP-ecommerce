import Image from 'next/image'
import React from 'react'


const Banners = ({ banner }) => {
  return (
    <>
      <div className="h-96 w-full bg-slate-400 rounded">
        <Image
          src={banner.imageURL}
          alt={banner.name}
          width={720}
          height={400}
          className="h-full object-contain fill"
        />
      </div>
    </>
  )
}

export default Banners
