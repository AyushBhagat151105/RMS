import { axiosInstance } from '@/lib/axios'

export const getOrders = async (id: string) => {
  console.log(id)

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
