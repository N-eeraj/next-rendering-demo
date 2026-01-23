import RoutesRenderingOptions from "@/components/RoutesRenderingOptions"

const STATIC_RENDERING_OPTIONS = [
  {
    label: "Static Rendering",
    url: "/static-rendering",
  },
  {
    label: "Static Rendering with Build-Time Data",
    url: "/static-rendering/build-time-fetch",
  },
  {
    label: "Static Rendering with ISR",
    url: "/static-rendering/isr",
  },
  {
    label: "Dynamic Rendering (SSR)",
    url: "/dynamic-rendering",
  },
  {
    label: "Dynamic Rendering with Streaming",
    url: "/dynamic-rendering/streaming",
  },
  {
    label: "Dynamic Rendering with Partial Streaming",
    url: "/dynamic-rendering/streaming/partial",
  },
]

function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
        Next Rendering Demo
      </h1>

      <p className="mb-8 text-gray-700">
        Next.js offers multiple page rendering strategies, each optimized for different use cases. 
        This demo showcases how pages can be rendered, when data is fetched, and what the resulting 
        HTML looks like for users. Explore each page to see the differences in static, server-side, 
        incremental, and client-driven rendering.
      </p>

      <RoutesRenderingOptions
        title="Static Routes"
        options={STATIC_RENDERING_OPTIONS}>
        <p className="text-gray-600 text-sm">
          Static routes have fixed URL paths, such as&nbsp;
          <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
            /about
          </code>
          &nbsp;or&nbsp;
          <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
            /contact
          </code>
          . They represent pages with predefined URLs that do not change.
        </p>
      </RoutesRenderingOptions>
    </main>
  )
}

export default Home
