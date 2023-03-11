import apiClient from '@/lib/apiClient'

const getProducts = async (): Promise<any> => {
  try {
    const url = '/products'
    const { data } = await apiClient.get(url)
    return data.products
  } catch (error) {}
}

const getProduct = async (id: string): Promise<any> => {
  try {
    const url = `/products/${id}`
    const { data } = await apiClient.get(url)

    return data
  } catch (error) {}
}

const getBanner = async (): Promise<any> => {
  try {
    const url = '/products/banners'
    const { data } = await apiClient.get(url)
    console.log(data)
    return data.data
  } catch (error) {
    return
  }
}

const getCategory = async (): Promise<any> => {
  try {
    const url = '/products/categories'
    const { data } = await apiClient.get(url)
    return data.data
  } catch (error) {
    return
  }
}

const ProductServices = {
  getProducts,
  getProduct,
  getBanner,
  getCategory
}

export default ProductServices
