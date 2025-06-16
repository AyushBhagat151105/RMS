import {
    Form,
    FormField,
    FormLabel,
    FormItem,
    FormControl,
    FormMessage,
} from "@/components/ui/form"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { useForm } from "react-hook-form"
import { useMutation, useQuery } from "@tanstack/react-query"
import { getMenus, getAllTable } from "@/hooks/query"
import { useState } from "react"
import { toast } from "sonner"
import { createOrder as createOrderApi } from "@/hooks/query" //


export default function CreateOrderForm({ restaurantId }: { restaurantId: string }) {
    const form = useForm()

    const [menuItems, setMenuItems] = useState<{ id: string; quantity: number }[]>([])

    const { data: tables, isLoading: loadingTables } = useQuery({
        queryKey: ["tables", restaurantId],
        queryFn: () => getAllTable(restaurantId),
    })

    const { data: menus, isLoading: loadingMenus } = useQuery({
        queryKey: ["menus", restaurantId],
        queryFn: () => getMenus(restaurantId),
    })

    const { mutate: createOrder, isPending } = useMutation({
        mutationFn: async (data: {
            tableId: string
            items: { menuId: string; quantity: number; price: number }[]
        }) => {
            return await createOrderApi(data)
        },
        onSuccess: () => {
            toast.success("Order placed!")
            form.reset()
            setMenuItems([])
        },
        onError: () => toast.error("Failed to place order"),
    })


    const handleAddItem = () => {
        setMenuItems([...menuItems, { id: "", quantity: 1 }])
    }

    const handleChangeItem = (index: number, field: "id" | "quantity", value: string | number) => {
        const updated = [...menuItems]
        if (field === "quantity") {
            updated[index].quantity = Number(value)
        } else {
            updated[index].id = String(value)
        }
        setMenuItems(updated)
    }

    const handleRemoveItem = (index: number) => {
        const updated = [...menuItems]
        updated.splice(index, 1)
        setMenuItems(updated)
    }




    const handleSubmit = (values: any) => {
        createOrder({
            tableId: values.tableId,
            items: menuItems.map((item) => {
                const menu = menus?.data?.find((m: any) => m.id === item.id)
                return {
                    menuId: item.id,
                    quantity: item.quantity,
                    price: menu?.price ?? 0,
                }
            }),
        })
    }


    if (loadingTables || loadingMenus) {
        return <p>Loading...</p>
    }


    return (
        <Card>
            <CardHeader>
                <CardTitle>Create Order</CardTitle>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
                        {/* Select Table */}
                        <FormField
                            control={form.control}
                            name="tableId"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Select Table</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value}>
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select a table" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            {Array.isArray(tables?.data) &&
                                                tables.data.map((table: any) => (
                                                    <SelectItem key={table.id} value={table.id}>
                                                        Table {table.number} (Capacity: {table.capacity})
                                                    </SelectItem>
                                                ))}

                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Menu Items Selection */}
                        <div className="space-y-3">
                            {menuItems.map((item, index) => (
                                <div key={index} className="grid grid-cols-2 md:grid-cols-3 gap-2 items-end">
                                    <div>
                                        <label className="text-sm text-muted-foreground">Select Menu Item</label>
                                        <Select
                                            onValueChange={(value) => handleChangeItem(index, "id", value)}
                                            value={item.id}
                                        >
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select Menu" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Array.isArray(menus?.data) &&
                                                    menus.data.map((menu: any) => (
                                                        <SelectItem key={menu.id} value={menu.id}>
                                                            {menu.name}
                                                        </SelectItem>
                                                    ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div>
                                        <label className="text-sm text-muted-foreground">Quantity</label>
                                        <Input
                                            type="number"
                                            min={1}
                                            value={item.quantity}
                                            onChange={(e) => handleChangeItem(index, "quantity", e.target.value)}
                                        />
                                    </div>
                                    <div className="flex justify-end pt-5">
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            onClick={() => handleRemoveItem(index)}
                                        >
                                            Remove
                                        </Button>
                                    </div>
                                </div>

                            ))}

                            <Button type="button" onClick={handleAddItem} variant="outline" className="w-full">
                                + Add Menu Item
                            </Button>
                        </div>

                        <Button type="submit" className="w-full" disabled={isPending}>
                            {isPending ? "Placing Order..." : "Place Order"}
                        </Button>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}