import './blog.scss'
import type { Metadata } from 'next'
import { Heading } from '@/common/components/Heading'
import { getAllPosts, getPost } from '@/lib/api'
import { name } from '@/lib/meta'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal'
import WordsCounter from '@/app/WordsCounter'

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
    openGraph: {
      type: 'article',
      publishedTime: post.date,
      title: post.title,
    },
    alternates: {
      canonical: `/blog/${postId}`,
    },
    authors: [
      {
        name,
        url: 'https://github.com/waleed-alfaifi',
      },
    ],
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
  const isDraft = Boolean(post.draft)

  return (
    <article className="flex flex-col gap-3">
      <header>
        <Heading level={1} className="mb-3">
          {post.title}
        </Heading>

        <time
          className="italic flex justify-between"
          dateTime={post.date}
          title={post.date}
        >
          <p>
            Posted on{' '}
            {new Date(post.date).toLocaleDateString('en', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })}{' '}
          </p>
        </time>

        <blockquote className="font-medium italic my-5 pl-2 border-l-4 border-primary">
          &quot;{post.excerpt}&quot;
        </blockquote>

        {isDraft && (
          <span className="text-xs bg-orange-300 px-3 py-1.5 rounded text-gray-800">
            Draft
          </span>
        )}
      </header>

      <div
        className="blog-markdown"
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>

      <aside className="flex mt-12 justify-between">
        <span>- Waleed</span>
        <a
          href="https://github.com/waleed-alfaifi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary"
        >
          <FontAwesomeIcon icon={faTerminal} className="text-sm mx-1" />
          waleed-alfaifi
        </a>
      </aside>

      <WordsCounter content={post.html} />
    </article>
  )
}

export default PostPage
