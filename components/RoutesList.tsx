import Link from "next/link"

interface Props {
  title?: string
  dynamicRoute: string
  paths : Array<{
    name: string
  }>
  currentPath?: string
}

function RoutesList({ title, dynamicRoute, paths, currentPath }: Props) {
  return (
    <>
      {title && (
        <h3 className="text-xl font-semibold text-gray-600">
          {title}
        </h3>
      )}

      <ol className="list-decimal pl-5 space-y-3 text-gray-800">
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
      </>
  )
}

export default RoutesList
