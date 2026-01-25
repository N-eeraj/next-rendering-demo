import { notFound } from "next/navigation"
import { getStaticParams } from "../../getStaticParams"
import Title from "@/components/Title"
import Benefits from "@/components/Benefits"
import PokemonDemoCard from "@/components/PokemonDemoCard"
import Navigation from "@/components/Navigation"
import Link from "next/link"
import PreRenderedPages from "../../PreRenderedPages"

interface Props {
  params: Promise<{ name: string }>
}

export const revalidate = 60 // Revalidate every 60 seconds

export async function generateStaticParams() {
  return await getStaticParams()
}

async function fetchRandomPokemon(name: string) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
  return await response.json()
}

const BENEFITS = [
  "HTML is generated at build time for all specified paths",
  "Data fetching occurs at build time",
  "Content is cached and served to visitors until revalidation",
  "Pages are regenerated in the background after the revalidation period",
  "Ideal for dynamic routes that need pre-rendering with occasional updates",
]

async function DynamicRouteSSG_ISR({ params }: Props) {
  const { name } = await params
  const staticPaths = await getStaticParams()
  if (!staticPaths.some((pathParams) => pathParams.name === name)) {
    notFound()
  }

  const pokemon = await fetchRandomPokemon(name)

  return (
    <main className="main-container">
      <Title
        heading="SSG with generateStaticParams and ISR"
        tagline="Pre-Rendered at Build Time with Background Updates"
      />

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

      <PreRenderedPages
        dynamicRoute="/ssg/dynamic-route/isr/"
        currentPath={pokemon.name}
        className="mt-10 pt-8 border-t border-t-gray-300" />

      <Navigation>
        <Link
          href="/ssg/dynamic-route/isr"
          className="text-sky-700 hover:underline font-medium"
        >
          Back to Listing
        </Link>
      </Navigation>
    </main>
  )
}

export default DynamicRouteSSG_ISR
