import CreateOrderForm from '@/components/CreateOrderForm'
import { useRestaurantStore } from '@/store/restaurant'
import { useAuthStore } from '@/store/store'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/waiter/orders')({
  component: RouteComponent,
})

function RouteComponent() {

  const { selectedRestaurantId } = useRestaurantStore()
  const { authUser } = useAuthStore()

  const restaurantId = selectedRestaurantId?.id || authUser?.restaurantId

  return <div className='p-4'>
    <CreateOrderForm restaurantId={restaurantId as string} />
  </div>
}
