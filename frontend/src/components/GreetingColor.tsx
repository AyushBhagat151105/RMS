type Role = 'admin' | 'waiter' | 'kitchen';

const colors: Record<Role, string> = {
    admin: 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    waiter: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    kitchen: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
};

function isRole(role: string): role is Role {
    return ['admin', 'waiter', 'kitchen'].includes(role.toLowerCase());
}

export const getRoleColor = (role: string): string => {
    const lower = role?.toLowerCase();
    return isRole(lower)
        ? colors[lower]
        : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-200';
};
