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
    if (!authUser || authUser.role !== 'ADMIN') {
      navigate({ to: '/' })
    }
  },
  component: RouteComponent,
})

function RouteComponent() {
  const { selectedRestaurantId } = useRestaurantStore()
  const { authUser } = useAuthStore()

  const restaurantId = selectedRestaurantId?.id || authUser?.restaurantId

  const { data, isLoading } = useQuery({
    queryKey: ['get-all-menus', restaurantId as string],
    queryFn: () => getMenus(restaurantId as string),
    enabled: !!restaurantId,
  })

  if (!selectedRestaurantId) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 text-center text-lg text-muted-foreground">
        Please select a restaurant to view menu.
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen px-4 text-center text-lg text-muted-foreground">
        Loading menu items...
      </div>
    )
  }


  return (
    <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-8">
      {/* Header */}
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
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {data.data.map((item: any) => (
            <MenuCard key={item.id} data={item} />
          ))}
        </div>
      ) : (
        <div className="mt-12 text-center text-base sm:text-lg text-muted-foreground">
          No menu items found. Click "Add Menu" to create one.
        </div>
      )}
    </div>
  )
}
