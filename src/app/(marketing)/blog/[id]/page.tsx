import { Metadata } from 'next'
import { getPost } from '@/lib/get-post'
import { BlogPostView } from '@/components/blog-post-view'
import { getValidatedParams } from '@/lib/get-params'

interface Props {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const validatedParams = await getValidatedParams(params)
    const post = await getPost(validatedParams.id)
    return {
      title: post.title,
      description: post.excerpt
    }
  } catch (error) {
    return {
      title: 'Article non trouvé'
    }
  }
}

export default async function BlogPostPage({ params }: Props) {
  const validatedParams = await getValidatedParams(params)
  const post = await getPost(validatedParams.id)
  return <BlogPostView post={post} />
}
