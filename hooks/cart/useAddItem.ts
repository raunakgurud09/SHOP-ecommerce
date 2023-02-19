import { useCallback, useState } from 'react'
import { mutate } from 'swr'
import CartServices from '@/services/CartService'

interface InitialState {
  addingToCart: boolean
  error: null | string
}

const useAddItem = () => {
  const initialState: InitialState = {
    addingToCart: false,
    error: null,
  }
  const [status, setStatus] = useState(initialState)
  const { addingToCart, error } = status

  const addToCart = useCallback(
    async (productId: string, qty: number, size: string) => {
      try {
        await CartServices.addToCart(productId, qty, size)
        mutate('/')
        setStatus({ addingToCart: false, error: null })
      } catch (error) {
        setStatus({ addingToCart: false, error: error.message })
      }
    },
    [status]
  )

  return { addToCart, addingToCart, status }
}

export default useAddItem
