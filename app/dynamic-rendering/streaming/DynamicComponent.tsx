import PokemonDemoCard from "@/components/PokemonDemoCard"

async function fetchRandomPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + Math.ceil(Math.random() * 151), { cache: 'no-store' })
  return await response.json()
}

export async function DynamicComponent() {
  const pokemon = await fetchRandomPokemon()

  return (
    <PokemonDemoCard
      label="Rendered Stream"
      pokemon={pokemon}>
      Using a loading state ensures a predictable, polished user experience, while still leveraging server-side rendering to provide SEO-friendly content once the page is fully streamed to the client.
    </PokemonDemoCard>
  )
}
