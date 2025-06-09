import { useAuthStore } from '@/store/store'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/waiter/')({
  beforeLoad: ({ navigate }) => {
    const authUser = useAuthStore.getState().authUser

    if (!authUser || authUser.role !== "WAITER") {
      navigate({ to: "/" })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/waiter/"!</div>
}
