import { useEffect, useRef } from "react";
import { getOrders } from "@/hooks/query";
import { useRestaurantStore } from "@/store/restaurant";
import { useQuery } from "@tanstack/react-query";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { toast } from "sonner";

function Order() {
    const { selectedRestaurantId } = useRestaurantStore();
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const prevOrderIdsRef = useRef<Set<string>>(new Set());

    const { data, isLoading, isError } = useQuery({
        queryKey: ["orders", selectedRestaurantId],
        queryFn: () => getOrders(selectedRestaurantId as string),
        refetchInterval: 10000,
        refetchOnWindowFocus: true,
        enabled: !!selectedRestaurantId,
    });

    const orders = data?.data || [];

    useEffect(() => {
        if (!orders.length) return;

        const currentOrderIds = new Set<string>(
            orders.map((order: { id: string }) => order.id)
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
            toast.success("🔔 New order received!");
            audioRef.current?.play().catch((err) => {
                console.error("Audio playback failed:", err);
            });
        }

        prevOrderIdsRef.current = currentOrderIds;
    }, [orders]);


    if (!selectedRestaurantId) return <p>Please select a restaurant</p>;
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading orders</p>;

    return (
        <div className="p-4 w-full md:w-[1180px]">
            <h1 className="text-xl font-semibold mb-4">Orders</h1>

            {/* Audio element */}
            <audio ref={audioRef} src="/notification.mp3" preload="auto" />

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
                    {orders.map((order: any) => (
                        <TableRow key={order.id}>
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
                            <TableCell>{new Date(order.createdAt).toLocaleString()}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default Order;
