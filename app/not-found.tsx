import Title from "@/components/Title"
import Link from "next/link"

function NotFound() {
  return (
    <main className="main-container flex flex-col items-center justify-center min-h-[70vh] text-center">
      <Title
        heading="404 - Page Not Found"
        tagline="Sorry, the page you are looking for does not exist" />

      <p className="mb-8 text-gray-700 max-w-lg">
        The page you're trying to access doesn't exist or may have been moved.
        Double-check the URL or use the navigation below to get back on track.
      </p>

      <Link
        href="/"
        className="block w-fit">
        <button className="min-w-20 px-3 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-xs cursor-pointer duration-200">
          Back to Home
        </button>
      </Link>
    </main>
  )
}

export default NotFound
