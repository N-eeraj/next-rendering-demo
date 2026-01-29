import Navigation from "@/components/Navigation"
import Link from "next/link"
import Title from "@/components/Title"

function NotFound() {
  return (
    <main className="main-container">
      <Title
        heading="404 - Page Not Found"
        tagline="Sorry, the page you are looking for does not exist" />

      <p className="mb-8 text-gray-700">
        Please check the URL or return to the listing of example paths.
      </p>

      <Navigation>
        <Link
          href="/dynamic-rendering/dynamic-route/streaming/partial"
          className="link"
        >
          Back to Listing
        </Link>
      </Navigation>
    </main>
  )
}

export default NotFound
