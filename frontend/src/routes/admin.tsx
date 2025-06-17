import AdminSidebar from '@/components/AdminSidebar'
import { SiteHeader } from '@/components/site-header'
import {
  SidebarProvider,
  SidebarInset,
} from '@/components/ui/sidebar'
import withRestaurantSelectionCheck from '@/hooks/withRestaurantSelectionCheck'
import { createFileRoute, Outlet } from '@tanstack/react-router'

function RouteComponentBase() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AdminSidebar />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col overflow-hidden">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6 overflow-auto">
              <Outlet />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}

const RouteComponent = withRestaurantSelectionCheck(RouteComponentBase)

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
})
