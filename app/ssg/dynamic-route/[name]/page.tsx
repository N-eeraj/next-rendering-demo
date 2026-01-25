import { notFound } from "next/navigation"
import { getStaticParams } from "../getStaticParams"
import Title from "@/components/Title"
import Benefits from "@/components/Benefits"
import PokemonDemoCard from "@/components/PokemonDemoCard"
import Navigation from "@/components/Navigation"
import Link from "next/link"
import PreRenderedPages from "../PreRenderedPages"

interface Props {
  params: Promise<{ name: string }>
}

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
  "Content is consistent for every visitor",
  "Ideal for dynamic routes that can be pre-rendered",
]

async function DynamicRouteSSG({ params }: Props) {
  try {
    const { name } = await params
    const pokemon = await fetchRandomPokemon(name)

    return (
      <main className="main-container">
        <Title
          heading="SSG with generateStaticParams"
          tagline="Pre-Rendered at Build Time"
        />
  
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
  
        <PreRenderedPages
          dynamicRoute="/ssg/dynamic-route/"
          currentPath={pokemon.name}
          className="mt-10 pt-8 border-t border-t-gray-300" />
  
        <Navigation>
          <Link
            href="/ssg/dynamic-route"
            className="text-sky-700 hover:underline font-medium"
          >
            Back to Listing
          </Link>
        </Navigation>
      </main>
    )
  } catch {
    notFound()
  }
}

export default DynamicRouteSSG
