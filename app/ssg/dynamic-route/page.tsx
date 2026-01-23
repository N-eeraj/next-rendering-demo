import Title from "@/components/Title"
import { getStaticParams } from "./getStaticParams"
import Navigation from "@/components/Navigation"
import PreRenderedPages from "./PreRenderedPages"

async function page() {
  const paths = await getStaticParams()

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Title
        heading="SSG Pages List"
        tagline="Pre-rendered pages at Build Time"
      />

      <p className="mb-4 text-gray-700">
        This page lists a series of statically generated pages created from the dynamic route&nbsp;
        <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm whitespace-nowrap">
          /ssg/dynamic-route/[name]
        </code>.
        During build time, Next.js uses&nbsp;
        <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm whitespace-nowrap">
          generateStaticParams
        </code>
        &nbsp;to generate each page as static HTML.
        Every visitor sees the same pre-rendered content, and no server processing is required at request time.
      </p>

      <PreRenderedPages />

      <Navigation />
    </main>
  )
}

export default page
