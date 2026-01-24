import Title from "@/components/Title"
import { getStaticParams } from "./getStaticParams"
import Navigation from "@/components/Navigation"
import PreRenderedPages from "./PreRenderedPages"

async function page() {
  const paths = await getStaticParams()

  return (
    <main className="main-container">
      <Title
        heading="SSG Pages List"
        tagline="Pre-rendered pages at Build Time"
      />

      <p className="mb-4 text-gray-700">
        This page lists a series of statically generated pages created from the dynamic route&nbsp;
        <code className="code-block">
          /ssg/dynamic-route/[name]
        </code>.
        During build time, Next.js uses&nbsp;
        <code className="code-block">
          generateStaticParams
        </code>
        &nbsp;to generate each page as static HTML.
        Every visitor sees the same pre-rendered content, and no server processing is required at request time.
      </p>

      <PreRenderedPages />

      <Navigation
        previous="/dynamic-rendering/streaming/partial"
      />
    </main>
  )
}

export default page
