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
import { postMenu, updateMenus } from "@/hooks/query"
import { useMutation } from "@tanstack/react-query"
import { toast } from "sonner"
import { queryClient } from "@/integrations/tanstack-query/root-provider"
import { useEffect, useState } from "react"

type MenuFormInput = z.infer<typeof menuInputSchema>

type MenuFormProps = {
    type: "create" | "update"
    defaultValues?: Partial<MenuFormInput>
    menuId?: string
}

function MenuForm({ type, defaultValues, menuId }: MenuFormProps) {
    const { selectedRestaurantId } = useRestaurantStore()
    const [previewImage, setPreviewImage] = useState<string | null>(null)

    const form = useForm<MenuFormInput>({
        resolver: zodResolver(menuInputSchema),
        defaultValues: {
            restaurantId: selectedRestaurantId?.id || "",
            name: defaultValues?.name || "",
            description: defaultValues?.description || "",
            price: defaultValues?.price || "",
            tags: defaultValues?.tags || "",
            imageUrl: undefined as unknown as File,
        },
    })

    useEffect(() => {
        if (defaultValues) {
            form.reset({
                restaurantId: selectedRestaurantId?.id as string,
                ...defaultValues,
                imageUrl: undefined as unknown as File,
            })
        }
        if (previewImage) URL.revokeObjectURL(previewImage)
    }, [defaultValues, selectedRestaurantId])

    const mutation = useMutation({
        mutationFn: async (data: FormData) => {
            if (type === "create") return await postMenu(data)
            if (type === "update" && menuId) return await updateMenus(data, menuId)
            throw new Error("Invalid form submission")
        },
        onSuccess: () => {
            toast.success(`Menu ${type === "create" ? "created" : "updated"} successfully`)
            form.reset()
            queryClient.invalidateQueries({ queryKey: ["get-all-menus"] })
        },
        onError: (error) => {
            toast.error(`Failed to ${type === "create" ? "create" : "update"} menu`)
            console.error(error)
        },
    })

    const onSubmit = (value: MenuFormInput) => {
        const formData = new FormData()
        formData.append("restaurantId", value.restaurantId)
        formData.append("name", value.name)
        formData.append("description", value.description)
        formData.append("price", value.price)
        formData.append("tags", value.tags)
        if (value.imageUrl) formData.append("imageUrl", value.imageUrl)

        mutation.mutate(formData)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                    {/* Hidden Restaurant ID */}
                    <FormField
                        control={form.control}
                        name="restaurantId"
                        render={({ field }) => (
                            <FormItem className="hidden">
                                <FormLabel>Restaurant ID</FormLabel>
                                <FormControl>
                                    <Input placeholder="Restaurant ID" {...field} />
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
                                    <Input type="number" placeholder="Enter price" {...field} />
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
                                    <Input placeholder="e.g. spicy, veg, lunch" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Image */}
                    <FormField
                        control={form.control}
                        name="imageUrl"
                        render={({ field: { onChange } }) => (
                            <FormItem>
                                <FormLabel>Image</FormLabel>
                                <FormControl>
                                    <div className="space-y-2">
                                        <Input
                                            type="file"
                                            accept="image/*"
                                            onChange={(e) => {
                                                const file = e.target.files?.[0]
                                                if (file) {
                                                    onChange(file)
                                                    const url = URL.createObjectURL(file)
                                                    setPreviewImage(url)
                                                }
                                            }}
                                        />
                                        {previewImage && (
                                            <img
                                                src={previewImage}
                                                alt="Preview"
                                                className="mt-2 h-32 object-cover rounded border"
                                            />
                                        )}
                                    </div>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button type="submit" className="w-full" disabled={mutation.isPending}>
                        {type === "create" ? "Create" : "Update"}
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default MenuForm
