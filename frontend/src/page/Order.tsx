import OrderDialog from "@/components/OrderDialog"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { getOrders } from "@/hooks/query"
import { useRestaurantStore } from "@/store/restaurant"
import { useQuery } from "@tanstack/react-query"
import { useEffect, useMemo, useRef, useState } from "react"
import { toast } from "sonner"

export default function Order() {
    const { selectedRestaurantId } = useRestaurantStore()
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const prevOrderIdsRef = useRef<Set<string>>(new Set())

    const [selectedOrder, setSelectedOrder] = useState<any>(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["orders", selectedRestaurantId],
        queryFn: () => getOrders(selectedRestaurantId?.id as string),
        refetchInterval: 10000,
        refetchOnWindowFocus: true,
        enabled: !!selectedRestaurantId,
    })

    const orders = data?.data || []

    useEffect(() => {
        if (!orders.length) return

        const currentOrderIds = new Set<string>(
            orders.map((order: { id: string }) => order.id)
        )
        const previousOrderIds = prevOrderIdsRef.current

        let hasNewOrder = false
        for (const id of currentOrderIds) {
            if (!previousOrderIds.has(id)) {
                hasNewOrder = true
                break
            }
        }

        if (hasNewOrder && previousOrderIds.size > 0) {
            toast.success("🔔 New order received!")
            audioRef.current?.play().catch((err) => {
                console.error("Audio playback failed:", err)
            })
        }

        prevOrderIdsRef.current = currentOrderIds
    }, [orders])

    const sortedOrders = useMemo(() => {
        return [...orders].sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        )
    }, [orders])

    return (
        <div className="p-4 w-screen md:w-[1120px]">
            <h1 className="text-xl font-semibold mb-4">Orders</h1>
            <audio ref={audioRef} src="/notification.mp3" preload="auto" />

            {!selectedRestaurantId ? (
                <p>Please select a restaurant</p>
            ) : isLoading ? (
                <p>Loading...</p>
            ) : isError ? (
                <p>Error loading orders</p>
            ) : (
                <>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Order ID</TableHead>
                                <TableHead>Customer</TableHead>
                                <TableHead>Table</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Total (₹)</TableHead>
                                <TableHead>Items</TableHead>
                                <TableHead>Created At</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sortedOrders.map((order: any) => (
                                <TableRow
                                    key={order.id}
                                    onClick={() => {
                                        setSelectedOrder(order)
                                        setIsDialogOpen(true)
                                    }}
                                    className="cursor-pointer hover:bg-muted transition"
                                >
                                    <TableCell className="font-mono text-xs">{order.id}</TableCell>
                                    <TableCell>{order.user.fullName}</TableCell>
                                    <TableCell>#{order.table.number}</TableCell>
                                    <TableCell>
                                        <span
                                            className={`px-2 py-1 rounded text-xs font-semibold ${order.status === "COMPLETED"
                                                ? "bg-green-100 text-green-800"
                                                : "bg-yellow-100 text-yellow-800"
                                                }`}
                                        >
                                            {order.status}
                                        </span>
                                    </TableCell>
                                    <TableCell>₹{order.total}</TableCell>
                                    <TableCell>
                                        {order.Order_Item.map((item: any) => (
                                            <div key={item.id} className="text-sm">
                                                {item.menuItem.name} × {item.quantity}
                                            </div>
                                        ))}
                                    </TableCell>
                                    <TableCell>
                                        {new Date(order.createdAt).toLocaleString()}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                    {/* Dialog for order details */}
                    <OrderDialog
                        open={isDialogOpen}
                        onOpenChange={setIsDialogOpen}
                        order={selectedOrder}
                    />
                </>
            )}
        </div>
    )
}
