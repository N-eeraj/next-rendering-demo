
import Title from "@/components/Title"
import Navigation from "@/components/Navigation"
import RoutesList from "@/components/RoutesList"

const DYNAMIC_ROUTE = "/dynamic-rendering/dynamic-route/streaming/"
const ON_DEMAND_PATH_PROPS = {
  title: "Example Paths",
  dynamicRoute: DYNAMIC_ROUTE,
  paths: [
    "bulbasaur",
    "charmander",
    "squirtle",
    "chikorita",
    "cyndaquil",
    "totodile",
    "treecko",
    "torchic",
    "mudkip"
  ]  
    .map((name) => ({ name })),
}

async function DynamicRouteDynamicRendering() {

  return (
    <main className="main-container">
      <Title
        heading="Dynamic Routes with Dynamic Rendering"
        tagline="On demand rendered pages with Streaming"
      />

      <p className="mb-4 text-gray-700">
        For dynamic routes with dynamic rendering, pages are rendered on demand when a request is made to the&nbsp;
        <code className="code-block">
          {DYNAMIC_ROUTE}[name]
        </code>
        &nbsp;path.
      </p>

      <RoutesList {...ON_DEMAND_PATH_PROPS} />

      <Navigation
        previous="/ssg/dynamic-route/isr"
      />
    </main>
  )
}

export default DynamicRouteDynamicRendering
