import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteKitchen, getAllKitchens } from "@/hooks/query";
import { useRestaurantStore } from "@/store/restaurant";
import { KitchenForm } from "./KitchenForm";

export function KitchenTable() {
    interface Kitchen {
        id: string;
        fullName: string;
        email: string;
        password: string;
    }
    const { selectedRestaurantId } = useRestaurantStore()
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery({
        queryKey: ["kitchen", selectedRestaurantId?.id],
        queryFn: () => getAllKitchens(selectedRestaurantId?.id as string),
    });

    const kitchen: Kitchen[] = Array.isArray(data?.data) ? data.data : [];

    const deleteMutation = useMutation({
        mutationFn: deleteKitchen,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["kitchen", selectedRestaurantId?.id as string] }),
    });

    if (isLoading) return <div>Loading...</div>;
    if (!selectedRestaurantId) return <div>Please select a restaurant</div>;

    return (
        <div className="p-4 w-screen md:w-[1120px]">
            <div className="flex justify-end">
                <KitchenForm trigger={<Button>Add Kitchen</Button>} />
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {kitchen.map((kitchen: Kitchen) => (
                        <TableRow key={kitchen.id}>
                            <TableCell>{kitchen.fullName}</TableCell>
                            <TableCell>{kitchen.email}</TableCell>

                            <TableCell className="flex justify-end gap-2">
                                <KitchenForm
                                    initialData={kitchen}
                                    trigger={<Button variant="secondary" size="sm">Edit</Button>}
                                />
                                <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => deleteMutation.mutate(kitchen.id)}
                                >
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>

    );
}
