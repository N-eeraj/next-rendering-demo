import { notFound } from "next/navigation"
import Title from "@/components/Title"
import Navigation from "@/components/Navigation"
import Link from "next/link"
import Benefits from "@/components/Benefits"
import { DynamicComponentByName as DynamicComponent } from "@/app/dynamic-rendering/DynamicComponent"

interface Props {
  params: Promise<{ name: string }>
}

const BENEFITS = [
  "Data is always fresh",
  "Full page is streamed progressively",
  "Page is SEO-friendly",
  "User sees loading state until content is ready",
]

async function DynamicRouteDynamicRendering({ params }: Props) {
  try {
    const { name } = await params

    return (
      <main className="main-container">
        <Title
          heading="Dynamic Rendering"
          tagline="Full Page Progressive SSR"
        />
  
        <p className="mb-4 text-gray-700">
          This page is rendered on the server for every request, generating fresh HTML each time a user visits. Unlike static pages, the HTML is never cached.
          The page shows a loading state, then streams the full HTML to improve time-to-first-byte.
        </p>

        <Benefits benefits={BENEFITS} />

        <p className="mb-8 text-gray-500 text-sm">
          This strategy pairs dynamic URLs with real-time server rendering to ensure fresh content for every visitor.
          Streaming the page progressively helps reduce perceived load time and improves the overall experience.
        </p>

        <DynamicComponent
          label="Streamed at"
          name={name}
        >
          Pokémon is fetched at request time based on the&nbsp;
          <code className="code-block bg-gray-300 text-gray-600">
            [name]
          </code>
          &nbsp;route parameter.
          Using a loading state creates a smooth, predictable experience while still enabling SEO-friendly server-side rendering.
        </DynamicComponent>

        <Navigation>
          <Link
            href="/dynamic-rendering/dynamic-route/streaming"
            className="link"
          >
            Back to Example Paths
          </Link>
        </Navigation>
      </main>
    )
  } catch {
    notFound()
  }
}

export default DynamicRouteDynamicRendering
