import { getCountKitchen, getCountOrders, getCountWaiter } from "@/hooks/query";
import { useRestaurantStore } from "@/store/restaurant";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Loader2, Users, Utensils, Receipt } from "lucide-react";

function CountCard() {
    const { selectedRestaurantId } = useRestaurantStore();

    const {
        data: waiterCount,
        isLoading: waiterLoading,
    } = useQuery({
        queryKey: ["waiter-count", selectedRestaurantId?.id],
        queryFn: () => getCountWaiter(selectedRestaurantId?.id as string),
        enabled: !!selectedRestaurantId?.id,
    });

    const {
        data: kitchenCount,
        isLoading: kitchenLoading,
    } = useQuery({
        queryKey: ["kitchen-count", selectedRestaurantId?.id],
        queryFn: () => getCountKitchen(selectedRestaurantId?.id as string),
        enabled: !!selectedRestaurantId?.id,
    });

    const {
        data: orderCount,
        isLoading: orderLoading,
    } = useQuery({
        queryKey: ["order-count", selectedRestaurantId?.id],
        queryFn: () => getCountOrders(selectedRestaurantId?.id as string),
        enabled: !!selectedRestaurantId?.id,
    });

    const cards = [
        {
            title: "Total Waiters",
            icon: <Users className="w-8 h-8 text-blue-600" />,
            count: waiterCount?.data ?? 0,
            loading: waiterLoading,
            bg: "bg-blue-100",
        },
        {
            title: "Kitchen Staff",
            icon: <Utensils className="w-8 h-8 text-green-600" />,
            count: kitchenCount?.data ?? 0,
            loading: kitchenLoading,
            bg: "bg-green-100",
        },
        {
            title: "Total Orders",
            icon: <Receipt className="w-8 h-8 text-purple-600" />,
            count: orderCount?.data ?? 0,
            loading: orderLoading,
            bg: "bg-purple-100",
        },
    ];

    if (!selectedRestaurantId) return <div>Please select a restaurant</div>
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {cards.map((card, index) => (
                <Card key={index} className="shadow-lg transition-transform hover:scale-[1.02]">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">{card.title}</CardTitle>
                        <div className={`rounded-full p-2 ${card.bg}`}>{card.icon}</div>
                    </CardHeader>
                    <CardContent>
                        {card.loading ? (
                            <Loader2 className="animate-spin text-gray-400 w-6 h-6" />
                        ) : (
                            <div className="text-3xl font-bold text-gray-900">{card.count}</div>
                        )}
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}

export default CountCard;
