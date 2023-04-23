import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { API_URL } from '@/constants/index'
import { AiOutlineDelete } from 'react-icons/ai'
// const products = await ProductServices.getProducts()
function AllProducts() {
  const [products, setProducts] = useState([])
  const [deleteId,setDeleteId] =useState()

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((e) => console.log(e))
  }, [])

  const handleDeleteProduct = async (e) => {
    const productId = e.target.value
    console.log(productId)
  }

  return (
    <div className="m-4  rounded">
      <h4 className="p-4 font-bold text-4xl">Product Setting</h4>
      {products &&
        products.map((product) => (
          <div
            className="p-4 w-full h-24 flex flex-row justify-between items-center text-center"
            key={product._id}
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              className="w-1-6 bg-indigo-200 text-start"
              width="60"
              height="60"
            />
            <p className="w-2/6 w-25 truncate">{product.name}</p>
            <p className="w-1-6 w-20">{product.price} Rs.</p>
            <p className="w-1-6 w-32">{product.category}</p>
            <button className="w-1-6" value={product._id}  onClick={handleDeleteProduct} >
              <AiOutlineDelete size="30" color="red" />
            </button>
          </div>
        ))}
    </div>
  )
}

export default AllProducts
