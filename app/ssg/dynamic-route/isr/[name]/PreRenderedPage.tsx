import Benefits from "@/components/Benefits"
import PokemonDemoCard from "@/components/PokemonDemoCard"
import type { Pokemon } from "@/app/types"

const BENEFITS = [
  "HTML is generated at build time for all specified paths",
  "Data fetching occurs at build time",
  "Content is cached and served to visitors until revalidation",
  "Pages are regenerated in the background after the revalidation period",
  "Ideal for dynamic routes that need pre-rendering with occasional updates",
]

interface Props {
  pokemon: Pokemon
}

async function PreRenderedPage({ pokemon }: Props) {
  return (
    <>
      <p className="mb-4 text-gray-700">
        This page is pre-rendered at build time for each path returned by&nbsp;
        <code className="code-block">
          generateStaticParams
        </code>
        , producing static HTML just like a static page.
      </p>

      <p className="mb-8 text-gray-700">
        After the initial build, the page is cached and served to all visitors. The page regenerates in the background after the revalidation period, updating the cached HTML for future visitors.
      </p>


      <Benefits benefits={BENEFITS} />

      <p className="mb-8 text-gray-500 text-sm">
        This strategy combines the flexibility of dynamic URLs with the performance of static pages, while allowing background updates, making it ideal for content that changes occasionally but still benefits from pre-rendering.
      </p>

      <PokemonDemoCard
        label="Last Generated"
        pokemon={pokemon}>
        Pokémon fetched are pre-rendered at build time for each&nbsp;
        <code className="code-block bg-gray-300 text-gray-600">
          [name]
        </code>
        &nbsp;route parameter. This page can regenerate in the background based on the ISR revalidation interval (1 Minute here).
      </PokemonDemoCard>
    </>
  )
}

export default PreRenderedPage
