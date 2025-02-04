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
    const mockPayments = [
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
    ]

    return NextResponse.json(mockPayments)
  } catch (error) {
    console.error('Failed to fetch payments:', error)
    return NextResponse.json(
      { error: 'Failed to fetch payments' },
      { status: 500 }
    )
  }
}
