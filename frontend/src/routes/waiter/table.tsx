import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/waiter/table')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/waiter/table"!</div>
}
