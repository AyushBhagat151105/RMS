import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Pencil, Trash } from "lucide-react";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import MenuForm from "./MenuForm";

import { toast } from "sonner";
import { chengeMenuAvailability, deleteMenus } from "@/hooks/query";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Switch } from "./ui/switch";
import type { MenuItem } from "@/types/types";
import { useRestaurantStore } from "@/store/restaurant";
import { useAuthStore } from "@/store/store";



type Props = {
    data: MenuItem;
    onDelete?: () => void;
};

export default function MenuCard({ data }: Props) {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const { selectedRestaurantId } = useRestaurantStore()
    const { authUser } = useAuthStore()
    const queryClient = useQueryClient();

    const restaurantId = selectedRestaurantId?.id || authUser?.restaurantId

    const { mutate: deleteItem, isPending: isDeleting } = useMutation({
        mutationFn: () => deleteMenus(data.id),
        onSuccess: () => {
            toast.success("Menu item deleted successfully.");
            queryClient.invalidateQueries({ queryKey: ["get-all-menus", restaurantId as string] });
            queryClient.refetchQueries({ queryKey: ["get-all-menus", restaurantId as string] });
        },
        onError: () => {
            toast.error("Failed to delete menu item.");
        },
    });

    const { mutate: toggleAvailability, isPending: isToggling } = useMutation({
        mutationFn: () => chengeMenuAvailability(data.id),
        onSuccess: () => {
            toast.success(`Menu is now ${data.available ? "unavailable" : "available"}.`);
            queryClient.invalidateQueries({ queryKey: ["get-all-menus", restaurantId as string] });
            queryClient.refetchQueries({ queryKey: ["get-all-menus", restaurantId as string] });

        },
        onError: () => {
            toast.error("Failed to update availability.");
        },
    });

    const handleDelete = () => {
        const confirm = window.confirm(`Are you sure you want to delete "${data.name}"?`);
        queryClient.invalidateQueries({ queryKey: ["get-all-menus", restaurantId as string] });
        queryClient.refetchQueries({ queryKey: ["get-all-menus", restaurantId as string] });
        if (confirm) deleteItem();
    };

    return (
        <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
            <Card className="w-full max-w-sm mx-auto rounded-2xl shadow-sm hover:shadow-md hover:scale-[1.01] transition-transform duration-150 bg-background">
                <CardHeader className="relative p-0">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
                        <img
                            src={data.imageUrl}
                            alt={data.name}
                            loading="lazy"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Edit Button */}
                    <DialogTrigger asChild>
                        <button
                            className="absolute top-2 right-10 bg-white p-1.5 rounded-full shadow-sm hover:bg-gray-100 transition-colors"
                            onClick={() => setDialogOpen(true)}
                        >
                            <Pencil className="w-4 h-4 text-gray-600" />
                        </button>
                    </DialogTrigger>

                    {/* Delete Button */}
                    <button
                        className="absolute top-2 right-2 bg-white p-1.5 rounded-full shadow-sm hover:bg-red-100 transition-colors"
                        onClick={handleDelete}
                        disabled={isDeleting}
                    >
                        <Trash className="w-4 h-4 text-red-600" />
                    </button>
                </CardHeader>

                <CardContent className="p-4 space-y-4">
                    <div className="flex items-center justify-between gap-2">
                        <CardTitle className="text-base font-semibold line-clamp-1">
                            {data.name}
                        </CardTitle>

                        <div className="flex items-center gap-2">
                            <Badge
                                variant={data.available ? "default" : "outline"}
                                className="text-xs flex items-center gap-1 px-2 py-0.5"
                            >
                                <CheckCircle2 className="h-4 w-4" />
                                {data.available ? "Available" : "Unavailable"}
                            </Badge>

                            <Switch
                                checked={data.available}
                                disabled={isToggling}
                                onCheckedChange={() => toggleAvailability()}
                            />
                        </div>
                    </div>

                    <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                        {data.description || "No description available."}
                    </CardDescription>

                    <div className="text-lg font-bold text-primary">
                        ₹{data.price.toFixed(2)}
                    </div>

                    {data.tags?.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                            {data.tags.map((tag, index) => (
                                <Badge key={index} variant="outline" className="text-xs px-2 py-1">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    )}
                </CardContent>

                <CardFooter className="px-4 pb-4 pt-2 text-xs text-muted-foreground flex justify-between">
                    <span className="truncate max-w-[50%]">#{data.id.slice(0, 8)}...</span>
                    <span>{new Date(data.createdAt).toLocaleDateString()}</span>
                </CardFooter>
            </Card>

            {/* Dialog for Updating Menu */}
            <DialogContent className="max-w-xl">
                <DialogHeader>
                    <DialogTitle>Update Menu</DialogTitle>
                </DialogHeader>
                <MenuForm
                    type="update"
                    menuId={data.id}
                    defaultValues={{
                        name: data.name,
                        description: data.description,
                        price: data.price.toString(),
                        tags: data.tags.join(", "),
                        restaurantId: data.restaurantId,
                    }}
                />
            </DialogContent>
        </Dialog>
    );
}
