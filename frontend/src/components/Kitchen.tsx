import { kitchenSchema } from '@/schema/zod'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import type { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from './ui/button'
import { useAuthStore } from '@/store/store'
import { useNavigate } from '@tanstack/react-router'

function Kitchen() {
    const { kitchen, isLoggingIn } = useAuthStore()
    const navigate = useNavigate()

    const form = useForm<z.infer<typeof kitchenSchema>>({
        resolver: zodResolver(kitchenSchema),
        defaultValues: {
            email: "",
            password: "",
        }


    })

    async function onSubmit(values: z.infer<typeof kitchenSchema>) {
        try {
            const res = await kitchen(values)

            if (res?.role === "KITCHEN") {
                navigate({ to: "/kitchen" })
            }
        } catch (error) {
            console.log("Error in login data:- ", error);

        }
    }

    return (
        <div className='flex justify-center items-center'>
            <Card className="w-[400px] flex flex-col justify-center">
                <CardHeader>
                    <CardTitle className="text-center text-3xl font-bold">Kitchen Login</CardTitle>
                    <CardDescription className="px-4 text-center m-5">
                        Enter your email below to login to your account
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
                            <Button type="submit" disabled={isLoggingIn} className="w-full mt-3">
                                {isLoggingIn ? "Logging in..." : "Submit"}
                            </Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Kitchen