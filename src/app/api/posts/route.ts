import { NextResponse } from 'next/server'
import { auth } from '@/auth'
import dbConnect from '@/lib/db'
import Post from '@/models/Post'

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
  try {
    // Temporairement désactivé pour le débogage
    // const session = await auth()
    // if (!session) {
    //   return new NextResponse('Unauthorized', { status: 401 })
    // }

    console.log('Connecting to database...')
    await dbConnect()
    console.log('Connected to database, fetching posts...')
    
    // Récupérer les vrais articles de blog depuis MongoDB
    const posts = await Post.find({}).sort({ createdAt: -1 })
    
    console.log(`Found ${posts.length} posts in database`)
    
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Failed to fetch posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}
