export async function getStaticPaths() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=9&offset=0")
  const data = await response.json()
  return (data.results as Array<any>).map(({ name }) => ({ name }))
}
