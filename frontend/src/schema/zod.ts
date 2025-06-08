import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().min(2, 'Email is too short'),
  password: z.string().min(2, 'Password is too short'),
})

export const registerSchema = z.object({
  email: z.string().min(2, 'Email is too short'),
  password: z.string().min(2, 'Password is too short'),
  username: z.string().min(2, 'Username is too short'),
  fullName: z.string().min(2, 'Full name is too short'),
})

export const waiterSchema = z.object({
  email: z.string().min(2, 'Email is too short'),
  password: z.string().min(2, 'Password is too short'),
})

export const kitchenSchema = z.object({
  email: z.string().min(2, 'Email is too short'),
  password: z.string().min(2, 'Password is too short'),
})
