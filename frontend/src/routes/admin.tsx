import AdminSidebar from '@/components/AdminSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/admin')({
  // beforeLoad: ({ navigate }) => {
  //   const authUser = useAuthStore.getState().authUser

  //   if (!authUser || authUser.role !== "ADMIN") {
  //     navigate({ to: "/" })
  //   }
  // },
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SidebarProvider>
      <AdminSidebar />
      <main className='flex w-screen h-screen'>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
