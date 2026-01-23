import { getStaticParams } from "./getStaticParams"

async function page() {
  const paths = await getStaticParams()

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
