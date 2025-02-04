import { NextResponse } from 'next/server'
import { auth } from '@/auth'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    const session = await auth()
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    // Pour le moment, retournons des données de test
    const mockPosts = [
      {
        id: '1',
        title: 'Getting Started with Next.js',
        status: 'published',
        date: new Date('2024-02-04').toISOString(),
      },
      {
        id: '2',
        title: 'Building Modern Web Applications',
        status: 'published',
        date: new Date('2024-02-03').toISOString(),
      },
      {
        id: '3',
        title: 'Introduction to TypeScript',
        status: 'draft',
        date: new Date('2024-02-02').toISOString(),
      },
    ]

    return NextResponse.json(mockPosts)
  } catch (error) {
    console.error('Failed to fetch posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}
