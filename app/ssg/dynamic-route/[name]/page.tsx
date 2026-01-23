import { notFound } from "next/navigation"
import { getStaticPaths } from "../getStaticPages"

interface Props {
  params: Promise<{ name: string }>
}

export async function generateStaticParams() {
  return await getStaticPaths()
}

async function DynamicRouteSSG({ params }: Props) {
  const { name } = await params
  const staticPaths = await getStaticPaths()
  if (!staticPaths.some((pathParams) => pathParams.name === name)) {
    notFound()
  }

  return (
    <main>
      SSG Page with Dynamic Route for: {name}
    </main>
  )
}

export default DynamicRouteSSG
