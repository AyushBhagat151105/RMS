import TableList from '@/components/TableList'
import { useAuthStore } from '@/store/store'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/tables')({
  beforeLoad: ({ navigate }) => {
    const authUser = useAuthStore.getState().authUser

    if (!authUser || authUser.role !== "ADMIN") {
      navigate({ to: "/" })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='flex w-screen h-screen'>
    <TableList />
  </div>
}
