import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import WaiterSidebar from '@/components/WaiterSidebar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/waiter')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SidebarProvider defaultOpen={true}>
      <WaiterSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
