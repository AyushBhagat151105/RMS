import OrderDialog from "@/components/OrderDialog"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from "@/components/ui/table"
import { getOrders, updateOrderStatus } from "@/hooks/query"
import { useRestaurantStore } from "@/store/restaurant"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { useEffect, useMemo, useRef, useState } from "react"
import { toast } from "sonner"
import { exportToCSV, exportToExcel } from "@/lib/exportUtils"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/store/store"
import type { OrderType } from "@/types/types"



export default function Order() {
    const { selectedRestaurantId } = useRestaurantStore()
    const { authUser } = useAuthStore()
    const audioRef = useRef<HTMLAudioElement | null>(null)
    const prevOrderIdsRef = useRef<Set<string>>(new Set())
    const prevOrderStatusRef = useRef<Map<string, string>>(new Map());


    const queryClient = useQueryClient()
    const restaurantId = selectedRestaurantId?.id || authUser?.restaurantId

    console.log(authUser);

    const [selectedOrder, setSelectedOrder] = useState<any>(null)
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const { data, isLoading, isError } = useQuery({
        queryKey: ["orders", restaurantId],
        queryFn: () => getOrders(restaurantId as string),
        refetchInterval: 10000,
        refetchOnWindowFocus: true,
        enabled: !!restaurantId,
    })

    const orders = data?.data || []

    useEffect(() => {
        if (!orders.length) return;


        const currentOrderIds = new Set<string>(
            orders.map((order: OrderType) => order.id)
        );
        const previousOrderIds = prevOrderIdsRef.current;


        let hasNewOrder = false;
        for (const id of currentOrderIds) {
            if (!previousOrderIds.has(id)) {
                hasNewOrder = true;
                break;
            }
        }

        if (hasNewOrder && previousOrderIds.size > 0) {
            queryClient.invalidateQueries({ queryKey: ["waiter-count", restaurantId as string] });
            queryClient.invalidateQueries({ queryKey: ["kitchen-count", restaurantId as string] });
            queryClient.invalidateQueries({ queryKey: ["order-count", restaurantId as string] });
            queryClient.invalidateQueries({ queryKey: ["order-count-by-status", restaurantId as string] });

            toast.success("🔔 New order received!");
            audioRef.current?.play().catch((err) => {
                console.error("Audio playback failed:", err);
            });
        }


        const prevStatuses = prevOrderStatusRef.current;
        for (const order of orders as OrderType[]) {
            const prevStatus = prevStatuses.get(order.id);
            if (prevStatus && prevStatus !== order.status) {
                toast.info(`🔄 Order ${order.id} status changed: ${prevStatus} ➝ ${order.status}`);
                audioRef.current?.play().catch((err) => {
                    console.error("Audio playback failed:", err);
                });
            }
            prevStatuses.set(order.id, order.status);
        }

        prevOrderIdsRef.current = currentOrderIds;

    }, [orders, queryClient, restaurantId]);



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


    const mutation = useMutation({
        mutationFn: async (id: string) => {
            await updateOrderStatus(id, { status: "COMPLETED" })

            queryClient.invalidateQueries({ queryKey: ["orders", restaurantId as string] });
            toast.success("🔔 Order completed!")
        }
    })

    const handleCompleteOrder = async (id: string) => {
        mutation.mutate(id)
    }


    return (
        <div className="w-full">
            <h1 className="text-xl font-semibold mb-4">Orders</h1>
            <audio ref={audioRef} src="/notification.mp3" preload="auto" />

            {!restaurantId ? (
                <p>Please select a restaurant</p>
            ) : isLoading ? (
                <p>Loading...</p>
            ) : isError ? (
                <p>Error loading orders</p>
            ) : (
                <>
                    {/* Export buttons only for admin */}
                    {authUser?.role === "ADMIN" && (
                        <div className="flex justify-end mb-2 gap-2">
                            <Button onClick={() => exportToCSV(exportableData)}>Export CSV</Button>
                            <Button variant="outline" onClick={() => exportToExcel(exportableData)}>
                                Export Excel
                            </Button>
                        </div>
                    )}

                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Order ID</TableHead>
                                <TableHead>Waiter</TableHead>
                                <TableHead>Table</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Total (₹)</TableHead>
                                <TableHead>Items</TableHead>
                                <TableHead>Created</TableHead>
                                {authUser?.role === "KITCHEN" && <TableHead>Action</TableHead>}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sortedOrders.map((order: any) => (
                                <TableRow
                                    key={order.id}
                                    onClick={() => {

                                        setSelectedOrder(order);
                                        setIsDialogOpen(true);

                                    }}
                                    className={`cursor-${authUser?.role !== "KITCHEN" ? "pointer" : "default"} hover:bg-muted transition`}
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
                                    <TableCell>{new Date(order.createdAt).toLocaleString()}</TableCell>

                                    {/* Kitchen can update status */}
                                    {authUser?.role === "KITCHEN" && (
                                        <TableCell>
                                            {order.status !== "COMPLETED" && (
                                                <Button
                                                    variant="outline"
                                                    onClick={() => handleCompleteOrder(order.id)}
                                                    className="text-xs"
                                                >
                                                    Mark Completed
                                                </Button>
                                            )}
                                        </TableCell>
                                    )}
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>


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
