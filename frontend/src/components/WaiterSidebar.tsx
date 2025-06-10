import { Link } from "@tanstack/react-router"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { ListOrdered, PanelBottom, Table } from "lucide-react"
import LogoutButton from "./Logout"

const items = [
    {
        title: "Deshboard",
        url: "/waiter",
        icon: PanelBottom,
    },
    {
        title: "Order",
        url: "/waiter/order",
        icon: ListOrdered,
    },
    {
        title: "Table",
        url: "/waiter/table",
        icon: Table,
    },
]

function WaiterSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <p className="text-lg font-semibold">Waiter panal</p>
            </SidebarHeader>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link to={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter>
                <LogoutButton />
            </SidebarFooter>
        </Sidebar>
    )
}

export default WaiterSidebar