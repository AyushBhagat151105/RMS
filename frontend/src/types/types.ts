export type Order = {
  id: string
  user: {
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
  id: string;
  name: string;
  description: string;
  address: string;
  phone: string;
  email: string;
};
