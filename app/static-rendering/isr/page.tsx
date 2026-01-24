import Benefits from "@/components/Benefits"
import Navigation from "@/components/Navigation"
import PokemonDemoCard from "@/components/PokemonDemoCard"
import Title from "@/components/Title"

const BENEFITS = [
  "Pre-rendered at build time",
  "Background regeneration after a set interval (revalidate)",
  "Combines performance of static pages with up-to-date content",
  "Ideal for content that changes frequently but still benefits from static caching",
]

export const revalidate = 60 // Revalidate every 60 seconds

async function fetchRandomPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + Math.ceil(Math.random() * 151))
  return await response.json()
}

async function StaticRenderingISR() {
  const pokemon = await fetchRandomPokemon()

  return (
    <main className="main-container">
      <Title
        heading="Static Rendering with ISR"
        tagline="Pre-rendered with Background Updates" />


      <p className="mb-4 text-gray-700">
        This page is pre-rendered at build time, just like a static page, but it can be updated in the background without rebuilding the entire site.
      </p>

      <p className="mb-8 text-gray-700">
        When a user requests the page after the revalidation period, Next.js regenerates the page on the server while serving the old version immediately. 
        The updated HTML is then cached and served to subsequent visitors.
      </p>

      <Benefits benefits={BENEFITS} />

      <p className="text-sm text-gray-500">
        This approach ensures fast initial loads while keeping data reasonably fresh, without blocking requests.
      </p>

      <PokemonDemoCard
        label="Last Generated"
        pokemon={pokemon}>
        Random Pokémon fetched at build time. This page can regenerate in the background based on the ISR revalidation interval (1 Minute here).
      </PokemonDemoCard>

      <Navigation
        previous="/static-rendering/build-time-fetch"
        next="/dynamic-rendering"
      />
    </main>
  )
}

export default StaticRenderingISR
