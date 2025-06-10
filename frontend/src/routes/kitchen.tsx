import KitchenSidebar from '@/components/KitchenSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/kitchen')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SidebarProvider defaultOpen={true}>
      <KitchenSidebar />
      <main>
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  )
}
