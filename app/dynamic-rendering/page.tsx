import Benefits from "@/components/Benefits"
import Navigation from "@/components/Navigation"
import Title from "@/components/Title"
import { RandomDynamicComponent as DynamicComponent } from "@/app/dynamic-rendering/DynamicComponent"

const BENEFITS = [
  "HTML is generated per request",
  "Data fetching occurs at request time",
  "Content is always up-to-date",
  "Ideal for dynamic or user-specific content",
]

async function DynamicRendering() {
  return (
    <main className="main-container">
      <Title
        heading="Dynamic Rendering (SSR)"
        tagline="Fresh Content per Request"
      />

      <p className="mb-4 text-gray-700">
        SSR is perfect for pages where freshness is more important than build-time performance. 
        This page is rendered on the server for every request, generating fresh HTML each time a user visits. 
        Unlike static pages, the HTML is never cached at build time unless you explicitly configure caching.
      </p>


      <Benefits benefits={BENEFITS} />

      <p className="mb-8 text-gray-500 text-sm">
        This strategy ensures that every visitor receives the most current version of the page, 
        but it may be slightly slower than static or ISR pages due to server processing.
      </p>

      <DynamicComponent label="Rendered at">
        Random Pokémon fetched at request time. This page regenerates on each request, so the content is always fresh.
      </DynamicComponent>

      <Navigation
        previous="/static-rendering/isr"
        next="/dynamic-rendering/streaming"
      />
    </main>
  )
}

export default DynamicRendering
