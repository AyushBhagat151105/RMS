import AdminSidebar from '@/components/AdminSidebar'
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import withRestaurantSelectionCheck from '@/hooks/withRestaurantSelectionCheck';
import { createFileRoute, Outlet } from '@tanstack/react-router'


function RouteComponentBase() {
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
  );
}

const RouteComponent = withRestaurantSelectionCheck(RouteComponentBase);

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
});
