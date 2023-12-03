import './globals.css'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import clsx from 'clsx'
import type { Metadata } from 'next'
import { Noto_Sans } from 'next/font/google'
import Header from './_components/Header'
import { ThemeProvider } from './_components/ThemeProvider'

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          'px-5 pt-4 leading-6 max-w-3xl mx-auto md:text-base',
          inter.className
        )}
      >
        <ThemeProvider attribute="class">
          <Header />
          <main className="py-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}
