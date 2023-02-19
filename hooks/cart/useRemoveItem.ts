import CartServices from '@/services/CartService'
import { useCallback, useState } from 'react'
import { mutate } from 'swr'

interface InitialState {
  removingFromCart: boolean
  error: null | string
}

const useRemoveItem = () => {
  const initialState: InitialState = {
    removingFromCart: false,
    error: null,
  }
  const [status, setStatus] = useState(initialState)
  const { removingFromCart, error } = status

  const removeItem = useCallback(
    async (productId: string) => {
      try {
        await CartServices.removeFromCart(productId)
        mutate('/')
        setStatus({ removingFromCart: false, error: null })
      } catch (error) {
        setStatus({ removingFromCart: false, error: error.message })
      }
    },
    [status]
  )

  return { removeItem, removingFromCart, status }
}

export default useRemoveItem
