import { notFound } from "next/navigation"
import { getStaticParams } from "../getStaticParams"
import Title from "@/components/Title"
import Navigation from "@/components/Navigation"
import Link from "next/link"
import PreRenderedPage from "./PreRenderedPage"
import PreRenderedPages from "../PreRenderedPages"
import OnDemandCachedPage from "./OnDemandCachedPage"
import type { Pokemon } from "@/types"

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

async function DynamicRouteSSG({ params }: Props) {
  try {
    const { name } = await params
    const pokemon: Pokemon = await fetchRandomPokemon(name)
    const staticPaths = await getStaticParams()
    const PageContent = staticPaths.some((pathParams) => pathParams.name === name)
      ? PreRenderedPage
      : OnDemandCachedPage

    return (
      <main className="main-container">
        <Title
          heading="SSG with generateStaticParams"
          tagline="Pre-Rendered at Build Time"
        />

        <PageContent  pokemon={pokemon} />
  
        <PreRenderedPages
          dynamicRoute="/ssg/dynamic-route/"
          currentPath={pokemon.name}
          className="mt-10 pt-8 border-t border-t-gray-300" />
  
        <Navigation>
          <Link
            href="/ssg/dynamic-route"
            className="link"
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
