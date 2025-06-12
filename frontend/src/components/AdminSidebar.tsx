import { useState } from "react"
import { Link } from "@tanstack/react-router"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "./ui/sidebar"
import {
    Album,
    ChevronDown,
    ChevronRight,
    ListOrdered,
    PanelBottom,
    Table,
    Users,
} from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import LogoutButton from "./Logout"
import ThemeToggle from "./ThemeToggle"
import { useRestaurantStore } from "@/store/restaurant"



function AdminSidebar() {



    const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({})
    const { restaurants, selectedRestaurantId, selectRestaurant } = useRestaurantStore()

    const items = [
        {
            title: "Dashboard",
            url: "/admin",
            icon: PanelBottom,
        },
        {
            title: "Staff",
            icon: Users,
            children: [
                {
                    title: "Waiter",
                    url: "/admin/staff/waiter",
                },
                {
                    title: "Kitchen",
                    url: "/admin/staff/kitchen",
                },
            ],
        },
        {
            title: "Tables",
            url: "/admin/tables",
            icon: Table,
        },
        {
            title: "Menu",
            url: "/admin/menu",
            icon: Album,
        },
        {
            title: "Order",
            url: `/admin/${selectedRestaurantId}/order`,
            icon: ListOrdered,
        },
    ]

    const toggleSection = (title: string) => {
        setOpenSections((prev) => ({
            ...prev,
            [title]: !prev[title],
        }))
    }

    const selectedRestaurantName = restaurants.find(r => r.id === selectedRestaurantId)?.name || "Select Restaurant"


    return (
        <Sidebar>
            <SidebarHeader>
                <p className="text-lg font-semibold">Admin Panel</p>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <SidebarMenuButton>
                                    {selectedRestaurantName}
                                    <ChevronDown className="ml-auto" />
                                </SidebarMenuButton>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
                                {restaurants.map((restaurant) => (
                                    <DropdownMenuItem
                                        key={restaurant.id}
                                        onClick={() => selectRestaurant(restaurant.id)}
                                    >
                                        {restaurant.name}
                                    </DropdownMenuItem>
                                ))}
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Application</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) =>
                                item.children ? (
                                    <div key={item.title}>
                                        <SidebarMenuItem>
                                            <SidebarMenuButton onClick={() => toggleSection(item.title)}>
                                                <item.icon className="mr-2" />
                                                <span>{item.title}</span>
                                                {openSections[item.title] ? (
                                                    <ChevronDown className="ml-auto" />
                                                ) : (
                                                    <ChevronRight className="ml-auto" />
                                                )}
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                        {openSections[item.title] && (
                                            <div className="ml-4">
                                                {item.children.map((child) => (
                                                    <SidebarMenuItem key={child.title}>
                                                        <SidebarMenuButton asChild>
                                                            <Link to={child.url}>
                                                                <span>{child.title}</span>
                                                            </Link>
                                                        </SidebarMenuButton>
                                                    </SidebarMenuItem>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link to={item.url}>
                                                <item.icon className="mr-2" />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                )
                            )}
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

export default AdminSidebar
