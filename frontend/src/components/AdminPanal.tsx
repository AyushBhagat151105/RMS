import GreetingCard from "./GreetingCard"
import { Card } from './ui/card'
import Order from '@/page/Order'
import { useEffect } from 'react'
import { useRestaurantStore } from '@/store/restaurant'
import CountCard from './CountCard'
import ChartPie from './ChartPie'



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
            <ChartPie />

            {/* Recent Activity */}
            <Card className="p-4 shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 overflow-x-auto">
                <Order />
            </Card>
        </div>
    )
}

export default AdminPanal
