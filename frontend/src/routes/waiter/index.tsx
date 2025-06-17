import ChartPie from '@/components/ChartPie'
import GreetingCard from '@/components/GreetingCard'
import Order from '@/page/Order'
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
  return <div className="lg:w-full sm:w-screen sm:px-6 lg:px-8 py-6 space-y-8 max-w-7xl mx-auto">
    <GreetingCard />
    <ChartPie />
    <Order />
  </div>
}
