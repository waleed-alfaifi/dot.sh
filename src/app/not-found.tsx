import Link from 'next/link'
import notFound from './_static/notFound.svg'
import Image from 'next/image'

const NotFound = () => {
  return (
    <div className="pt-28 flex justify-center items-center flex-col gap-4">
      <Image
        src={notFound}
        alt="404 by undraw.co"
        width={500}
        className="mb-8"
        priority
      />
      <p>
        You might be lost or something. Go back to{' '}
        <Link href="/" className="text-primary">
          home
        </Link>
        .
      </p>

      <p className="fixed left-1/2 -translate-x-1/2 bottom-4 text-xs">
        404 image by
        <a href="https://undraw.co/illustrations" className="text-primary">
          {' '}
          undraw.co
        </a>
      </p>
    </div>
  )
}

export default NotFound
