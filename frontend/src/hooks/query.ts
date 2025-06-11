import { axiosInstance } from '@/lib/axios'

export const getOrders = async (id: string) => {
  console.log(id)

  const res = await axiosInstance.get(`/order/get-all-orders/${id}`)

  return res.data
}
