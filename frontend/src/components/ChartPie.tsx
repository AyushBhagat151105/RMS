import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { PieChart, Pie, Sector } from "recharts";

import { getCountOrdersByStatus } from "@/hooks/query";
import { useRestaurantStore } from "@/store/restaurant";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";

import type { PieSectorDataItem } from "recharts/types/polar/Pie";
import { useAuthStore } from "@/store/store";

type ChartItem = {
    status: string;
    orders: number;
    fill: string;
};

const STATUS_COLORS: Record<string, string> = {
    PENDING: "#facc15",    // Yellow
    COMPLETED: "#22c55e",  // Green
    CANCELLED: "#f87171",  // Red
    FAILED: "#a855f7",     // Purple
    REFUNDED: "#60a5fa",   // Blue
};



function ChartPie() {
    const { selectedRestaurantId } = useRestaurantStore();
    const { authUser } = useAuthStore()
    const [activeIndex, setActiveIndex] = useState(0);

    const restaurantId = selectedRestaurantId?.id || authUser?.restaurantId

    const { data, isLoading, isError } = useQuery({
        queryKey: ["order-count-by-status", restaurantId as string],
        queryFn: () =>
            getCountOrdersByStatus(restaurantId as string),
    });

    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error loading data</p>;

    const chartData: ChartItem[] = data.data.map((item: any) => ({
        status: item.status,
        orders: item._count.status,
        fill: STATUS_COLORS[item.status] || "var(--chart-default)",
    }));

    const chartConfig: ChartConfig = {
        orders: { label: "Orders" },
        ...chartData.reduce((acc: Record<string, { label: string; color: string }>, item: ChartItem) => {
            acc[item.status] = {
                label: item.status,
                color: item.fill,
            };
            return acc;
        }, {}),
    };

    return (
        <Card className="flex flex-col w-full max-w-md">
            <CardHeader className="items-center pb-0">
                <CardTitle>Orders by Status</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="orders"
                            nameKey="status"
                            innerRadius={60}
                            strokeWidth={5}
                            activeIndex={activeIndex}
                            onMouseEnter={(_, index) => setActiveIndex(index)}
                            activeShape={({ outerRadius = 0, ...props }: PieSectorDataItem) => (
                                <Sector {...props} outerRadius={outerRadius + 10} />
                            )}
                        />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}

export default ChartPie;
