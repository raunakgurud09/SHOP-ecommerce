import { useCallback } from 'react'
import AuthServices from '@/services/AuthService'
import { autoLogin, autoLogout } from '@/utils/auth'
import { mutate } from 'swr'
import { useRouter } from 'next/router'


export const useLogin = () => {
  return useCallback(async (email: string, password: string) => {
    const { token } = await AuthServices.login(email, password)
    autoLogin(token)
    mutate('/api/me')
  }, [])
}

export const useLogout = () => {
  return useCallback(async () => {
    autoLogout()
    mutate('/api/me')
  }, [])
}

export const useRegister = () => {
  const router = useRouter()
  return useCallback(async (name: string, email: string, password: string) => {
    const res = await AuthServices.register(name,email,password)
    router.push('/login')
    mutate('/api/me')
  }, [])
}
