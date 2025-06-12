import { axiosInstance } from '@/lib/axios'
import { create } from 'zustand'

type Restaurants = {
  id: string
  name: string
  description: string
  phone: string
  email: string
  logoUrl?: string
}

type RestaurantState = {
  restaurants: Restaurants[]
  selectedRestaurantId: string | null

  getRestaurants: () => Promise<any>
  selectRestaurant: (id: string) => void
}

export const useRestaurantStore = create<RestaurantState>()((set) => ({
  restaurants: [],
  selectedRestaurantId: null,
  getRestaurants: async () => {
    try {
      const res = await axiosInstance.get('/restaurant/get-restaurants')
      console.log(res.data.data)
      set({ restaurants: res.data.data })
    } catch (error) {
      console.log(error)
    }
  },

  selectRestaurant: (id: string) => {
    // localStorage.setItem('selectedRestaurantId', id)
    set({ selectedRestaurantId: id })
  },
}))
