import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Pencil, Trash, Plus } from "lucide-react";
import { deleteTable, getAllTable } from "@/hooks/query";
import TableForm from "./TableForm";
import { useRestaurantStore } from "@/store/restaurant";
import { downloadQR } from "@/lib/qr";

export default function TableList() {
    const queryClient = useQueryClient();
    const [selectedTable, setSelectedTable] = useState<any | null>(null);
    const { selectedRestaurantId } = useRestaurantStore();


    const { data } = useQuery({
        queryKey: ["tables", selectedRestaurantId?.id],
        queryFn: () => getAllTable(selectedRestaurantId?.id as string),
        enabled: !!selectedRestaurantId,
    });

    const deleteMutation = useMutation({
        mutationFn: (id: string) => deleteTable(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["tables", selectedRestaurantId?.id] });
        },
    });

    if (!selectedRestaurantId) {
        return (
            <div className="text-center text-muted-foreground py-10">
                Please select a restaurant to manage tables.
            </div>
        );
    }

    const tables = data?.data ?? [];

    return (
        <div className="w-full">
            <div className="flex justify-between items-center px-2">
                <h2 className="text-xl font-semibold">Manage Tables</h2>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button className="gap-2">
                            <Plus className="h-4 w-4" />
                            Add Table
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create New Table</DialogTitle>
                        </DialogHeader>
                        <TableForm />
                    </DialogContent>
                </Dialog>
            </div>

            <div className="overflow-x-auto px-2">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>No.</TableHead>
                            <TableHead>Capacity</TableHead>
                            <TableHead>Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tables.map((table: any) => (
                            <TableRow key={table.id}>
                                <TableCell>{table.number}</TableCell>
                                <TableCell>{table.capacity}</TableCell>
                                <TableCell>
                                    <div className="flex flex-wrap gap-2">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button
                                                    size="sm"
                                                    variant="outline"
                                                    onClick={() => setSelectedTable(table)}
                                                >
                                                    <Pencil className="h-4 w-4" />
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent>
                                                <DialogHeader>
                                                    <DialogTitle>Edit Table</DialogTitle>
                                                </DialogHeader>
                                                <TableForm

                                                    initialData={selectedTable}
                                                />
                                            </DialogContent>
                                        </Dialog>

                                        <Button
                                            size="sm"
                                            variant="destructive"
                                            onClick={() => deleteMutation.mutate(table.id)}
                                        >
                                            <Trash className="h-4 w-4" />
                                        </Button>

                                        <Button
                                            size="sm"
                                            variant="secondary"
                                            onClick={() =>
                                                downloadQR(table.qrCodeUrl, table.number, selectedRestaurantId.name, {
                                                    style: "minimal",
                                                    customMessage: "Scan to view menu",
                                                })
                                            }
                                        >
                                            Download QR
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
