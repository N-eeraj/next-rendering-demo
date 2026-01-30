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

function StaticRoutes() {
  return (
    <RoutesRenderingOptions
      title="Static Routes"
      options={STATIC_RENDERING_OPTIONS}>
      <p className="text-gray-600 text-sm">
        Static routes have fixed URL paths, such as&nbsp;
        <code className="code-block">
          /about
        </code>
        &nbsp;or&nbsp;
        <code className="code-block">
          /contact
        </code>
        . They represent pages with predefined URLs that do not change.
      </p>
    </RoutesRenderingOptions>
  )
}

export default StaticRoutes
