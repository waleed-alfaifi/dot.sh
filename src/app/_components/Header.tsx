'use client'

import Link from 'next/link'
import { ThemeToggler } from './ThemeToggler'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

function Header() {
  const pathname = usePathname()

  return (
    <header className="pt-3 pb-2 border-b-gray-200 dark:border-b-gray-600 border-b">
      <nav>
        <ul className="flex justify-between items-center gap-5">
          <li className="mr-auto">
            <Link href="/">./waleed.sh</Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={clsx({
                'underline underline-offset-4 decoration-primary':
                  pathname === '/blog',
              })}
            >
              Blog
            </Link>
          </li>
          {/* <li>
            <Link
              href="/about"
              className={clsx({
                'underline underline-offset-4 decoration-primary':
                  pathname === '/about',
              })}
            >
              About
            </Link>
          </li> */}
          <li>
            <ThemeToggler />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
