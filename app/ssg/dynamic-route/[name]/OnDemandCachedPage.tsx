import Benefits from "@/components/Benefits"
import PokemonDemoCard from "@/components/PokemonDemoCard"
import type { Pokemon } from "@/types"

const BENEFITS = [
  "HTML is generated on the first request, not at build time",
  "Data fetching happens on demand",
  "Content is cached for subsequent visitors",
  "Ideal for dynamic routes that can't be pre-rendered but are cacheable",
]

interface Props {
  pokemon: Pokemon
}

async function OnDemandCachedPage({ pokemon }: Props) {
  return (
    <>
      <p className="mb-4 text-gray-700">
        This page is not generated at build time. Instead, it is generated on the first request for each path, then cached for subsequent requests. This approach allows the page to be created on-demand while serving fast cached versions to visitors after the initial render.
      </p>

      <Benefits benefits={BENEFITS} />

      <p className="mb-8 text-gray-500 text-sm">
        This strategy generates pages on the first request and caches them, combining dynamic URL flexibility with fast repeat loads, making it ideal for content that doesn't need to be built upfront.
      </p>

      <PokemonDemoCard
        label="Generated at"
        pokemon={pokemon}>
        Pokémon is fetched on the first request based on the&nbsp;
        <code className="code-block bg-gray-300 text-gray-600">
          [name]
        </code>
        &nbsp;route parameter, and the page is generated on demand, then cached and reused for all visitors.
      </PokemonDemoCard>
    </>
  )
}

export default OnDemandCachedPage
