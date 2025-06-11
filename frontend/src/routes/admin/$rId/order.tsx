import Order from '@/page/Order'
import { useAuthStore } from '@/store/store'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/$rId/order')({
  beforeLoad: ({ navigate }) => {
    const authUser = useAuthStore.getState().authUser

    if (!authUser || authUser.role !== "ADMIN") {
      navigate({ to: "/" })
    }
  },
  component: RouteComponent,
})



function RouteComponent() {


  return (

    <div className='flex'>
      <Order />
    </div>

  )
}
