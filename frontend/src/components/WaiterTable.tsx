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
import { WaiterForm } from "./WaiterForm";
import { deleteWaiter, getAllWaiters } from "@/hooks/query";
import { useRestaurantStore } from "@/store/restaurant";

export function WaiterTable() {
    interface Waiter {
        id: string;
        fullName: string;
        email: string;
        password: string;
    }
    const { selectedRestaurantId } = useRestaurantStore()
    const queryClient = useQueryClient();
    const { data, isLoading } = useQuery({
        queryKey: ["waiters", selectedRestaurantId?.id],
        queryFn: () => getAllWaiters(selectedRestaurantId?.id as string),
    });

    const waiters: Waiter[] = Array.isArray(data?.data) ? data.data : [];

    const deleteMutation = useMutation({
        mutationFn: deleteWaiter,
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["waiters", selectedRestaurantId?.id as string] }),
    });

    if (isLoading) return <div>Loading...</div>;

    return (
        <div className="w-[1120px] h-screen py-4">
            <div className="flex justify-end">
                <WaiterForm trigger={<Button>Add Waiter</Button>} />
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
                    {waiters.map((waiter: Waiter) => (
                        <TableRow key={waiter.id}>
                            <TableCell>{waiter.fullName}</TableCell>
                            <TableCell>{waiter.email}</TableCell>

                            <TableCell className="flex justify-end gap-2">
                                <WaiterForm
                                    initialData={waiter}
                                    trigger={<Button variant="secondary" size="sm">Edit</Button>}
                                />
                                <Button
                                    variant="destructive"
                                    size="sm"
                                    onClick={() => deleteMutation.mutate(waiter.id)}
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
