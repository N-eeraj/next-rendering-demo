import type { PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
  label: string
  pokemon: {
    name: string
    sprites: {
      other: {
        "official-artwork": {
          front_default: string
        }
      }
    }
  }
}

function PokemonDemoCard({ label, pokemon, children }: Props) {
  const dateTime = new Date().toLocaleString("en-IN", {
    dateStyle: "long",
    timeStyle: "short",
  })

  return (
    <section className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-4 md:p-6 text-center">
      <p className="mb-4 text-gray-700">
        {label}:&nbsp;
        <time className="font-mono text-gray-900">
          {dateTime}
        </time>
      </p>
      <div className="inline-block rounded overflow-hidden border border-gray-200">
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="w-32 h-32 object-contain bg-white"
        />
      </div>
      <p className="max-w-md mt-4 mx-auto text-sm text-gray-500">
        {children}
      </p>
    </section>
  )
}

export default PokemonDemoCard
