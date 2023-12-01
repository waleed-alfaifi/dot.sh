import './blog.scss'
import type { Metadata } from 'next'
import { Heading } from '@/common/components/Heading'
import { getAllPosts, getPost } from '@/lib/api'

interface PageProps {
  params: {
    postId: string
  }
}

export async function generateMetadata({
  params: { postId },
}: PageProps): Promise<Metadata> {
  const post = await getPost(postId)

  return {
    title: post.title,
    description: post.excerpt,
  }
}

export const dynamicParams = false

export async function generateStaticParams(): Promise<PageProps['params'][]> {
  const posts = await getAllPosts()
  const ids = posts.map((post) => post.id)

  return ids.map((id) => ({
    postId: id,
  }))
}

const PostPage = async ({ params: { postId } }: PageProps) => {
  const post = await getPost(postId)

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
