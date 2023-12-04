// API to read markdown files from the file system and return them as HTML
import { compareDesc } from 'date-fns'
import fs from 'fs'
import { join } from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypePrettyCode from 'rehype-pretty-code'
import matter from 'gray-matter'

export interface Post {
  id: string
  title: string
  date: string
  excerpt: string
  html: string
  unpublished?: boolean
}

const POSTS_DIR_NAME = 'public/blog'

const getImageURL = (fileName: string, url: string) => `
  ${POSTS_DIR_NAME.replace('public', '')}/${fileName}/${url}`

export const getParser = (postDirName: string) => {
  const parser = unified()
    // Convert to markdown AST
    .use(remarkParse)
    // Add support for Github Flavored Markdown
    .use(remarkGfm)
    // Covert to HTML AST
    .use(remarkRehype, {
      handlers: {
        link(_, node) {
          return {
            type: 'element',
            tagName: 'a',
            properties: {
              href: node.url,
              target: '_blank',
              rel: 'noreferrer noopener',
            },
            children: [{ type: 'text', value: node.children[0].value }],
          }
        },
        image(_, node) {
          const imgURL = getImageURL(postDirName, node.url)

          return {
            type: 'element',
            tagName: 'img',
            properties: {
              src: imgURL,
              alt: node.alt,
              width: 500,
              height: 500,
              loading: 'eager',
            },
            children: [],
          }
        },
      },
    })
    // Pretty print code blocks
    // @ts-expect-error
    .use(rehypePrettyCode, {
      // See Options section below.
    })
    // Convert to HTML string
    .use(rehypeStringify)

  return parser
}

/**
 * Reads from the `blog` directory
 */
export async function getPost(dirName: string): Promise<Post> {
  const [segment1, segment2] = dirName.split('--')
  let date = segment1
  let id = segment2

  // when user visits a post, id will be the post id without the date prefix
  // we need to add the date prefix back by finding the dir name
  if (!id) {
    id = segment1

    // read blog directory and get the post directory that contains id
    const dirs = await fs.promises.readdir(POSTS_DIR_NAME)
    const dir = dirs.find((file) => file.includes(id))

    if (!dir) {
      throw new Error(`No directory found for id: ${id}`)
    }

    // get date from directory name
    date = dir.split('--')[0]
    dirName = dir
  }

  const fullPath = join(POSTS_DIR_NAME, dirName)
  const markdownFile = fullPath + '/index.md'
  const { data, content } = matter(
    await fs.promises.readFile(markdownFile, 'utf8')
  )
  const { title, excerpt, unpublished } = data

  // get html
  const parser = getParser(dirName)
  const vFile = await parser.process(content)
  const html = vFile.toString()

  return {
    id: id.replace(/\.md$/, ''),
    title,
    date,
    excerpt,
    html,
    unpublished,
  }
}

const includeUnpublishedPostsInDevEnv = process.env.NODE_ENV === 'development'

export async function getAllPosts(): Promise<Post[]> {
  const dirs = await fs.promises.readdir(POSTS_DIR_NAME)
  const all = dirs.map((id) => getPost(id))
  const posts = await Promise.all(all)

  return posts
    .filter((post) => !post.unpublished || includeUnpublishedPostsInDevEnv)
    .sort((p1, p2) => compareDesc(new Date(p1.date), new Date(p2.date)))
}
