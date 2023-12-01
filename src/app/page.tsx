import Image from 'next/image'
import hero from './_static/hero.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
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

      <p></p>

      <p>
        You can check out my{' '}
        <Link href="/blog" className="text-primary">
          blog
        </Link>{' '}
        where I write about different things I am learning.
      </p>
    </div>
  )
}
