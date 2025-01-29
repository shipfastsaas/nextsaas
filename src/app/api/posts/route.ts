import { NextResponse } from 'next/server'
import dbConnect from '@/lib/db'
import Post from '@/models/Post'
import mongoose from 'mongoose'

export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store'

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
  console.log('GET /api/posts - Starting')

  try {
    console.log('Connecting to database...')
    await dbConnect()

    // Vérifier l'état de la connexion
    if (mongoose.connection.readyState !== 1) {
      throw new Error(`Invalid connection state: ${mongoose.connection.readyState}`)
    }

    console.log('Database connected, fetching posts...')
    const posts = await Post.find({})
      .sort({ createdAt: -1 })
      .lean()
      .exec()

    console.log(`Found ${posts.length} posts`)
    return NextResponse.json(posts)

  } catch (error) {
    // Construire un message d'erreur détaillé
    const errorDetails = {
      message: error instanceof Error ? error.message : 'Unknown error',
      type: error instanceof Error ? error.name : 'Unknown',
      connectionState: mongoose.connection.readyState,
      timestamp: new Date().toISOString()
    }

    console.error('Error in GET /api/posts:', errorDetails)
    
    return NextResponse.json({ 
      error: 'Failed to fetch posts',
      details: errorDetails
    }, { 
      status: 500 
    })
  }
}
