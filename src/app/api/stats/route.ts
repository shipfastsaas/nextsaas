import { NextResponse } from 'next/server'
import { auth } from '@/auth'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    // Temporairement désactivé pour le débogage
    // const session = await auth()
    // if (!session) {
    //   return new NextResponse('Unauthorized', { status: 401 })
    // }

    // Pour le moment, retournons des données de test
    const mockStats = {
      totalRevenue: 997, // $997
      totalPosts: 25,
      totalUsers: 156,
      recentPayments: [
        {
          id: '1',
          amount: 299,
          status: 'completed',
          email: 'john@example.com',
          date: new Date('2024-02-04').toISOString(),
        },
        {
          id: '2',
          amount: 499,
          status: 'completed',
          email: 'sarah@example.com',
          date: new Date('2024-02-03').toISOString(),
        },
        {
          id: '3',
          amount: 199,
          status: 'pending',
          email: 'mike@example.com',
          date: new Date('2024-02-02').toISOString(),
        },
      ],
      recentPosts: [
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
      ],
    }

    return NextResponse.json(mockStats)
  } catch (error) {
    console.error('Failed to fetch stats:', error)
    return NextResponse.json(
      { error: 'Failed to fetch stats' },
      { status: 500 }
    )
  }
}
