import apiClient from '@/lib/apiClient'

const addToCart = async (
  productId: string,
  qty: number,
  size: string
): Promise<any> => {
  try {
    const url = '/cart'
    const { data } = await apiClient.post(url, { productId, qty, size })
    return data.products
  } catch (error) {
    console.log(error)
  }
}

const removeFromCart = async (productId: string): Promise<any> => {
  try {
    const url = '/cart'
    return await apiClient.delete(url, { data: { productId } })
  } catch (error) {
    console.log(error)
  }
}

const getCart = async () => {
  try {
    const url = '/cart'
    const { data } = await apiClient.get(url)
    return data.data
  } catch (error) {
    console.log(error)
  }
}

const CartServices = {
  addToCart,
  getCart,
  removeFromCart,
}

export default CartServices
