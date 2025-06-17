import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import type { Order } from "@/types/types";
import { useCallback } from "react";
import { Button } from "./ui/button";

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

    const handlePrint = useCallback(() => {
        const printWindow = window.open('', '_blank');
        if (!printWindow) return;

        const billContent = `
            <html>
                <head>
                    <title>Order Bill - ${order.id}</title>
                    <style>
                        body {
                            font-family: monospace;
                            font-size: 12px;
                            width: 250px;
                            padding: 10px;
                            margin: 0 auto;
                        }
                        h2, h3, p {
                            text-align: center;
                            margin: 0;
                            padding: 4px 0;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-top: 10px;
                        }
                        th, td {
                            text-align: left;
                            padding: 4px 0;
                        }
                        .total {
                            margin-top: 10px;
                            font-weight: bold;
                            text-align: right;
                        }
                        .divider {
                            border-top: 1px dashed #000;
                            margin: 6px 0;
                        }
                    </style>
                </head>
                <body>
                    <h2>🍽️ Your Restaurant</h2>
                    <h3>Order Receipt</h3>
                    <p>Order ID: ${order.id}</p>
                    <p>Table: #${order.table.number}</p>
                    <p>Status: ${order.status}</p>
                    <div class="divider"></div>
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th style="text-align:right;">Qty</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${order.Order_Item.map(item => `
                                <tr>
                                    <td>${item.menuItem.name}</td>
                                    <td style="text-align:right;">${item.quantity}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                    <div class="divider"></div>
                    <p class="total">Total: ₹${order.total}</p>
                    <div class="divider"></div>
                    <p>Thank you for dining with us!</p>
                </body>
            </html>
        `;

        printWindow.document.write(billContent);
        printWindow.document.close();

        printWindow.onload = () => {
            printWindow.focus();
            printWindow.print();
            printWindow.close();
        };
    }, [order]);



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
                    <div className="flex justify-end pt-4">
                        <Button onClick={handlePrint}>Print Bill</Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
