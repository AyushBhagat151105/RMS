import Waiter from '@/page/Waiter'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/staff/waiter')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <Waiter />
  </div>
}
