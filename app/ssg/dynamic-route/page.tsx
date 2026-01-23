import { getStaticPaths } from "./getStaticPages"

async function page() {
  const paths = await getStaticPaths()

  return (
    <main>
      <ol>
        {paths.map(({ name }, index) => (
          <li key={index}>
            {name}
          </li>
        ))}
      </ol>
    </main>
  )
}

export default page
