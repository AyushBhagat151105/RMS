import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/staff/waiter')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/admin/staff/waiter"!</div>
}
