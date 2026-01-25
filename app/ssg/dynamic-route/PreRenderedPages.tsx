import Link from "next/link"
import { getStaticParams } from "./getStaticParams"

interface Props {
  dynamicRoute: string
  currentPath?: string
  className?: string
}

async function PreRenderedPages({ currentPath, dynamicRoute, className = "" }: Props) {
  const paths = await getStaticParams()

  return (
    <section className={className}>
      <h2 className="mb-2 text-xl font-semibold text-gray-600">
        Pre-rendered Pages
      </h2>

      <ol className="list-decimal pl-6 space-y-3 text-gray-800">
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
    </section>
  )
}

export default PreRenderedPages
