const BENEFITS = [
  "Data is fetched at build time",
  "No data fetching at request time",
  "No revalidation",
  "Same HTML for every user",
]

async function fetchRandomPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/" + Math.ceil(Math.random() * 151))
  return await response.json()
}

async function BuildTimeFetchSSG() {
  const dateTime = new Date().toLocaleString("en-IN", {
    dateStyle: "long",
    timeStyle: "short",
  })
  const pokemon = await fetchRandomPokemon()

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
        Static Site Generation (SSG)
        <span className="block text-lg font-medium text-gray-500">
          Build-Time Data Fetching
        </span>
      </h1>

      <p className="mb-4 text-gray-700">
        This page is generated at build time and includes data fetched during the build process.
      </p>

      <p className="mb-8 text-gray-700">
        The data is retrieved once when&nbsp;
        <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
          next build
        </code>
        &nbsp;runs, and the resulting HTML is saved as a static file. Every user receives the same pre-rendered HTML until the site is rebuilt.
      </p>

      <ul className="mb-8 space-y-3 rounded-lg border border-gray-200 bg-gray-50 p-6">
        {BENEFITS.map((content, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-gray-800">
            <span className="text-green-500">✔</span>
            {content}
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-500">
        This strategy is ideal for content that depends on external data but changes infrequently.
      </p>

      <section className="mt-12 rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
        <p className="mb-4 text-gray-700">
          Build Time:&nbsp;
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
        <p className="mt-4 text-sm text-gray-500">
          Random Pokémon fetched at build time
        </p>
      </section>
    </main>
  )
}

export default BuildTimeFetchSSG
