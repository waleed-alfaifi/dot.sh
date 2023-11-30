import './blog.scss'
import type { Metadata } from 'next'
import { Heading } from '@/common/components/Heading'
import { getPostByFileName } from '@/lib/api'

interface PageProps {
  params: {
    postId: string
  }
}

export async function generateMetadata({
  params: { postId },
}: PageProps): Promise<Metadata> {
  const post = await getPostByFileName(postId)

  return {
    title: post.title,
    description: post.excerpt,
  }
}

const PostPage = async ({ params: { postId } }: PageProps) => {
  const post = await getPostByFileName(postId)

  return (
    <article className="space-y-3">
      <header>
        <Heading level={1} className="mb-4">
          {post.title}
        </Heading>
        <blockquote className="font-medium italic my-5 pl-2 border-l-4 border-primary">
          &quot;{post.excerpt}&quot;
        </blockquote>
        <time>{post.date}</time>
      </header>

      <div
        className="blog-markdown"
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
    </article>
  )
}

export default PostPage
