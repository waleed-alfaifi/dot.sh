import { Heading } from '@/common/components/Heading'
import { getAllPosts } from '@/lib/api'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog posts by Waleed',
  alternates: {
    canonical: '/blog',
  },
}

const Blog = async () => {
  const posts = await getAllPosts()

  return (
    <div>
      <Heading level={1} className="mb-4 flex gap-2 items-center" bold={false}>
        <FontAwesomeIcon icon={faPenToSquare} size="sm" />
        Latest Posts
      </Heading>
      <p className="mb-6 text-sm sm:text-base">
        I write about things I learn, things I find interesting, and things I
        think are worth sharing.
      </p>

      <ul className="flex flex-col gap-4 max-w-2xl">
        {posts.map((post) => {
          return (
            <li key={post.id} className="relative">
              <Link
                href={`/blog/${post.id}`}
                className="flex flex-col border border-gray-200 dark:border-gray-700 p-4 rounded-md md:p-4"
              >
                <Heading level={3} className="text-primary">
                  {post.title}
                </Heading>
                <p className="leading-5 my-1 text-sm">{post.excerpt}</p>

                <p className="text-sm text-gray-600 dark:text-gray-400 ml-auto mt-2 italic">
                  {new Date(post.date).toLocaleDateString('en', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>

                {post.unpublished && (
                  <div className="absolute bottom-3 left-4 mr-auto text-xs bg-orange-300 px-3 py-1.5 rounded text-gray-800">
                    Unpublished
                  </div>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Blog
