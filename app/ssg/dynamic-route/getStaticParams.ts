import { Pokemon } from "@/types"

export async function getStaticParams(offset = 0) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=9&offset=${offset}`)
  const data = await response.json()
  return (data.results as Array<Pick<Pokemon, "name">>).map(({ name }) => ({ name }))
}
