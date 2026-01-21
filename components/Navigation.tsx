import Link from "next/link"

interface Props {
  previous?: string
  next?: string
}

function Navigation({ previous, next }: Props) {
  return (
    <nav className="mt-12 flex justify-between text-sm">
      <Link
        href="/"
        className="text-sky-700 hover:underline font-medium"
      >
        Home
      </Link>

      <div className="flex gap-4">
        {previous && (
          <Link
            href={previous}
            className="text-gray-600 hover:text-sky-700 hover:underline"
          >
            ← Previous
          </Link>
        )}
        {next && (
          <Link
            href={next}
            className="text-gray-600 hover:text-sky-700 hover:underline"
          >
            Next  →
          </Link>
        )}
      </div>
    </nav>

  )
}

export default Navigation
