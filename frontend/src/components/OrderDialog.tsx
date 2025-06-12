import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import type { Order } from "@/types/types";


export default function OrderDialog({ open, onOpenChange, order }: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    order: Order | null;
}) {
    if (!order) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-xl">
                <DialogHeader>
                    <DialogTitle>Order Details</DialogTitle>
                    <DialogDescription>Order ID: {order.id}</DialogDescription>
                </DialogHeader>

                <div className="mt-4 space-y-2">
                    <p><strong>Customer:</strong> {order.user.fullName}</p>
                    <p><strong>Table:</strong> #{order.table.number}</p>
                    <p><strong>Status:</strong> {order.status}</p>
                    <p><strong>Total:</strong> ₹{order.total}</p>
                    <p><strong>Items:</strong></p>
                    <ul className="pl-4 list-disc">
                        {order.Order_Item.map((item) => (
                            <li key={item.id} className="flex gap-2 items-center">
                                <img
                                    src={item.menuItem.imageUrl}
                                    alt={item.menuItem.name}
                                    width={40}
                                    height={40}
                                    className="rounded"
                                />
                                {item.menuItem.name} × {item.quantity}
                            </li>
                        ))}
                    </ul>
                </div>
            </DialogContent>
        </Dialog>
    );
}
