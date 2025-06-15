import { Link } from "@tanstack/react-router"
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar"
import { ListOrdered, PanelBottom } from "lucide-react"
import LogoutButton from "./Logout"
import ThemeToggle from "./ThemeToggle"

const items = [
    {
        title: "Deshboard",
        url: "/kitchen",
        icon: PanelBottom,
    },
    {
        title: "Order",
        url: "/kitchen/order",
        icon: ListOrdered,
    },
]

function KitchenSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <p className="text-lg font-semibold">Kitchen panal</p>
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
                <ThemeToggle />
                <LogoutButton />
            </SidebarFooter>
        </Sidebar>
    )
}

export default KitchenSidebar