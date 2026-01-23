import Benefits from "@/components/Benefits"
import Navigation from "@/components/Navigation"
import Title from "@/components/Title"

const BENEFITS = [
  "No data fetching",
  "No revalidation",
  "No server logic at request time",
  "Same HTML for every user",
]

function StaticRendering() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Title
        heading="Static Rendering"
        tagline="Static Content Only" />

      <p className="mb-4 text-gray-700">
        This page is fully generated at build time and contains no dynamic data.
      </p>

      <p className="mb-8 text-gray-700">
        The HTML is created once during&nbsp;
        <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
          next build
        </code>
        &nbsp;and then served as a static file for every request.
      </p>

      <Benefits benefits={BENEFITS} />

      <p className="text-sm text-gray-500">
        This represents the simplest and fastest rendering strategy in Next.js.
      </p>

      <Navigation
        next="/static-rendering/build-time-fetch"
      />
    </main>
  )
}

export default StaticRendering
