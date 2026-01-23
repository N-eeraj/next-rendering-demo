import Link from "next/link"
import { PropsWithChildren } from "react"

interface Props extends PropsWithChildren {
  title: string
  options: Array<{
    label: string
    url: string
  }>
  className?: string
}

function RoutesRenderingOptions({ title, options, className, children }: Props) {
  return (
    <section
      className={`space-y-2 ${className}`}>
      <h2 className="text-2xl font-semibold text-gray-700">
        {title}
      </h2>

      {children && children}

      <ul className="space-y-4">
        {options.map(({ label, url }, index) => (
          <li
            key={index}
            className="border border-gray-200 rounded-lg bg-gray-50 hover:bg-sky-50 transition">
            <Link
              href={url}
              className="block size-full p-4 text-gray-800 font-medium hover:text-sky-700 hover:underline"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default RoutesRenderingOptions
