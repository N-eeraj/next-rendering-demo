import Link from "next/link"
import { getStaticParams } from "./getStaticParams"

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

  return (
    <section className={`
      space-y-2
      ${className}
    `}>
      <h2 className="text-xl font-semibold text-gray-600">
        Pre-rendered Pages
      </h2>

      <ol className="list-decimal mb-3 pl-5 space-y-3 text-gray-800">
        {paths.map(({ name }, index) => (
          <li
            key={index}
            className={`
              w-fit
              ${currentPath === name ? "text-sky-600 pointer-events-none" : "hover:text-sky-700 hover:underline transition-colors cursor-pointer"}
            `}>
            <Link href={dynamicRoute + name}>
              {dynamicRoute}{name}
            </Link>
          </li>
        ))}
      </ol>

      <blockquote className="pl-3 py-1.5 bg-gray-100 text-gray-800 text-sm border-l-4 border-gray-500">
        Pages generated at {dateTime}
      </blockquote>
    </section>
  )
}

export default PreRenderedPages
