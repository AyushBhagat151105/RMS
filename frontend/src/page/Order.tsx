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

function Order() {
    const { selectedRestaurantId } = useRestaurantStore();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["orders"],
        queryFn: async () => {
            return await getOrders(selectedRestaurantId as string);
        },
        refetchInterval: 1000 * 60 * 5, // 5M
        refetchOnWindowFocus: true,
        enabled: !!selectedRestaurantId,
    });

    if (!selectedRestaurantId) return <p>Please select a restaurant</p>;
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading orders</p>;

    const orders = data?.data || [];

    return (
        <div className="p-4 w-screen md:w-[1120px]">
            <h1 className="text-xl font-semibold mb-4">Orders</h1>
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
