import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import GreetingCard from "./GreetingCard"
import { Card } from './ui/card'
import Order from '@/page/Order'
import { useEffect } from 'react'
import { useRestaurantStore } from '@/store/restaurant'
import CountCard from './CountCard'

const dummyData = [
    { name: 'Jan', users: 40 },
    { name: 'Feb', users: 30 },
    { name: 'Mar', users: 20 },
    { name: 'Apr', users: 27 },
    { name: 'May', users: 50 },
]

function AdminPanal() {
    const { getRestaurants } = useRestaurantStore()

    useEffect(() => {
        getRestaurants()
    }, [])

    return (
        <div className="lg:w-full sm:w-screen sm:px-6 lg:px-8 py-6 space-y-8 max-w-7xl mx-auto">
            {/* Greeting Card */}
            <div>
                <GreetingCard />
            </div>

            {/* Stats Section */}
            <div>
                <CountCard />
            </div>

            {/* Chart Section */}
            <Card className="p-4 shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-4">
                    User Growth (Past 5 Months)
                </h3>
                <div className="w-full h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={dummyData}>
                            <XAxis dataKey="name" stroke="#8884d8" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="users" fill="#4f46e5" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-4 shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-x-auto">
                <Order />
            </Card>
        </div>
    )
}

export default AdminPanal
