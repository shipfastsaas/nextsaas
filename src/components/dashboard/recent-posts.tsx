'use client'

import Link from 'next/link'
import { formatDate } from '@/lib/utils'

const recentPosts = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    excerpt: 'Learn how to build modern web applications with Next.js',
    date: '2024-01-21',
  },
  {
    id: 2,
    title: 'Understanding TypeScript',
    excerpt: 'A comprehensive guide to TypeScript features',
    date: '2024-01-20',
  },
  {
    id: 3,
    title: 'Tailwind CSS Best Practices',
    excerpt: 'Tips and tricks for using Tailwind CSS effectively',
    date: '2024-01-19',
  },
]

export function RecentPosts() {
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-lg">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900 dark:text-white">Recent Blog Posts</h2>
        <div className="mt-6 flow-root">
          <div className="-my-5 divide-y divide-gray-200 dark:divide-gray-700">
            {recentPosts.map((post) => (
              <div key={post.id} className="py-5">
                <div className="group relative focus-within:ring-2 focus-within:ring-indigo-500">
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                    <Link href={`/dashboard/posts/${post.id}`} className="hover:underline focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    {formatDate(post.date)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
