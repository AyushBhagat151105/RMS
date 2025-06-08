import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/restaurants_/$restaurantsId/restaurant')(
  {
    component: RouteComponent,
  },
)


function RouteComponent() {
  const { restaurantsId } = Route.useParams()
  return <div><p>{`Hello "/restaurants_/${restaurantsId}/restaurant"!`}</p></div>
}
