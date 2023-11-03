import Image from 'next/image'
import hero from './_static/hero.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTerminal } from '@fortawesome/free-solid-svg-icons/faTerminal'

export default function Home() {
  return (
    <div>
      <Image
        src={hero}
        alt="Man writing code"
        width={180}
        height={180}
        className="mb-8"
      />
      <h1 className="text-lg mb-4">
        <FontAwesomeIcon
          icon={faTerminal}
          className="text-sm text-yellow-400"
        />{' '}
        Hello there! My name is Waleed.
      </h1>
      <p className="mb-4">
        I do a lot of fun stuff with JavaScript, TypeScript, Vue, and React.
        I’ve been working on open source for a while and I’m a big fan of
        testing, tooling, and developer experience. I’m also a big fan of
        functional programming and I’m always looking for ways to apply it to my
        work.
      </p>
      <p>
        I am currently working on the project <code>nextjs</code> and{' '}
        <code>react</code>. I also have a blog where I write about JavaScript,
        TypeScript, React, Vue, and other things I’m interested in. In my free
        time I like to play video games, watch movies, and read books. I also
        like to travel and explore new places. I’m always looking for new things
        to learn and new people to meet. If you’d like to get in touch with me,
        feel free to send me an email at nowhere@nowhere.com
      </p>
    </div>
  )
}
