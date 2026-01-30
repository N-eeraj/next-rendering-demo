import PokemonDemoCard from "@/components/PokemonDemoCard"
import type { Pokemon } from "@/types"
import { PropsWithChildren } from "react"

interface BaseProps extends PropsWithChildren {
  label: string
}

async function fetchRandomPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + Math.ceil(Math.random() * 151), { cache: 'no-store' })
  return await response.json()
}

interface RandomProps extends BaseProps {}

export async function RandomDynamicComponent({ label, children }: RandomProps) {
  const pokemon: Pokemon = await fetchRandomPokemon()

  return (
    <PokemonDemoCard
      label={label}
      pokemon={pokemon}>
      {children}
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

export async function DynamicComponentByName({ name, label, children }: ByNameProps) {
  const pokemon: Pokemon = await fetchPokemonByName(name)

  return (
    <PokemonDemoCard
      label={label}
      pokemon={pokemon}>
      {children}
    </PokemonDemoCard>
  )
}
