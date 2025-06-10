import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/staff/kitchen')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/staff/kitchen"!</div>
}
