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
      <main className="flex flex-col md:flex-row w-full h-screen overflow-hidden">

        <div>
          <SidebarTrigger />
        </div>


        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  )
}
