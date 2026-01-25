import Benefits from "@/components/Benefits"
import Navigation from "@/components/Navigation"
import Title from "@/components/Title"
import { DynamicComponent } from "../DynamicComponent"

const BENEFITS = [
  "Data is always fresh",
  "Full page is streamed progressively",
  "Page is SEO-friendly",
  "User sees loading state until content is ready",
]

async function DynamicRenderingStreaming() {
  return (
    <main className="main-container">
      <Title
        heading="Dynamic Rendering with Streaming"
        tagline="Full Page Progressive SSR" />

      <p className="mb-2 text-gray-700">
      This page initially shows a loading state while the server prepares the full HTML. Once ready, the entire page is streamed to the user, improving time-to-first-byte for large pages.
      </p>

      <p className="mb-4 text-gray-700">
        A&nbsp;
        <code className="code-block">
          loading.tsx
        </code>
        &nbsp;displays a placeholder while the full page is progressively streamed from the server.
      </p>

      <Benefits benefits={BENEFITS} />

      <p className="mb-8 text-gray-500 text-sm">
        Streaming delivers the full page progressively, reducing perceived load time.
      </p>

      <DynamicComponent />

      <Navigation
        previous="/dynamic-rendering"
        next="/dynamic-rendering/streaming/partial"
      />
    </main>
  )
}

export default DynamicRenderingStreaming
