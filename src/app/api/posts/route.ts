import { NextResponse } from 'next/server'
import dbConnect from '@/lib/db'
import Post from '@/models/Post'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'
export const revalidate = 0

// Fonction utilitaire pour vérifier l'environnement
function getEnvironmentData() {
  // Enlever la vérification du build time qui cause des problèmes en production
  const hasMongoDB = !!process.env.MONGODB_URI
  return {
    isBuildTime: false,
    hasMongoDB,
  }
}

export async function POST(req: Request) {
  const { isBuildTime } = getEnvironmentData()
  console.log('POST /api/posts - Starting')
  
  // Pendant le build, retourner une réponse factice
  if (isBuildTime) {
    return NextResponse.json({ message: 'Build time, skipping DB operations' })
  }

  try {
    console.log('Connecting to database...')
    await dbConnect()
    console.log('Database connected')

    const body = await req.json()
    console.log('Request body:', body)

    const post = await Post.create({
      title: body.title,
      content: body.content,
      excerpt: body.excerpt,
      status: body.status || 'draft',
    })
    console.log('Post created:', post)

    return NextResponse.json(post, { status: 201 })
  } catch (error) {
    console.error('Error in POST /api/posts:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}

export async function GET() {
  const { isBuildTime, hasMongoDB } = getEnvironmentData()
  console.log('GET /api/posts - Starting')
  console.log('Environment check:', { isBuildTime, hasMongoDB, mongoUri: process.env.MONGODB_URI ? 'defined' : 'undefined' })

  if (isBuildTime) {
    console.log('Build time detected, returning empty array')
    return NextResponse.json([])
  }

  try {
    console.log('Attempting database connection...')
    await dbConnect()
    console.log('Database connected successfully')
    
    const posts = await Post.find({}).sort({ createdAt: -1 })
    console.log(`Found ${posts.length} posts`)
    
    return NextResponse.json(posts)
  } catch (error) {
    console.error('Error in GET /api/posts:', error)
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 })
  }
}
