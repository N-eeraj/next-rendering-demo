import { notFound } from "next/navigation"
import { getStaticParams } from "../getStaticParams"

interface Props {
  params: Promise<{ name: string }>
}

export async function generateStaticParams() {
  return await getStaticParams()
}

async function DynamicRouteSSG({ params }: Props) {
  const { name } = await params
  const staticPaths = await getStaticParams()
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
