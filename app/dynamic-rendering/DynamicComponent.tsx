import PokemonDemoCard from "@/components/PokemonDemoCard"
import type { Pokemon } from "@/types"

interface BaseProps {
  label: string
}

async function fetchRandomPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + Math.ceil(Math.random() * 151), { cache: 'no-store' })
  return await response.json()
}

interface RandomProps extends BaseProps {}

export async function RandomDynamicComponent({ label }: RandomProps) {
  const pokemon: Pokemon = await fetchRandomPokemon()

  return (
    <PokemonDemoCard
      label={label}
      pokemon={pokemon}>
      Using a loading state ensures a predictable, polished user experience, while still leveraging server-side rendering to provide SEO-friendly content once the page is fully streamed to the client.
    </PokemonDemoCard>
  )
}

interface ByNameProps extends BaseProps {
  name: string
}


async function fetchPokemonByName(name: string) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + name)
  return await response.json()
}

export async function DynamicComponentByName({ name, label }: ByNameProps) {
  const pokemon: Pokemon = await fetchPokemonByName(name)

  return (
    <PokemonDemoCard
      label={label}
      pokemon={pokemon}>
      Pokémon is fetched at request time based on the&nbsp;
      <code className="code-block bg-gray-300 text-gray-600">
        [name]
      </code>
      &nbsp;route parameter. This page regenerates on each request, so the content is always fresh.
    </PokemonDemoCard>
  )
}
