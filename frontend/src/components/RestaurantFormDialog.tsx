import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { restaurantSchema } from "@/schema/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRestaurant, updateRestaurant } from "@/hooks/query";
import type { z } from "zod";


type RestaurantSchema = z.infer<typeof restaurantSchema>;

export function RestaurantFormDialog({
    defaultValues,
    editId,
}: {
    defaultValues?: RestaurantSchema;
    editId?: string;
}) {
    const form = useForm<RestaurantSchema>({
        resolver: zodResolver(restaurantSchema),
        defaultValues: defaultValues || {
            name: "",
            description: "",
            address: "",
            phone: "",
            email: "",
        },
    });

    const queryClient = useQueryClient();

    const createMutation = useMutation({
        mutationFn: (data: FormData) => createRestaurant(data),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["restaurants"] }),
    });;
    const updateMutation = useMutation({
        mutationFn: ({ data, id }: { data: FormData; id: string }) =>
            updateRestaurant(data, id),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["restaurants"] }),
    });;
    const [open, setOpen] = useState(false);

    const onSubmit = (values: RestaurantSchema) => {
        const formData = new FormData();
        formData.append("name", values.name);
        formData.append("description", values.description);
        formData.append("address", values.address);
        formData.append("phone", values.phone);
        formData.append("email", values.email);

        if (editId) {
            updateMutation.mutate({ data: formData, id: editId });
        } else {
            createMutation.mutate(formData);
        }

        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button variant={editId ? "secondary" : "default"}>
                    {editId ? "Edit" : "Add Restaurant"}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{editId ? "Edit Restaurant" : "New Restaurant"}</DialogTitle>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Restaurant Name</FormLabel>
                                    <FormControl><Input placeholder="Name" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Description</FormLabel>
                                    <FormControl><Input placeholder="Short Description" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Address</FormLabel>
                                    <FormControl><Input placeholder="Restaurant Address" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl><Input placeholder="Phone number" {...field} /></FormControl>
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
                                    <FormControl><Input placeholder="Email" type="email" {...field} /></FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full">{editId ? "Update" : "Create"}</Button>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
}
