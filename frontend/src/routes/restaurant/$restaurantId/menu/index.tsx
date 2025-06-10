import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/restaurant/$restaurantId/menu/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/restaurant/$restaurantId/menu/"!</div>
}
