import { CurrencyDollarIcon, DocumentTextIcon, UsersIcon } from '@heroicons/react/24/outline'

const stats = [
  { name: 'Total Revenue', value: '$12,345', icon: CurrencyDollarIcon },
  { name: 'Total Posts', value: '23', icon: DocumentTextIcon },
  { name: 'Total Users', value: '456', icon: UsersIcon },
]

export function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow"
        >
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <stat.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 dark:text-gray-400 truncate">
                    {stat.name}
                  </dt>
                  <dd>
                    <div className="text-lg font-medium text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
