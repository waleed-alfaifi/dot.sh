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

interface Post {
  id: string
  title: string
  date: string
  excerpt: string
  html: string
}

const POSTS_DIR_NAME = 'public/content/posts'

export const getParser = () => {
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
          return {
            type: 'element',
            tagName: 'img',
            properties: {
              src: node.url,
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
 * Reads from the `posts` directory
 */
export async function getPostByFileName(fileName: string): Promise<Post> {
  const [segment1, segment2] = fileName.split('--')
  let date = segment1
  let id = segment2

  // only id was provided, no date
  // find file name and get date out of it
  if (!id) {
    id = segment1

    // read directory and get file that contains id
    const files = await fs.promises.readdir(POSTS_DIR_NAME)
    const file = files.find((file) => file.includes(id))

    if (!file) {
      throw new Error(`No file found for id: ${id}`)
    }

    date = file.split('--')[0]
    fileName = file
  }

  const fullPath = join(POSTS_DIR_NAME, fileName)
  const { data, content } = matter(await fs.promises.readFile(fullPath, 'utf8'))
  const { title, excerpt } = data

  // get html
  const parser = getParser()
  const vFile = await parser.process(content)
  const html = vFile.toString()

  return {
    id: id.replace(/\.md$/, ''),
    title,
    date,
    excerpt,
    html,
  }
}

export async function getAllPosts(): Promise<Post[]> {
  const files = await fs.promises.readdir(POSTS_DIR_NAME)
  const all = files
    .filter((f) => f.includes('.md'))
    .map((id) => getPostByFileName(id))

  const posts = await Promise.all(all)
  return posts.sort((p1, p2) =>
    compareDesc(new Date(p1.date), new Date(p2.date))
  )
}
