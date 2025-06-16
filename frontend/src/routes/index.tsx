import Auth from '@/page/Auth'
import { useRestaurantStore } from '@/store/restaurant'
import { useAuthStore } from '@/store/store'
import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'


export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const navigate = useNavigate()
  const { authUser, checkAuth, isCheckingAuth } = useAuthStore()
  const { getRestaurants } = useRestaurantStore()

  useEffect(() => {
    checkAuth()
    getRestaurants()
  }, [])

  useEffect(() => {
    if (!authUser || isCheckingAuth) return

    switch (authUser.role) {
      case 'ADMIN':
        navigate({ to: '/admin', replace: true })
        break
      case 'KITCHEN':
        navigate({ to: '/kitchen', replace: true })
        break
      case 'WAITER':
        navigate({ to: '/waiter', replace: true })
        break
    }
  }, [authUser, isCheckingAuth])

  if (isCheckingAuth) {
    return <div className='text-white'>Checking authentication...</div>
  }
  return (
    <div className='flex flex-col items-center justify-center h-screen w-screen'>
      <Auth />
    </div>
  )
}
