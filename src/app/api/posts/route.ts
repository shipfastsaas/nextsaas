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
  let retries = 3; // Nombre de tentatives
  
  while (retries > 0) {
    try {
      console.log(`GET /api/posts - Attempt ${4 - retries}/3`)
      console.log('Connecting to database...')
      await dbConnect()
      console.log('Database connected')

      const posts = await Post.find({}).sort({ createdAt: -1 })
      console.log('Posts found:', posts.length)
      
      return NextResponse.json(posts)
    } catch (error) {
      console.error(`Error in GET /api/posts (${4 - retries}/3):`, error)
      retries--;
      
      if (retries === 0) {
        console.error('All retries failed, returning empty array')
        return NextResponse.json([])
      }
      
      // Attendre 2 secondes avant de réessayer
      await new Promise(resolve => setTimeout(resolve, 2000))
    }
  }
  
  return NextResponse.json([])
}
