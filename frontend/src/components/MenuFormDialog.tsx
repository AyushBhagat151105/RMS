import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import MenuForm from "./MenuForm"

export default function MenuFormDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default">Add Menu Item</Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle>Create New Menu Item</DialogTitle>
                    <DialogDescription>
                        Fill in the details to add a new item to the restaurant menu.
                    </DialogDescription>
                </DialogHeader>
                <MenuForm type="create"/>
            </DialogContent>
        </Dialog>
    )
}
