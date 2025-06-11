import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import GreetingCard from "./GreetingCard"
import { Card } from './ui/card'
import Order from '@/page/Order'

const dummyData = [
    { name: 'Jan', users: 40 },
    { name: 'Feb', users: 30 },
    { name: 'Mar', users: 20 },
    { name: 'Apr', users: 27 },
    { name: 'May', users: 50 },
]

function AdminPanal() {


    return (
        <div className="w-full px-4 md:px-8 py-6 space-y-8">
            {/* Greeting Card */}
            <div>
                <GreetingCard />
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['Users', 'Posts', 'Messages'].map((label, i) => (
                    <Card key={i} className="bg-white dark:bg-gray-900 shadow border border-gray-200 dark:border-gray-700 p-4">
                        <div className="text-sm text-gray-500 dark:text-gray-400">{label}</div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">{Math.floor(Math.random() * 1000)}</div>
                    </Card>
                ))}
            </div>

            {/* Chart Section */}
            <Card className="p-4 shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">User Growth (Past 5 Months)</h3>
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
            <Card className="p-4 shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
                <Order />
            </Card>
        </div>
    )
}

export default AdminPanal
