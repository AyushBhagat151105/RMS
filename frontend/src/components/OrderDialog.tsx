import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import type { Order } from "@/types/types";

export default function OrderDialog({
    open,
    onOpenChange,
    order,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    order: Order | null;
}) {
    if (!order) return null;

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-xl p-6 space-y-6">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-semibold">Order Details</DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground">
                        Order ID: <span className="font-mono">{order.id}</span>
                    </DialogDescription>
                </DialogHeader>

                {/* Customer & Table Info */}
                <div className="space-y-2 border-b pb-4">
                    <p><span className="font-medium">Customer:</span> {order.waiter.fullName}</p>
                    <p><span className="font-medium">Table:</span> #{order.table.number}</p>
                    <div className="flex items-center gap-2">
                        <span className="font-medium">Status:</span>
                        <span
                            className={`px-2 py-1 rounded text-xs font-semibold ${order.status === "COMPLETED"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                                }`}
                        >
                            {order.status}
                        </span>
                    </div>
                </div>

                {/* Summary */}
                <div className="space-y-2 border-b pb-4">
                    <p className="text-lg font-semibold text-foreground">Order Summary</p>
                    <p><span className="font-medium">Total:</span> ₹{order.total}</p>
                </div>

                {/* Items List */}
                <div>
                    <p className="text-lg font-semibold mb-2">Items</p>
                    <ul className="space-y-3">
                        {order.Order_Item.map((item) => (
                            <li key={item.id} className="flex items-center gap-4">
                                <img
                                    src={item.menuItem.imageUrl}
                                    alt={item.menuItem.name}
                                    width={48}
                                    height={48}
                                    className="rounded-md border object-cover"
                                />
                                <div>
                                    <p className="font-medium">{item.menuItem.name}</p>
                                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </DialogContent>
        </Dialog>
    );
}
