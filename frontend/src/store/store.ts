import { axiosInstance } from '@/lib/axios'
import { toast } from 'sonner'
import { create } from 'zustand'

export interface User {
  id?: string
  username?: string
  fullName: string
  email: string
  avatar?: string
  role?: string
  isVerified?: boolean
}

export interface SignUpResponse {
  statusCode: Number
  success: boolean
  message?: string
  data?: Record<string, any>
}

export interface FormDataTypes {
  username: string
  email: string
  password: string
  fullName: string
}

export interface loginFormDataTypes {
  email: string
  password: string
}

export interface AuthStore {
  authUser: User | null
  isSignInUp: boolean
  isLoggingIn: boolean
  isCheckingAuth: boolean
  checkAuth: () => Promise<void>
  signUp: (data: FormDataTypes) => Promise<SignUpResponse | undefined>
  signIn: (data: loginFormDataTypes) => Promise<User | undefined>
  logOut: () => Promise<void>
  verify: (id: string) => Promise<void>
  waiter: (data: loginFormDataTypes) => Promise<User | undefined>
  kitchen: (data: loginFormDataTypes) => Promise<User | undefined>
}

export const useAuthStore = create<AuthStore>()((set) => ({
  authUser: null,
  isSignInUp: false,
  isLoggingIn: false,
  isCheckingAuth: false,

  checkAuth: async () => {
    set({ isCheckingAuth: true })
    try {
      const res = await axiosInstance.get('/auth/me')
      console.log('auth api call')
      set({ authUser: res.data.data })
      console.log('auth user', res.data.data)
    } catch (error) {
      set({ authUser: null })
    } finally {
      set({ isCheckingAuth: false })
    }
  },

  signUp: async (data: FormDataTypes): Promise<SignUpResponse | undefined> => {
    set({ isSignInUp: true })

    try {
      const res = await axiosInstance.post('/auth/register', data)
      console.log(res.data)
      return res.data as SignUpResponse
    } catch (error) {
      console.log(error)
      toast.error('Error while signUp')
      return undefined
    } finally {
      set({ isSignInUp: false })
    }
  },

  signIn: async (data: loginFormDataTypes) => {
    set({ isLoggingIn: true })
    try {
      const res = await axiosInstance.post('/auth/login', data)
      console.log(res)

      if (res.data.data.isVerified) {
        set({ authUser: res.data.data })
        toast.success('Login successful.')
        return res.data.data
      } else {
        toast.success('Please verify your email first.')
        return res.data.data
      }
    } catch (error) {
      toast.error(`Error while login ${error}`)
    } finally {
      set({ isLoggingIn: false })
    }
  },

  logOut: async () => {
    set({ isLoggingIn: true })
    try {
      await axiosInstance.post('/auth/logout')
      set({ authUser: null })
      localStorage.removeItem('auth')
    } catch (error) {
      toast.error('Error while logout')
    } finally {
      set({ isLoggingIn: false })
    }
  },

  verify: async (id: string) => {
    set({ isLoggingIn: true })
    try {
      const res = await axiosInstance.get(`/auth/verify/${id}`)
      console.log(res)
      toast.success(res.data.message)
    } catch (error) {
      console.log(error)
      toast.error('Error while verify')
    } finally {
      set({ isLoggingIn: false })
    }
  },

  waiter: async (data: loginFormDataTypes) => {
    set({ isLoggingIn: true })
    try {
      const res = await axiosInstance.post('/staff/login-waiter', data)
      console.log(res)

      set({ authUser: res.data.data })
      toast.success('Login successful.')
      return res.data.data
    } catch (error) {
      toast.error('Error while login')
    } finally {
      set({ isLoggingIn: false })
    }
  },

  kitchen: async (data: loginFormDataTypes) => {
    set({ isLoggingIn: true })
    try {
      const res = await axiosInstance.post('/staff/login-kitchen', data)
      console.log(res.data)
      set({ authUser: res.data.data })
      toast.success('Login successful.')
      return res.data.data
    } catch (error) {
      toast.error('Error while login')
    } finally {
      set({ isLoggingIn: false })
    }
  },
}))
