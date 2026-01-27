import Benefits from "@/components/Benefits"
import PokemonDemoCard from "@/components/PokemonDemoCard"
import type { Pokemon } from "@/types"

const BENEFITS = [
  "HTML is generated on the first request for each path, not at build time",
  "Data fetching occurs on demand when the page is requested",
  "Content is cached and served to visitors until revalidation",
  "Pages are regenerated in the background after the revalidation period",
  "Ideal for dynamic routes that can't be pre-rendered but are cacheable with occasional updates",
]

interface Props {
  pokemon: Pokemon
}

async function OnDemandCachedPage({ pokemon }: Props) {
  return (
    <>
      <p className="mb-4 text-gray-700">
        This page is not pre-rendered at build time. Instead, it is generated on the first request for each path, producing static HTML on demand.
      </p>

      <p className="mb-8 text-gray-700">
        After the initial request, the page is cached and served to all visitors. The page revalidates in the background after the revalidation period, updating the cached HTML for future visitors.
      </p>

      <Benefits benefits={BENEFITS} />

      <p className="mb-8 text-gray-500 text-sm">
        This strategy generates pages on the first request and caches them, combining flexibility of dynamic URLs with fast repeat loads, while supporting background updates through revalidation, making it ideal for content that changes occasionally but doesn't need to be built upfront.
      </p>

      <PokemonDemoCard
        label="Generated at"
        pokemon={pokemon}>
        Pokémon is fetched on the first request for the&nbsp;
        <code className="code-block bg-gray-300 text-gray-600">
          [name]
        </code>
        &nbsp;route parameter, the page is generated on demand, cached, and can regenerate in the background based on the ISR interval (1 minute).
      </PokemonDemoCard>
    </>
  )
}

export default OnDemandCachedPage
