import MenuCard from '@/components/MenuCard'
import MenuFormDialog from '@/components/MenuFormDialog'
import { getMenus } from '@/hooks/query'
import { useRestaurantStore } from '@/store/restaurant'
import { useAuthStore } from '@/store/store'
import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/menu')({
  beforeLoad: ({ navigate }) => {
    const authUser = useAuthStore.getState().authUser
    if (!authUser || authUser.role !== "ADMIN") {
      navigate({ to: "/" })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { selectedRestaurantId } = useRestaurantStore()

  const { data, isLoading, isError } = useQuery({
    queryKey: ['get-all-menus'],
    queryFn: () => getMenus(selectedRestaurantId?.id as string),
    enabled: !!selectedRestaurantId,
  })

  if (!selectedRestaurantId) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg text-muted-foreground">
        Please select a restaurant to view menu.
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg text-muted-foreground">
        Loading menu items...
      </div>
    )
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-screen text-lg text-destructive">
        Error fetching menu items. Please try again later.
      </div>
    )
  }

  return (
    <div className="w-full px-4 py-6 sm:px-6 lg:px-8 space-y-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground text-center sm:text-left">
          Menu Management
        </h2>
        <div className="self-center sm:self-auto">
          <MenuFormDialog />
        </div>
      </div>
  
      {/* Menu Grid */}
      {data?.data?.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {data.data.map((item: any) => (
            <MenuCard key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="text-center text-muted-foreground mt-12 text-base sm:text-lg">
          No menu items found. Click "Add Menu" to create one.
        </div>
      )}
    </div>
  )
  
}
