import { useCallback } from 'react'
import { mutate } from 'swr'

import ProductServices from '@/services/ProductService'

const useAddProduct = () => {
  return useCallback(async (product: any) => {
    await ProductServices.addProducts(product)
    mutate('/api/me')
  }, [])
}

export default useAddProduct
