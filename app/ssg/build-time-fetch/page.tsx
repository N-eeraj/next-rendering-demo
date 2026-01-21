import Benefits from "@/components/Benefits"
import Navigation from "@/components/Navigation"
import PokemonDemoCard from "@/components/PokemonDemoCard"
import Title from "@/components/Title"

const BENEFITS = [
  "Data is fetched at build time",
  "No data fetching at request time",
  "No revalidation",
  "Same HTML for every user",
]

async function fetchRandomPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + Math.ceil(Math.random() * 151))
  return await response.json()
}

async function BuildTimeFetchSSG() {
  const pokemon = await fetchRandomPokemon()

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <Title
        heading="Static Site Generation (SSG)"
        tagline="Build-Time Data Fetching" />

      <p className="mb-4 text-gray-700">
        This page is generated at build time and includes data fetched during the build process.
      </p>

      <p className="mb-8 text-gray-700">
        The data is retrieved once when&nbsp;
        <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
          next build
        </code>
        &nbsp;runs, and the resulting HTML is saved as a static file. Every user receives the same pre-rendered HTML until the site is rebuilt.
      </p>

      <Benefits benefits={BENEFITS} />

      <p className="text-sm text-gray-500">
        This strategy is ideal for content that depends on external data but changes infrequently.
      </p>

      <PokemonDemoCard
        label="Build Time"
        pokemon={pokemon}>
        Random Pokémon fetched at build time
      </PokemonDemoCard>

      <Navigation
        previous="/ssg/static"
        next="/isr"
      />
    </main>
  )
}

export default BuildTimeFetchSSG
