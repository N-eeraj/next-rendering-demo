import { getStaticParams } from "./getStaticParams"
import RoutesList from "@/components/RoutesList"

interface Props {
  dynamicRoute: string
  currentPath?: string
  className?: string
}

async function PreRenderedPages({ currentPath, dynamicRoute, className = "" }: Props) {
  const paths = await getStaticParams()
  const dateTime = new Date().toLocaleString("en-IN", {
    dateStyle: "long",
    timeStyle: "short",
  })

  const routesListPathProps = {
    title: "Pre-Rendered Pages",
    paths,
    currentPath,
    dynamicRoute,
  }

  return (
    <section className={`
      flex flex-col gap-y-2
      ${className}
    `}>
      <RoutesList {...routesListPathProps} />

      <blockquote className="mt-1 pl-3 py-1.5 bg-gray-100 text-gray-800 text-sm border-l-4 border-gray-500">
        Pages generated at {dateTime}
      </blockquote>
    </section>
  )
}

export default PreRenderedPages
