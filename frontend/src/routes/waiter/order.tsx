import Order from '@/page/Order'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/waiter/order')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Order />
  </div>
}
