import { axiosInstance } from '@/lib/axios'

export const getOrders = async (id: string) => {
  // console.log(id)

  const res = await axiosInstance.get(`/order/get-all-orders/${id}`)

  return res.data
}

export const postMenu = async (data: FormData) => {
  const res = await axiosInstance.post('/menu/create-menu', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return res.data
}

export const getMenus = async (restaurentId: string) => {
  const res = await axiosInstance.get(`/menu/get-menu/${restaurentId}`)

  return res.data
}

export const updateMenus = async (data: FormData, id: string) => {
  const res = await axiosInstance.put(`/menu/update-menu/${id}`, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return res.data
}

export const deleteMenus = async (id: string) => {
  const res = await axiosInstance.delete(`/menu/delete-menu/${id}`)

  return res.data
}

export const chengeMenuAvailability = async (id: string) => {
  const res = await axiosInstance.post(`/menu/chenge-availability/${id}`)

  return res.data
}

export const getAllTable = async (id: string) => {
  const res = await axiosInstance.get(`/table/get-all-table/${id}`)

  return res.data
}

export const createTable = async (data: {
  number: number
  capacity: number
  restaurantId: string
}) => {
  const res = await axiosInstance.post('/table/create', data)
  return res.data
}

export const updateTable = async (
  data: {
    number: number
    capacity: number
    restaurantId: string
  },
  id: string,
) => {
  const res = await axiosInstance.put(`/table/update/${id}`, data)
  return res.data
}

export const deleteTable = async (id: string) => {
  const res = await axiosInstance.delete(`/table/delete/${id}`)

  return res.data
}

export const createWaiter = async (data: FormData) => {
  const res = await axiosInstance.post(`/staff/create-waiter`, data)

  return res.data
}

export const createkitchen = async (data: FormData) => {
  const res = await axiosInstance.post(`/staff/create-kitchen`, data)

  return res.data
}

export const updateWaiter = async (data: FormData, id: string) => {
  const res = await axiosInstance.put(`/staff/update-waiter/${id}`, data)

  return res.data
}

export const updateKitchen = async (data: FormData, id: string) => {
  const res = await axiosInstance.put(`/staff/update-kitchen/${id}`, data)

  return res.data
}

export const deleteWaiter = async (id: string) => {
  const res = await axiosInstance.delete(`/staff/delete-waiter/${id}`)

  return res.data
}

export const deleteKitchen = async (id: string) => {
  const res = await axiosInstance.delete(`/staff/delete-kitchen/${id}`)

  return res.data
}

export const getAllWaiters = async (restaurantId: string) => {
  const res = await axiosInstance.get(`/staff/get-all-waiters/${restaurantId}`)

  return res.data
}

export const getAllKitchens = async (restaurantId: string) => {
  const res = await axiosInstance.get(`/staff/get-all-kitchen/${restaurantId}`)

  return res.data
}

export const getCountOrders = async (resaturantId: string) => {
  const res = await axiosInstance.get(`/dashboard/total-orders/${resaturantId}`)

  return res.data
}

export const getCountOrdersByStatus = async (resaturantId: string) => {
  const res = await axiosInstance.get(
    `/dashboard/total-orders-by-status/${resaturantId}`,
  )

  return res.data
}

export const getCountWaiter = async (resaturantId: string) => {
  const res = await axiosInstance.get(`/dashboard/total-waiter/${resaturantId}`)

  return res.data
}

export const getCountKitchen = async (resaturantId: string) => {
  const res = await axiosInstance.get(
    `/dashboard/total-kitchen/${resaturantId}`,
  )

  return res.data
}

export const getTotalRestaurant = async () => {
  const res = await axiosInstance.get('/restaurant/get-restaurants')

  return res.data
}

export const createRestaurant = async (data: FormData) => {
  const res = await axiosInstance.post('/restaurant/create-restaurant', data)

  return res.data
}

export const updateRestaurant = async (data: FormData, id: string) => {
  const res = await axiosInstance.put(
    `/restaurant/update-restaurant/${id}`,
    data,
  )

  return res.data
}

export const deleteRestaurant = async (id: string) => {
  const res = await axiosInstance.delete(`/restaurant/delete-restaurant/${id}`)

  return res.data
}

export const updateOrderStatus = async (
  id: string,
  data: { status: string },
) => {
  // console.log(data)

  const res = await axiosInstance.put(`/order/update-order/${id}`, data)

  return res.data
}

export const createOrder = async (data: {
  tableId: string
  items: { menuId: string; quantity: number; price: number }[]
}) => {
  const res = await axiosInstance.post('/order/create-order', data)
  return res.data
}
