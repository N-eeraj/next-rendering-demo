import Title from "@/components/Title"
import Navigation from "@/components/Navigation"
import PreRenderedPages from "../PreRenderedPages"
import RoutesList from "@/components/RoutesList"

const DYNAMIC_ROUTE = "/ssg/dynamic-route/isr/"
const ON_DEMAND_PATH_PROPS = {
  title: "On-Demand Pages: Examples",
  dynamicRoute: DYNAMIC_ROUTE,
  paths: [
    "pikachu",
    "eevee",
    "dragonite",
  ]
    .map((name) => ({ name })),
}

async function DynamicRouteSSG_ISR() {
  return (
    <main className="main-container">
      <Title
        heading="SSG Pages with ISR List"
        tagline="Pre-rendered pages at Build Time"
      />

      <p className="mb-4 text-gray-700">
        This page lists a series of statically generated pages created from the dynamic route&nbsp;
        <code className="code-block">
          {DYNAMIC_ROUTE}[name]
        </code>.
        During build time, Next.js uses&nbsp;
        <code className="code-block">
          generateStaticParams
        </code>
        &nbsp;to generate each page as static HTML.
        Every visitor sees the same pre-rendered content, and no server processing is required at request time.
      </p>

      <PreRenderedPages
        dynamicRoute={DYNAMIC_ROUTE}
        className="mb-7" />

      <section className="space-y-2">
        <h2 className="text-2xl font-bold tracking-tight text-gray-800">
          On-Demand Generation/Caching
        </h2>

        <p>
          Pages not pre-rendered via&nbsp;
        <code className="code-block">
          generateStaticParams
        </code>
        &nbsp;are built on-demand when first visited.
          Once rendered, they're cached so subsequent requests serve the static page instantly, ensuring fast load times without extra server processing.
        </p>

        <RoutesList {...ON_DEMAND_PATH_PROPS} />
      </section>

      <Navigation
        previous="/ssg/dynamic-route"
      />
    </main>
  )
}

export default DynamicRouteSSG_ISR
