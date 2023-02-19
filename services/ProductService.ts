import apiClient from '@/lib/apiClient'

const getProducts = async (): Promise<any> => {
  try {
    const url = '/products'
    const { data } = await apiClient.get(url)
    return data.products
  } catch (error) {
    
    }
}

const getProduct = async (id: string): Promise<any> => {
  try {
    const url = `/products/${id}`
    const { data } = await apiClient.get(url)

    return data
  } catch (error) {}
}

const ProductServices = {
  getProducts,
  getProduct,
}

export default ProductServices
