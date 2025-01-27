'use client'

import { formatDate } from '@/lib/utils'

const recentPayments = [
  {
    id: 1,
    amount: '$250.00',
    status: 'success',
    email: 'john@example.com',
    date: '2024-01-21',
  },
  {
    id: 2,
    amount: '$150.00',
    status: 'success',
    email: 'sarah@example.com',
    date: '2024-01-20',
  },
  {
    id: 3,
    amount: '$350.00',
    status: 'success',
    email: 'mike@example.com',
    date: '2024-01-19',
  },
]

export function RecentPayments() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Payments</h2>
        <div className="mt-6 flow-root">
          <div className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
            {recentPayments.map((payment) => (
              <div key={payment.id} className="py-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {payment.email}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(payment.date)}
                    </p>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {payment.amount}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
