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
