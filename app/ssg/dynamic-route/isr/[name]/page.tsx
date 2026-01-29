import { notFound } from "next/navigation"
import { getStaticParams } from "../../getStaticParams"
import Title from "@/components/Title"
import Navigation from "@/components/Navigation"
import Link from "next/link"
import PreRenderedPages from "../../PreRenderedPages"
import PreRenderedPage from "./PreRenderedPage"
import OnDemandCachedPage from "./OnDemandCachedPage"

interface Props {
  params: Promise<{ name: string }>
}

export const revalidate = 60 // Revalidate every 60 seconds

export async function generateStaticParams() {
  return await getStaticParams(151)
}

async function fetchRandomPokemon(name: string) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
  return await response.json()
}

async function DynamicRouteSSG_ISR({ params }: Props) {
  try {
    const { name } = await params
    const pokemon = await fetchRandomPokemon(name)
    const staticPaths = await getStaticParams(151)
    const PageContent = staticPaths.some((pathParams) => pathParams.name === name)
      ? PreRenderedPage
      : OnDemandCachedPage
  
    return (
      <main className="main-container">
        <Title
          heading="SSG with generateStaticParams and ISR"
          tagline="Pre-Rendered at Build Time with Background Updates"
        />

        <PageContent pokemon={pokemon} />
  
        <PreRenderedPages
          dynamicRoute="/ssg/dynamic-route/isr/"
          currentPath={pokemon.name}
          offset={151}
          className="mt-10 pt-8 border-t border-t-gray-300" />
  
        <Navigation>
          <Link
            href="/ssg/dynamic-route/isr"
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

export default DynamicRouteSSG_ISR
