import Navigation from "@/components/Navigation"
import PreRenderedPages from "../../PreRenderedPages"
import Link from "next/link"
import Title from "@/components/Title"

function NotFound() {
  return (
    <main className="main-container">
      <Title
        heading="404 - Page Not Found"
        tagline="Sorry, the page you are looking for does not exist" />

      <p className="mb-8 text-gray-700">
        This page wasn't pre-rendered at build time and cant be generated. Please check the URL or return to the listing of pre-rendered pages.
      </p>

      <PreRenderedPages
        dynamicRoute="/ssg/dynamic-route/isr/"
        offset={151}
        className="mt-6" />

      <Navigation>
        <Link
          href="/ssg/dynamic-route/isr"
          className="text-sky-700 hover:underline font-medium"
        >
          Back to Listing
        </Link>
      </Navigation>
    </main>
  )
}

export default NotFound
