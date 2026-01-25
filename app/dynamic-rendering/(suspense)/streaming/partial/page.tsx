import Benefits from "@/components/Benefits"
import Navigation from "@/components/Navigation"
import Title from "@/components/Title"
import { Suspense } from "react"
import Skeleton from "./Loader"
import { DynamicComponent } from "../../../DynamicComponent"

const BENEFITS = [
  "Data is always fresh",
  "Partial content visible and interactive immediately",
  "Dynamic sections stream progressively",
  "Page is SEO-friendly",
]

async function DynamicRenderingPartialStreaming() {
  return (
    <main className="main-container">
      <Title
        heading="Dynamic Rendering with Partial Streaming"
        tagline="Partial Progressive SSR" />

      <p className="mb-2 text-gray-700">
        This page renders immediately with static sections while dynamic parts load from the server. Only the dynamic sections are streamed in, letting users see the layout instantly.
      </p>

      <p className="mb-4 text-gray-700">
        Dynamic sections are wrapped in&nbsp;
        <code className="code-block">
          {'<Suspense>'}
        </code>
        , so the page renders immediately while only those parts are streamed from the server.
      </p>

      <Benefits benefits={BENEFITS} />

      <p className="mb-8 text-gray-500 text-sm">
        Partial content is visible and interactive immediately, improving user experience.
      </p>

      <Suspense fallback={<Skeleton />}>
        <DynamicComponent />
      </Suspense>

      <Navigation
        previous="/dynamic-rendering/streaming"
        next="/ssg/dynamic-route"
      />
    </main>
  )
}

export default DynamicRenderingPartialStreaming
