import { notFound } from "next/navigation"
import Title from "@/components/Title"
import Navigation from "@/components/Navigation"
import Link from "next/link"
import type { Pokemon } from "@/types"
import Benefits from "@/components/Benefits"
import PokemonDemoCard from "@/components/PokemonDemoCard"

interface Props {
  params: Promise<{ name: string }>
}

const BENEFITS = [
  "HTML is generated per request",
  "Data fetching occurs at request time",
  "Content is always up-to-date",
  "Ideal for dynamic or user-specific content",
]

async function fetchRandomPokemon(name: string) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
  return await response.json()
}

async function DynamicRouteDynamicRendering({ params }: Props) {
  try {
    const { name } = await params
    const pokemon: Pokemon = await fetchRandomPokemon(name)
    return (
      <main className="main-container">
        <Title
          heading="Dynamic Rendering"
          tagline="Rendered On-Demand"
        />
  
        <p className="mb-4 text-gray-700">
          This page is rendered on the server for every request, generating fresh HTML each time a user visits. Unlike static pages, the HTML is never cached at build time unless you explicitly configure caching.
        </p>

        <Benefits benefits={BENEFITS} />

        <p className="mb-8 text-gray-500 text-sm">
          This strategy combines the flexibility of dynamic URLs with real-time server rendering, ensuring that every visitor receives the most up-to-date version of the page.
          However, it may be slightly slower than SSG or SSG with ISR due to server-side processing on each request.
        </p>

        <PokemonDemoCard
          label="Rendered at"
          pokemon={pokemon}>
          Pokémon is fetched at request time based on the&nbsp;
          <code className="code-block bg-gray-300 text-gray-600">
            [name]
          </code>
          &nbsp;route parameter. This page regenerates on each request, so the content is always fresh.
        </PokemonDemoCard>

        <Navigation>
          <Link
            href="/dynamic-rendering/dynamic-route"
            className="text-sky-700 hover:underline font-medium"
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
