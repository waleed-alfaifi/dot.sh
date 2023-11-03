import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import Link from 'next/link'
import { ThemeToggler } from './_components/Theme'

config.autoAddCss = false

const inter = Noto_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    default: 'waleed.sh',
    template: '%s - waleed.sh',
  },
  description: 'Personal website of Waleed',
}

function Header() {
  return (
    <header className="pt-4 pb-2 border-b-gray-600 border-b">
      <nav>
        <ul className="flex justify-between gap-3">
          <li>
            <Link href="/">./waleed.sh</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <ThemeToggler />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body
        className={clsx(
          'px-5 text-gray-300 text-sm leading-6',
          inter.className
        )}
      >
        <Header />
        <main className="py-6">{children}</main>
      </body>
    </html>
  )
}
