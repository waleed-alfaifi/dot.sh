import Image from 'next/image'
import hero from './_static/hero.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal'
import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  openGraph: {
    images: ['/logo.png'],
  },
  alternates: {
    canonical: '/',
    types: {
      // 'application/atom+xml': '/atom.xml',
      'application/rss+xml': '/rss.xml',
    },
  },
}

export default function Home() {
  return (
    <div className="flex flex-col gap-4 [&_a]:text-primary">
      <Image
        src={hero}
        alt="Man writing code"
        width={180}
        className="mb-8"
        priority
      />
      <h1 className="text-lg mb-4">
        <FontAwesomeIcon icon={faTerminal} className="text-sm text-primary" />{' '}
        Hello there! My name is Waleed.
      </h1>

      <p>
        I am a software developer with an interest in various fields including
        web development to cloud computing and Linux. I kicked off my career
        with two internships, one developing solutions using an ERP system, and
        the other working as a frontend developer with React and Redux.
      </p>

      <p>
        I then moved to working on the most popular online marketplace in Saudi
        Arabia,{' '}
        <a href="https://haraj.com.sa" target="_blank">
          Haraj platform
        </a>
        , where I developed the web app using Next.js and TypeScript. I
        refactored the legacy codebase from React, Redux, and JavaScript to
        Next.js and TypeScript, along with working on many exciting features.
      </p>

      <p>
        You can find me on{' '}
        <a
          href="https://linkedin.com/in/waleed-alfaifi"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{' '}
        and on{' '}
        <a
          href="https://github.com/waleed-alfaifi"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        . You can also check out my <Link href="/blog">blog</Link> where I write
        about different things I am learning.
      </p>
    </div>
  )
}
