import RoutesRenderingOptions from "@/components/RoutesRenderingOptions"

const DYNAMIC_RENDERING_OPTIONS = [
  {
    label: "SSG Rendering",
    url: "/ssg/dynamic-route",
  },
  {
    label: "SSG Rendering with ISR",
    url: "/ssg/dynamic-route/isr",
  },
  {
    label: "Dynamic Rendering (SSR)",
    url: "/dynamic-rendering/dynamic-route",
  },
  {
    label: "Dynamic Rendering with Streaming",
    url: "/dynamic-rendering/dynamic-route/streaming",
  },
  {
    label: "Dynamic Rendering with Partial Streaming",
    url: "/dynamic-rendering/dynamic-route/streaming/partial",
  },
]

function DynamicRoutes() {
  return (
    <RoutesRenderingOptions
      title="Dynamic Routes"
      options={DYNAMIC_RENDERING_OPTIONS}>
      <p className="text-gray-600 text-sm">
        Dynamic routes have variable URL paths that include parameters, such as&nbsp;
        <code className="code-block">
          /page/[id]
        </code>
        &nbsp;or&nbsp;
        <code className="code-block">
          /resource/[id]/sub-resource/[sub-resource-id]
        </code>
        . These routes represent pages with URLs that change based on the parameter values, allowing for dynamic content based on the path.
      </p>
    </RoutesRenderingOptions>
  )
}

export default DynamicRoutes
