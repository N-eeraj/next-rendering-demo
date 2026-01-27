import Benefits from "@/components/Benefits"
import PokemonDemoCard from "@/components/PokemonDemoCard"
import type { Pokemon } from "@/types"

const BENEFITS = [
  "HTML is generated at build time for all specified paths",
  "Data fetching occurs at build time",
  "Content is consistent for every visitor",
  "Ideal for dynamic routes that can be pre-rendered",
]

interface Props {
  pokemon: Pokemon
}

async function PreRenderedPage({ pokemon }: Props) {
  return (
    <>
      <p className="mb-4 text-gray-700">
        This page is generated at build time for each path returned by&nbsp;
        <code className="code-block">
          generateStaticParams
        </code>
        &nbsp;once when&nbsp;
        <code className="code-block">
          next build
        </code>
        &nbsp;runs.
      </p>

      <p className="mb-8 text-gray-700">
        Producing fully static HTML that is served to every visitor. Unlike SSR, no server processing is needed at request time, ensuring fast load times.
      </p>

      <Benefits benefits={BENEFITS} />

      <p className="mb-8 text-gray-500 text-sm">
        This strategy combines the flexibility of dynamic URLs with the performance of static pages, making it ideal for content that rarely changes but requires multiple paths.
      </p>

      <PokemonDemoCard
        label="Build Time"
        pokemon={pokemon}>
        Pokémon fetched at build time based on the&nbsp;
        <code className="code-block bg-gray-300 text-gray-600">
          [name]
        </code>
        &nbsp;route parameter, page is statically pre-rendered for each specified path, with the same content for all visitors until the site is rebuilt.
      </PokemonDemoCard>
    </>
  )
}

export default PreRenderedPage
