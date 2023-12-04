import { getAllPosts } from '@/lib/api'
import { generateFeed } from '@/lib/feed'
import { description } from '@/lib/meta'

export async function GET() {
  const posts = await getAllPosts()
  const feed = generateFeed(posts, {
    title: 'waleed.sh',
    description,
  })
  return new Response(feed.rss2())
}
