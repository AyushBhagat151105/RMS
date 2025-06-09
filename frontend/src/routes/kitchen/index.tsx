import { useAuthStore } from '@/store/store'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/kitchen/')({
  beforeLoad: ({ navigate }) => {
    const authUser = useAuthStore.getState().authUser

    if (!authUser || authUser.role !== "KITCHEN") {
      navigate({ to: "/" })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/kitchen/"!</div>
}
