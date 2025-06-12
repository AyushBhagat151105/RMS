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

type MenuItem = {
    id: string;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
    available: boolean;
    restaurantId: string;
    categoryId: string | null;
    tags: string[];
    createdAt: string;
    updatedAt: string;
};

type Props = {
    data: MenuItem;
    onDelete?: () => void;
};

export default function MenuCard({ data }: Props) {
    const [isDialogOpen, setDialogOpen] = useState(false);
    const queryClient = useQueryClient();

    const { mutate: deleteItem, isPending: isDeleting } = useMutation({
        mutationFn: () => deleteMenus(data.id),
        onSuccess: () => {
            toast.success("Menu item deleted successfully.");
            queryClient.invalidateQueries({ queryKey: ["get-all-menus"] });
        },
        onError: () => {
            toast.error("Failed to delete menu item.");
        },
    });

    const { mutate: toggleAvailability, isPending: isToggling } = useMutation({
        mutationFn: () => chengeMenuAvailability(data.id),
        onSuccess: () => {
            toast.success(`Menu is now ${data.available ? "unavailable" : "available"}.`);
            queryClient.invalidateQueries({ queryKey: ["get-all-menus"] });
        },
        onError: () => {
            toast.error("Failed to update availability.");
        },
    });

    if (isToggling) return <div>Loading...</div>


    const handleDelete = () => {
        const confirm = window.confirm(`Are you sure you want to delete "${data.name}"?`);
        if (confirm) deleteItem();
    };

    return (
        <Dialog open={isDialogOpen} onOpenChange={setDialogOpen}>
            <Card className="w-full max-w-sm mx-auto rounded-xl shadow-sm transition-all hover:shadow-md hover:scale-[1.01] bg-background">
                <CardHeader className="relative p-0">
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-t-xl">
                        <img
                            src={data.imageUrl}
                            alt={data.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Edit Button */}
                    <DialogTrigger asChild>
                        <button
                            className="absolute top-2 right-10 bg-white p-1 rounded-full shadow hover:bg-gray-100"
                            onClick={() => setDialogOpen(true)}
                        >
                            <Pencil className="w-4 h-4 text-gray-600" />
                        </button>
                    </DialogTrigger>

                    {/* Delete Button */}
                    <button
                        className="absolute top-2 right-2 bg-white p-1 rounded-full shadow hover:bg-red-100"
                        onClick={handleDelete}
                        disabled={isDeleting}
                    >
                        <Trash className="w-4 h-4 text-red-600" />
                    </button>
                </CardHeader>

                <CardContent className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-base font-semibold">{data.name}</CardTitle>
                        <div className="flex items-center gap-2">
                            <Badge
                                variant={data.available ? "default" : "outline"}
                                className="text-xs flex items-center gap-1"
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

                    <div className="text-base font-bold text-primary">
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
