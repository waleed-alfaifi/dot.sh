import { Heading } from '@/common/components/Heading'
import { getAllPosts } from '@/lib/api'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons/faPenToSquare'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog posts by Waleed',
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

      <ul className="flex flex-col gap-4 max-w-lg">
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <Link
                href={`/blog/${post.id}`}
                className="flex flex-col border border-gray-700 p-2 rounded-md md:p-4"
              >
                <span className="text-primary">{post.title}</span>
                <p className="leading-5 my-1 text-sm">{post.excerpt}</p>

                <p className="text-sm text-gray-400 ml-auto mt-2 italic">
                  {new Date(post.date).toLocaleDateString('en', {
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Blog
