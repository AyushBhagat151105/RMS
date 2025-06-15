export type Order = {
  id: string
  waiter: {
    fullName: string
    email: string
  }
  table: {
    number: number
  }
  status: string
  total: number
  createdAt: string
  Order_Item: {
    id: string
    quantity: number
    menuItem: {
      name: string
      imageUrl: string
    }
  }[]
}

export type Menu = {
  restaurantId: string
  name: string
  description: string
  price: number
  tags: string
  imageUrl: File
}

export type Restaurant = {
  id: string
  name: string
  description: string
  address: string
  phone: string
  email: string
}

export type MenuItem = {
  id: string
  name: string
  description: string
  price: number
  imageUrl: string
  available: boolean
  restaurantId: string
  categoryId: string | null
  tags: string[]
  createdAt: string
  updatedAt: string
}
