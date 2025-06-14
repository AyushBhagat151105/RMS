import RestaurantTable from '@/components/RestaurantTable'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/restaurant')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <RestaurantTable />
  </div>
}
