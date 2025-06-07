import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/waiter/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/waiter/"!</div>
}
