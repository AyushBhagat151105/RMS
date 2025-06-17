import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createTable, updateTable } from "@/hooks/query";
import { useRestaurantStore } from "@/store/restaurant";
import { tableInputSchema } from "@/schema/zod";


type TableSchema = z.infer<typeof tableInputSchema>;

type TableFormProps = {
    initialData?: { id: string; number: number; capacity: number };
};

export default function TableForm({ initialData }: TableFormProps) {
    const { selectedRestaurantId } = useRestaurantStore();
    const queryClient = useQueryClient();

    const form = useForm<TableSchema>({
        resolver: zodResolver(tableInputSchema),
        defaultValues: {
            number: initialData?.number ?? 0,
            capacity: initialData?.capacity ?? 0,
        },
    });

    const mutation = useMutation({
        mutationFn: (data: TableSchema & { restaurantId: string }) =>
            initialData
                ? updateTable(data, initialData.id)
                : createTable(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["tables", selectedRestaurantId?.id],
            });
            form.reset();
        },
    });

    const onSubmit = (values: TableSchema) => {
        const payload = {
            ...values,
            restaurantId: selectedRestaurantId?.id || "",
        };

        console.log(payload);


        mutation.mutate(payload);
    };

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 w-full max-w-md"
            >
                <FormField
                    control={form.control}
                    name="number"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Table Number</FormLabel>
                            <FormControl>
                                <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="capacity"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Capacity</FormLabel>
                            <FormControl>
                                <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <Button type="submit" disabled={mutation.isPending} className="w-full">
                    {mutation.isPending
                        ? initialData
                            ? "Updating..."
                            : "Creating..."
                        : initialData
                            ? "Update Table"
                            : "Create Table"}
                </Button>
            </form>
        </Form>
    );
}
