import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { waiterSchemaForm } from "@/schema/zod";
import { useRestaurantStore } from "@/store/restaurant";
import { createWaiter, updateWaiter } from "@/hooks/query";



type WaiterFormProps = {
    initialData?: {
        id: string;
        fullName: string;
        email: string;
        password: string;
    } | null;
    trigger: React.ReactNode;
};

export function WaiterForm({ initialData, trigger }: WaiterFormProps) {

    const { selectedRestaurantId } = useRestaurantStore()

    const queryClient = useQueryClient();

    const form = useForm({
        resolver: zodResolver(waiterSchemaForm),
        defaultValues: {
            restaurantId: selectedRestaurantId?.id || "",
            fullName: initialData?.fullName || "",
            email: initialData?.email || "",
            password: initialData?.password || ""
        },
    });

    useEffect(() => {
        if (initialData) {
            form.reset({ fullName: initialData.fullName, email: initialData.email, password: initialData.password });
        }
    }, [initialData]);

    const mutation = useMutation({
        mutationFn: async (data: z.infer<typeof waiterSchemaForm>) => {
            const formData = new FormData();
            formData.append("restaurantId", selectedRestaurantId?.id as string);
            formData.append("fullName", data.fullName);
            formData.append("email", data.email);
            formData.append("password", data.password)
            return initialData
                ? updateWaiter(formData, initialData.id)
                : createWaiter(formData);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["waiters", selectedRestaurantId?.id] });
            form.reset();
        },
    });

    function onSubmit(values: z.infer<typeof waiterSchemaForm>) {
        mutation.mutate(values);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{initialData ? "Edit Waiter" : "Add Waiter"}</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>fullName</FormLabel>
                                    <FormControl><Input {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl><Input type="email" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl><Input type="text" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" disabled={mutation.isPending}>
                            {initialData ? "Update" : "Submit"}
                        </Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}