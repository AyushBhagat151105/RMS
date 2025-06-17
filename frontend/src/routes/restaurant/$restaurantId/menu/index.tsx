import { createFileRoute } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { Skeleton } from '@/components/ui/skeleton'
import { useQuery } from '@tanstack/react-query'
import { axiosInstance } from '@/lib/axios'
import { useState } from 'react'

export const Route = createFileRoute('/restaurant/$restaurantId/menu/')({
  component: RouteComponent,
})

const getMenus = async (restaurantId: string) => {
  const res = await axiosInstance.get(`/menu/get-menu/${restaurantId}`)
  return res.data.data
}

function RouteComponent() {
  const { restaurantId } = Route.useParams()
  const { data: menus = [], isLoading } = useQuery({
    queryKey: ['menus', restaurantId],
    queryFn: () => getMenus(restaurantId),
  })

  const [search, setSearch] = useState("")
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const allTags = Array.from(new Set(menus.flatMap((m: any) => m.tags || [])))

  const filteredMenus = menus.filter((menu: any) => {
    const matchSearch = menu.name.toLowerCase().includes(search.toLowerCase())
    const matchTag = activeTag ? menu.tags?.includes(activeTag) : true
    return matchSearch && matchTag
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold sm:text-2xl">RMS</h2>
        </div>
      </header>

      {/* Search + Tag Filters */}
      <div className="max-w-7xl mx-auto py-3 px-4 sm:px-6 lg:px-8 space-y-2">
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center">
          <Input
            placeholder="Search Item..."
            className="flex-1 h-10 text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button className="h-10 px-4 text-sm font-medium">
            Search
          </Button>
        </div>
        {allTags.length > 0 && (
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              onClick={() => setActiveTag(null)}
              className={`cursor-pointer text-xs ${!activeTag ? 'bg-black text-white' : ''}`}
            >
              All
            </Badge>
            {allTags.map((tag) => (
              <Badge
                key={tag as string}
                onClick={() => setActiveTag(tag as string)}
                className={`cursor-pointer text-xs ${activeTag === tag ? 'bg-black text-white' : ''
                  }`}
              >
                {tag as string}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Menu Grid */}
      <div className="max-w-7xl mx-auto pb-4 px-4 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {[...Array(8)].map((_, i) => (
              <Skeleton key={i} className="h-72 w-full rounded-lg" />
            ))}
          </div>
        ) : filteredMenus.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground mt-8">
            No menu items found.
          </p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {filteredMenus.map((menu: {
              id: string
              name: string
              description: string
              price: number
              imageUrl: string
              tags: string[]
              available: boolean
            }) => (
              <Card
                key={menu.id as string}
                className="w-full flex flex-col bg-white border shadow-sm hover:shadow-md transition-all duration-200 rounded-lg overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={menu.imageUrl}
                    alt={menu.name}
                    className="w-full h-36 object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge
                      variant={menu.available ? 'default' : 'destructive'}
                      className="text-[10px] px-1.5 py-0.5"
                    >
                      {menu.available ? 'Available' : 'Unavailable'}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pt-1 pb-1 px-2">
                  <CardTitle className="text-sm font-semibold text-center truncate">
                    {menu.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-2 py-0">
                  <p className="text-xs text-muted-foreground text-center line-clamp-1">
                    {menu.description}
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col items-center gap-0.5 px-2 pb-2 mt-1">
                  <p className="text-green-600 font-semibold text-sm">₹{menu.price}</p>
                  <div className="flex flex-wrap justify-center gap-1">
                    {menu.tags?.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-[10px]">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default RouteComponent
