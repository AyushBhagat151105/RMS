
import { WaiterTable } from '@/components/WaiterTable'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/staff/waiter')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <WaiterTable />
  </div>
}
