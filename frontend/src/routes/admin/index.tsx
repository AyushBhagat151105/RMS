import AdminPanal from '@/components/AdminPanal'
import { useAuthStore } from '@/store/store'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/')({
  beforeLoad: ({ navigate }) => {
    const authUser = useAuthStore.getState().authUser

    if (!authUser || authUser.role !== "ADMIN") {
      navigate({ to: "/" })
    }
  },
  component: RouteComponent,
})
 
function RouteComponent() {
  return (
    <div>
      <AdminPanal />
    </div>
  )
}
