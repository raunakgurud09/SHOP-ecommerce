import { useRouter } from 'next/router'
import useSWR from 'swr'

import ProductService from '@/services/ProductService'

interface Params {
  category?: string
  sort?: string
  keyword?: string
}

const useSearch = ({ category, sort, keyword }: Params) => {
  const { isReady } = useRouter()
  let params: Params = {}

  if (category) {
    params = { ...params, category }
  }
  if (sort) {
    params = { ...params, sort }
  }
  if (keyword) {
    params = { ...params, keyword }
  }

  const value = isReady ? ['/api/search', JSON.stringify(params)] : null

  const { data, error } = useSWR(value, (params: any) => {
    const parsedParams = JSON.parse(params)
    return ProductService.getProducts({ ...parsedParams, limit: 12 })
  })

  const isLoading = !data && !error

  return {
    data,
    error,
    isLoading,
  }
}

export default useSearch
