'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { formatDate } from '@/lib/utils'

interface Post {
  _id: string
  title: string
  excerpt: string
  status: string
  createdAt: string
}

export function BlogSection() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('/api/posts')
        if (!response.ok) {
          throw new Error('Failed to fetch posts')
        }
        const data = await response.json()
        // Ne récupérer que les articles publiés
        setPosts(data.filter((post: Post) => post.status === 'published'))
      } catch (error) {
        console.error('Error fetching posts:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (loading) {
    return (
      <section className="relative py-24 bg-background">
        <div className="relative px-6 mx-auto max-w-7xl lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-rose to-primary-purple">
                Blog
              </span>
            </h1>
            <div className="animate-pulse space-y-8 mt-12">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-200 dark:bg-gray-800 h-48 rounded-xl" />
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative py-24 bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/50" />
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-rose/30 rounded-full filter blur-3xl opacity-70 animate-pulse" />
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-primary-purple/30 rounded-full filter blur-3xl opacity-70 animate-pulse delay-75" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative px-6 mx-auto max-w-7xl lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-rose to-primary-purple">
              Blog
            </span>
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Découvrez nos derniers articles et actualités
          </p>
        </div>

        {/* Blog posts grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post._id}
              className="flex flex-col bg-card rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex-1 p-6">
                <div className="flex items-center gap-x-4 text-xs mb-4">
                  <time dateTime={post.createdAt} className="text-text-secondary">
                    {formatDate(post.createdAt)}
                  </time>
                </div>
                <div className="group relative">
                  <h3 className="text-xl font-semibold leading-6 text-card-foreground group-hover:text-primary-purple">
                    <Link href={`/blog/${post._id}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-text-secondary line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
