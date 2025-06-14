import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { RestaurantFormDialog } from "./RestaurantFormDialog";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteRestaurant, getTotalRestaurant } from "@/hooks/query";
import type { Restaurant } from "@/types/types";

export default function RestaurantTable() {
    const queryClient = useQueryClient();

    const { data, isLoading } = useQuery<{
        statusCode: number;
        message: string;
        success: boolean;
        data: Restaurant[];
    }>({
        queryKey: ["restaurants"],
        queryFn: getTotalRestaurant,
    });

    const deleteMutation = useMutation({
        mutationFn: (id: string) => deleteRestaurant(id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["restaurants"] }),
    });

    if (isLoading) return <p>Loading...</p>;

    return (
        <div className="space-y-4 py-3 px-3">
            <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Restaurants</h2>
                <RestaurantFormDialog />
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Description</TableHead>
                        <TableHead>Address</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data?.data?.map((r) => (
                        <TableRow key={r.id}>
                            <TableCell>{r.name}</TableCell>
                            <TableCell>{r.description}</TableCell>
                            <TableCell>{r.address}</TableCell>
                            <TableCell>{r.phone}</TableCell>
                            <TableCell>{r.email}</TableCell>
                            <TableCell className="text-right space-x-2">
                                <RestaurantFormDialog
                                    editId={r.id}
                                    defaultValues={{
                                        name: r.name,
                                        description: r.description,
                                        address: r.address,
                                        phone: r.phone,
                                        email: r.email,
                                    }}
                                />
                                <Button
                                    variant="destructive"
                                    onClick={() => deleteMutation.mutate(r.id)}
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
