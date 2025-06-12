import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useMenuStore } from '@/store/useMenuStore'
import { createFileRoute } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { ShoppingBasket } from 'lucide-react'
import Cart from '@/components/Cart'

export const Route = createFileRoute('/restaurant/$restaurantId/menu/')({
  component: RouteComponent,
})

function RouteComponent() {
  let { addItem } = useMenuStore()
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Mobile First */}
      <header className="w-full border-b bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between p-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            RMS
          </h2>

          {/* Desktop View: Show Sheet in nav */}
          <nav className="hidden md:flex space-x-4 lg:space-x-8 items-center">
            <Sheet>
              <SheetTrigger asChild>
                <button>
                  <ShoppingBasket />
                </button>
              </SheetTrigger>
              <SheetContent side="right">
                <Cart />
              </SheetContent>
            </Sheet>
          </nav>

          {/* Mobile View: Only visible on small screens */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button>
                  <ShoppingBasket className="h-7 w-7" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm">
                {/* Inside the mobile sheet, show cart only when needed */}
                <div className="mt-4 text-center">
                  <Cart />
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Search Section - Mobile First */}
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-stretch sm:items-center">
          <Input
            placeholder="Search Item..."
            className="flex-1 h-10 sm:h-12 text-base"
          />
          <Button className="h-10 sm:h-12 px-6 sm:px-8 font-semibold">
            Search
          </Button>
        </div>
      </div>

      {/* Products Grid - Mobile First Responsive */}
      <div className="max-w-7xl mx-auto p-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <Card
              key={index}
              className="w-full flex flex-col bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <CardHeader className="pb-3">
                <CardTitle className="text-lg sm:text-xl font-bold text-center">
                  Phone
                </CardTitle>
              </CardHeader>
              <CardContent className="flex items-center justify-center p-4">
                <img
                  src="https://cdn.dribbble.com/users/2626994/screenshots/8086173/cook_4x.png"
                  alt="Phone"
                  className="w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-lg"
                />
              </CardContent>
              <CardFooter className="flex flex-col gap-3 pt-3">
                <CardAction className="font-semibold text-lg text-green-600">
                  Price: ₹20
                </CardAction>
                <Button
                  onClick={() =>
                    addItem({
                      id: String(index),
                      name: `Phone ${index + 1}`,
                      price: 20,
                      quantity: 1,
                    })
                  }
                  className="bg-red-500 hover:bg-red-600 px-4 py-3 text-sm font-semibold rounded-xl text-white w-full transition-colors cursor-pointer"
                >
                  ADD TO CART
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RouteComponent
