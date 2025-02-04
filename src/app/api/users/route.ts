import { NextResponse } from 'next/server'
import { auth } from '@/app/api/auth/[...nextauth]/route'
import dbConnect from '@/lib/db'
import User from '@/models/User'

export async function GET() {
  try {
    const session = await auth()
    
    // Vérifier si l'utilisateur est authentifié
    if (!session) {
      return new NextResponse('Unauthorized', { status: 401 })
    }

    await dbConnect()

    // Récupérer tous les utilisateurs, en excluant le mot de passe
    const users = await User.find({}, { password: 0 })
      .sort({ createdAt: -1 }) // Du plus récent au plus ancien
      .lean()

    return NextResponse.json(users)
  } catch (error) {
    console.error('Error fetching users:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}
