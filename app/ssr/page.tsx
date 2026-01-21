import Benefits from "@/components/Benefits"
import Navigation from "@/components/Navigation"
import PokemonDemoCard from "@/components/PokemonDemoCard"
import Title from "@/components/Title"

const BENEFITS = [
  "HTML is generated per request",
  "Data fetching occurs at request time",
  "Content is always up-to-date",
  "Ideal for dynamic or user-specific content",
]

async function fetchRandomPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + Math.ceil(Math.random() * 151), { cache: "no-cache" })
  return await response.json()
}

async function SSR() {
  const pokemon = await fetchRandomPokemon()

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Title
        heading="Server-Side Rendering (SSR)"
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

      <PokemonDemoCard
        label="Rendered at"
        pokemon={pokemon}>
        Random Pokémon fetched at request time. This page regenerates on each request, so the content is always fresh.
      </PokemonDemoCard>

      <Navigation
        previous="/isr"
        next="/streaming"
      />
    </main>
  )
}

export default SSR
