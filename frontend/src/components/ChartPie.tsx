import { getCountOrdersByStatus } from "@/hooks/query";
import { useRestaurantStore } from "@/store/restaurant";
import { useQuery } from "@tanstack/react-query";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "./ui/card";
import {
    Cell,
    Legend,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip,
} from "recharts";

function ChartPie() {
    const { selectedRestaurantId } = useRestaurantStore();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["order-count-by-status", selectedRestaurantId?.id],
        queryFn: () =>
            getCountOrdersByStatus(selectedRestaurantId?.id as string),
    });

    const STATUS_COLORS: Record<string, string> = {
        PENDING: "#facc15",   // Yellow
        COMPLETED: "#22c55e", // Green
        CANCELLED: "#f87171", // Red
        FAILED: "#a855f7",    // Purple
        REFUNDED: "#60a5fa",  // Blue
    };

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading data</p>;

    const chartData = data.data.map((item: any) => ({
        name: item.status,
        value: item._count.status,
    }));

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Orders by Status</CardTitle>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                        <Pie
                            dataKey="value"
                            data={chartData}
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            label
                        >
                            {chartData.map(
                                (
                                    entry: { name: string; value: number },
                                    index: number
                                ) => {
                                    const fillColor: string =
                                        STATUS_COLORS[entry.name] || "#d1d5db";
                                    return (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={fillColor}
                                        />
                                    );
                                }
                            )}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
}

export default ChartPie;
