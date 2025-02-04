import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import dbConnect from '@/lib/db'
import User from '@/models/User'

export async function GET() {
  try {
    const session = await auth()
    if (!session?.user) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    await dbConnect()
    const users = await User.find({}, { password: 0 }).sort({ createdAt: -1 }).lean()
    return NextResponse.json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
