import { Feed, FeedOptions } from 'feed'
import { Post } from './api'
import { name, siteUrl } from './meta'

export function generateFeed(
  posts: Post[],
  metadata: {
    title: string
    description: string
  }
) {
  const feedOptions: FeedOptions = {
    author: {
      name,
      link: siteUrl,
    },
    copyright: name,
    description: metadata.description,
    favicon: `${siteUrl}/favicon.ico`,
    feedLinks: { rss: `${siteUrl}rss.xml` },
    generator: 'Feed for Node.js',
    id: siteUrl,
    link: siteUrl,
    title: metadata.title,
  }

  const feed = new Feed(feedOptions)

  for (const post of posts) {
    feed.addItem({
      id: `${siteUrl}/blog/${post.id}/`,
      title: post.title,
      description: post.excerpt,
      date: new Date(post.date),
      link: `${siteUrl}/blog/${post.id}/`,
    })
  }

  return feed
}
