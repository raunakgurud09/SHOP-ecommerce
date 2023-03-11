import React from 'react'
import Image from 'next/image'

function Categories({ Categories }) {
  return (
    <div className="flex flex-col p-3">
      <h3 className="text-2xl font-bold">CATEGORIES</h3>
      <br />
      <div className="flex w-full justify-start flex-col items-start md:flex-row">
        {Categories.map((category) => (
          <div className="w-full m-2  h-56 md:w-1/2 md:h-60" key={category._id}>
            <Image
              src={category.imageURL}
              alt={category.name}
              width={720}
              height={400}
              className="h-full object-cover fill"
            />
          </div>
        ))}
      </div>
      <div className="flex flex-wrap w-full justify-between"></div>
    </div>
  )
}

export default Categories
