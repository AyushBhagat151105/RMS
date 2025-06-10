import { useAuthStore } from "@/store/store"
import { Card, CardContent } from "./ui/card"
import { getGreeting } from "./Greeting"
import { getRoleColor } from "./GreetingColor"


function GreetingCard() {

    const { authUser } = useAuthStore()

    return (
        <Card className="w-screen max-w-4xl mx-auto shadow-lg border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
            <CardContent className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="relative flex-shrink-0">
                        <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white dark:ring-gray-700 shadow-lg">
                            {authUser?.avatar ? (
                                <img
                                    src={authUser.avatar}
                                    alt={authUser.fullName}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white text-3xl font-semibold">
                                    {authUser?.fullName?.charAt(0).toUpperCase()}
                                </div>
                            )}
                        </div>
                        {authUser?.isVerified && (
                            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center shadow-md">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        )}
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-3">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {getGreeting()}, {authUser?.fullName?.split(' ')[0]}!
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                            Welcome back to your dashboard
                        </p>

                        {authUser?.role && (
                            <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(authUser.role)}`}>
                                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M9.243 3.03a1 1 0 01.727 1.213L9.53 6h2.94l.56-2.243a1 1 0 111.94.486L14.53 6H17a1 1 0 110 2h-2.97l-1 4H15a1 1 0 110 2h-2.47l-.56 2.242a1 1 0 11-1.94-.485L10.47 14H7.53l-.56 2.242a1 1 0 11-1.94-.485L5.47 14H3a1 1 0 110-2h2.97l1-4H5a1 1 0 110-2h2.47l.56-2.243a1 1 0 011.213-.727zM9.03 8l-1 4h2.94l1-4H9.03z" clipRule="evenodd" />
                                </svg>
                                {authUser.role}
                            </span>
                        )}

                        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex flex-col sm:flex-row sm:justify-start sm:items-center sm:space-x-6 text-xs text-gray-500 dark:text-gray-400 mt-2">
                                {authUser?.username && (
                                    <span className="flex items-center mb-1 sm:mb-0">
                                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                        </svg>
                                        {authUser?.username}
                                    </span>
                                )}
                                {authUser?.email && (
                                    <span className="flex items-center">
                                        <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                        </svg>
                                        {authUser.email.length > 24 ? `${authUser.email.slice(0, 24)}...` : authUser.email}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default GreetingCard