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
