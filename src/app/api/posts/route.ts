import { NextResponse } from 'next/server'
import dbConnect from '@/lib/db'
import Post from '@/models/Post'
import { saveBase64Image, getImageTypeFromBase64 } from '@/utils/image-utils'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth-config'

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

export async function POST(request: Request) {
  try {
    // Pour le débogage, nous allons permettre la création d'articles sans authentification
    // Dans un environnement de production, vous devriez décommenter ces lignes
    // const session = await getServerSession(authOptions)
    // if (!session) {
    //   return new NextResponse('Unauthorized', { status: 401 })
    // }

    await dbConnect()
    
    const data = await request.json()
    
    // Vérifier que les champs requis sont présents
    if (!data.title || !data.content || !data.excerpt) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }
    
    // Gérer l'image principale
    let featuredImagePath = '';
    if (data.featuredImage) {
      try {
        // Si l'image est une URL data (base64), la traiter
        if (data.featuredImage.startsWith('data:')) {
          const imageType = getImageTypeFromBase64(data.featuredImage);
          const fileName = `post-image-${Date.now()}.${imageType}`;
          
          // Sauvegarder l'image et obtenir le chemin
          featuredImagePath = await saveBase64Image(data.featuredImage, fileName);
          console.log(`Image saved to: ${featuredImagePath}`);
        } else {
          // Si c'est déjà une URL, l'utiliser directement
          featuredImagePath = data.featuredImage;
        }
      } catch (error) {
        console.error('Error processing image:', error);
        // Continuer sans image en cas d'erreur
      }
    }
    
    // Créer un nouvel article
    const newPost = new Post({
      title: data.title,
      content: data.content,
      excerpt: data.excerpt,
      featuredImage: featuredImagePath,
      status: data.status || 'draft',
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    
    // Sauvegarder l'article dans la base de données
    await newPost.save()
    
    console.log('New post created:', newPost._id)
    
    return NextResponse.json(newPost, { status: 201 })
  } catch (error) {
    console.error('Failed to create post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}
