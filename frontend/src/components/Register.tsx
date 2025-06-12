import { registerSchema } from "@/schema/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import type { z } from "zod"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { useAuthStore } from "@/store/store"
import { useNavigate } from "@tanstack/react-router"


function Register() {
    const { signUp, isSignInUp } = useAuthStore()
    const navigate = useNavigate()

    const form = useForm<z.infer<typeof registerSchema>>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            password: "",
            username: "",
            fullName: "",
        }


    })

    async function onSubmit(values: z.infer<typeof registerSchema>) {
        try {
            const res = await signUp(values)

            if (res?.success === true) {
                navigate({ to: "/" })
            }
        } catch (error) {
            console.log("Error in login data:- ", error);

        }
    }
    return (
        <div className="flex justify-center items-center">
            <Card className="w-[400px] flex flex-col justify-center">
                <CardHeader>
                    <CardTitle className="text-center text-3xl font-bold">Register</CardTitle>
                    <CardDescription className="px-4 text-center m-5">
                        Enter your email, username, fullname and password below to create account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Email</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Email" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>password</FormLabel>
                                        <FormControl>
                                            <Input placeholder="password" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="username" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                )}
                            />
                            <FormField
                                control={form.control}
                                name="fullName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>fullName</FormLabel>
                                        <FormControl>
                                            <Input placeholder="fullName" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>

                                )}
                            />
                            <Button type="submit" disabled={isSignInUp} className="w-full mt-3">
                                {isSignInUp ? "Signing up..." : "Submit"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Register