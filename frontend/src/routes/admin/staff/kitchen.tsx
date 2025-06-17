import { KitchenTable } from '@/components/KitchenTable'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/staff/kitchen')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <KitchenTable />
  </div>
}
