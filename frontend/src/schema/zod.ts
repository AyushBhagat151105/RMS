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

export const menuSchema = z.object({
  restaurantId: z.string().min(1, 'Restaurant ID is required'),
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z
    .string()
    .transform((val) => parseFloat(val))
    .refine((val) => !isNaN(val), {
      message: 'Price must be a number',
    }),
  tags: z.string().min(1, 'Tags is required'),
  imageUrl: z
    .custom<File>((file) => file instanceof File, {
      message: 'Image is required',
    })
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      message: 'Image must be less than 5MB',
    })
    .refine(
      (file) => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type),
      {
        message: 'Only JPG, PNG, or WEBP formats are allowed',
      },
    ),
})

export const menuInputSchema = z.object({
  restaurantId: z.string().min(1, 'Restaurant ID is required'),
  name: z.string().min(1, 'Name is required'),
  description: z.string().min(1, 'Description is required'),
  price: z.string().min(1, 'Price is required'),
  tags: z.string().min(1, 'Tags is required'),
  imageUrl: z
      .custom<File>((file) => file instanceof File, {
          message: 'Image is required',
      })
      .refine((file) => file.size <= 5 * 1024 * 1024, {
          message: 'Image must be less than 5MB',
      })
      .refine(
          (file) => ['image/jpeg', 'image/png', 'image/webp'].includes(file.type),
          {
              message: 'Only JPG, PNG, or WEBP formats are allowed',
          },
      ),
})