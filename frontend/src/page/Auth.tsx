import Kitchen from "@/components/Kitchen"
import Login from "@/components/Login"
import Register from "@/components/Register"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Waiter from "@/components/Waiter"



function Auth() {

    return (
        <div>
            <Tabs defaultValue="Login" className="w-[400px] px-4">
                <TabsList>
                    <TabsTrigger value="Login">Login</TabsTrigger>
                    <TabsTrigger value="Register">Register</TabsTrigger>
                    <TabsTrigger value="Waiter">Waiter</TabsTrigger>
                    <TabsTrigger value="Kitchen">Kitchen</TabsTrigger>
                </TabsList>
                <TabsContent value="Login">
                    <Login />
                </TabsContent>
                <TabsContent value="Register">
                    <Register />
                </TabsContent>
                <TabsContent value="Waiter">
                    <Waiter />
                </TabsContent>
                <TabsContent value="Kitchen">
                    <Kitchen />
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default Auth