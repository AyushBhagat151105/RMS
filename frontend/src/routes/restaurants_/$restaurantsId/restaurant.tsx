import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/restaurants_/$restaurantsId/restaurant')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div>Hello "/restaurants_/$restaurantsId/restaurant"!</div>
}
