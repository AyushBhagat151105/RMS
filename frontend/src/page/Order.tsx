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
import { useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useMemo, useRef, useState } from "react"
import { toast } from "sonner"
import { exportToCSV, exportToExcel } from "@/lib/exportUtils"
import { Button } from "@/components/ui/button"

export default function Order() {
    const { selectedRestaurantId } = useRestaurantStore()
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const prevOrderIdsRef = useRef<Set<string>>(new Set())

    const queryClient = useQueryClient()

    const [selectedOrder, setSelectedOrder] = useState<any>(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["orders", selectedRestaurantId?.id],
        queryFn: () => getOrders(selectedRestaurantId?.id as string),
        refetchInterval: 10000,
        refetchOnWindowFocus: true,
        enabled: !!selectedRestaurantId?.id,
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
            queryClient.invalidateQueries({ queryKey: ["waiter-count", selectedRestaurantId?.id as string] });
            queryClient.invalidateQueries({ queryKey: ["kitchen-count", selectedRestaurantId?.id as string] });
            queryClient.invalidateQueries({ queryKey: ["order-count", selectedRestaurantId?.id as string] });
            queryClient.invalidateQueries({ queryKey: ["order-count-by-status", selectedRestaurantId?.id as string] })
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

    const exportableData = sortedOrders.map((order: any) => ({
        id: order.id,
        waiter: order.waiter.fullName,
        table: order.table.number,
        status: order.status,
        total: order.total,
        createdAt: new Date(order.createdAt).toLocaleString(),
        items: order.Order_Item.map((item: any) => `${item.menuItem.name} x ${item.quantity}`).join(", ")
    }));


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
                    <div className="flex justify-end mb-2 gap-2">
                        <Button
                            onClick={() => exportToCSV(exportableData)}
                            className=" text-white px-4 py-1 rounded "
                        >
                            Export CSV
                        </Button>
                        <Button
                            onClick={() => exportToExcel(exportableData)}
                            className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                        >
                            Export Excel
                        </Button>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Order ID</TableHead>
                                <TableHead>Waiter Name</TableHead>
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
                                    <TableCell>{order.waiter.fullName}</TableCell>
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
