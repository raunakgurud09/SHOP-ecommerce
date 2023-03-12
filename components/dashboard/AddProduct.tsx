import { MAX_FILE_SIZE } from '@/constants/index'
import useAddProduct from '@/hooks/product/useAddProducts'
import { useUser } from '@/hooks/user/useUser'
import React, { useState } from 'react'
import FilledButton from '../ui/Buttons/Filled'
import OutlinedButton from '../ui/Buttons/Outlined'

interface InitialState {
  name: string
  description: string
  price: number
  category: string
  image: string | ArrayBuffer | null
}

function AddProduct() {
  const { data: currentUser } = useUser()
  const addProduct = useAddProduct()

  const initialState: InitialState = {
    name: '',
    description: '',
    price: 0,
    category: '',
    image: '',
  }

  const [product, setProduct] = useState(initialState)

  const handleSubmit = (e) => {
    e.preventDefault()
    handleProductUpdate()
  }

  const handleProductUpdate = async () => {
    if (!currentUser) return
    try {
      await addProduct(product)
    } catch (error) {
      alert('not updated')
    }
  }
  const handleInputChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0]
      console.log(selectedFile, 'clicked')

      if (!selectedFile) return

      if (selectedFile.size > MAX_FILE_SIZE) {
        // setToast('error', 'Photo must be less than 1mb')
        alert('message')
        return
      }

      if (
        selectedFile.type !== 'image/png' &&
        selectedFile.type !== 'image/jpeg'
      ) {
        alert('message in')
        // setToast('error', 'Invalid file type')
        return
      }
      imageChange(selectedFile)
    } else {
      return
    }
  }

  const imageChange = (file: Blob) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      setProduct({ ...product, image: reader.result })
    }
    reader.readAsDataURL(file)
  }

  return (
    <div className="m-4  rounded">
      <h4 className="p-4 font-bold text-4xl">Add Product</h4>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 p-4">
        <label className="text-lg font-semibold">Name</label>
        <input
          name="name"
          className="h-10 focus:border-0 p-2 rounded"
          placeholder="name"
          onChange={handleInputChange}
        />
        <label className="text-lg font-semibold">Description</label>
        <textarea
          name="description"
          className="h-20 focus:border-0 p-2 rounded  break-all	"
          placeholder="description"
          onChange={handleInputChange}
        />
        <label className="text-lg font-semibold">Price</label>
        <input
          name="price"
          className="h-10 focus:border-0 p-2 rounded"
          placeholder="Amount in Rs."
          onChange={handleInputChange}
        />
        <label className="text-lg font-semibold">Category</label>
        <input
          name="category"
          className="h-10 focus:border-0 p-2 rounded"
          placeholder="name"
          onChange={handleInputChange}
        />
        <div className="relative">
          <input
            type="file"
            className="opacity-0 absolute w-auto h-full "
            onChange={handleChange}
            accept="image/x-png,image/jpeg"
          />
          <OutlinedButton text="Change Photo" />
        </div>
      </form>
      <div className="p-4">
        <FilledButton text="Update" onClick={handleProductUpdate} />
      </div>
    </div>
  )
}

export default AddProduct
