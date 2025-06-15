import GreetingCard from '@/components/GreetingCard'
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

  const { authUser } = useAuthStore()
  console.log(authUser);


  return (
    <div className='flex justify-center items-center p-3'>
      <div>
        <GreetingCard />

      </div>
    </div>
  )
}
