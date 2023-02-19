import CartServices from '@/services/CartService'
import { useUser } from 'hooks/user/useUser'
import useSWR from 'swr'

const useCart = () => {
  const { data: user } = useUser()

  const value = user ? 'api/v1/cart' : null

  const { data, error } = useSWR(value, CartServices.getCart)

  const isLoading = !data && !error

  return {
    data,
    error,
    isLoading,
  }
}

export default useCart