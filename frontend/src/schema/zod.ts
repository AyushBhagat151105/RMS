import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().min(2, 'Email is too short'),
  password: z.string().min(2, 'Password is too short'),
})
