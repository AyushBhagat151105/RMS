import { menuInputSchema } from "@/schema/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useRestaurantStore } from "@/store/restaurant"
import { postMenu } from "@/hooks/query"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"

function MenuForm() {
    const { selectedRestaurantId } = useRestaurantStore()

    type MenuFormInput = z.infer<typeof menuInputSchema>

    const form = useForm<MenuFormInput>({
        resolver: zodResolver(menuInputSchema),
        defaultValues: {
            restaurantId: selectedRestaurantId as string,
            name: "",
            description: "",
            price: "",
            tags: "",
            imageUrl: undefined as unknown as File,
        },
    })

    const mutation = useMutation({
        mutationFn: (data: FormData) => postMenu(data),
        onSuccess: () => {
            toast.success("Menu created successfully")
            form.reset()
        },
        onError: (error) => {
            toast.error("Failed to create menu")
            console.error(error)
        },
    })

    const onSubmit = (value: MenuFormInput) => {
        const formData = new FormData()
        formData.append("restaurantId", value.restaurantId)
        formData.append("name", value.name)
        formData.append("description", value.description)
        formData.append("price", value.price) // keep as string if that's what backend expects
        formData.append("tags", value.tags)
        formData.append("imageUrl", value.imageUrl) // File object

        mutation.mutate(formData)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Restaurant ID */}
                    <FormField
                        control={form.control}
                        name="restaurantId"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Restaurant ID</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter Restaurant ID" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Name */}
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter item name" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Description */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter description" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Price */}
                    <FormField
                        control={form.control}
                        name="price"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        step="0.01"
                                        placeholder="Enter price"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Tags */}
                    <FormField
                        control={form.control}
                        name="tags"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Tags</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g., spicy, veg, lunch" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Image Upload */}
                    <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field: { onChange } }) => (
                            <FormItem>
                                <FormLabel>Image</FormLabel>
                                <FormControl>
                                    <Input
                                        type="file"
                                        accept="image/jpeg,image/png,image/webp"
                                        onChange={(e) => {
                                            const file = e.target.files?.[0];
                                            if (file) onChange(file);
                                        }}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button type="submit" className="w-full" disabled={mutation.isPending}>
                        Submit
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default MenuForm
