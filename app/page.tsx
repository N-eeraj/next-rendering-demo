import Link from "next/link"

const RENDERING_OPTIONS = [
  {
    label: "Static SSG (static content only)",
    url: "/ssg/static",
  },
  {
    label: "SSG with build-time fetch",
    url: "/ssg/build-time-fetch",
  },
  {
    label: "ISR",
    url: "/isr",
  },
  {
    label: "SSR",
    url: "/ssr",
  },
  {
    label: "Streaming",
    url: "/streaming",
  },
  {
    label: "PPR (Partial Prerendering)",
    url: "/ppr",
  },
]

function Home() {
  return (
    <main>
      <h1 className="text-2xl md:text-3xl font-semibold">
        React Rendering Demo
      </h1>

      <ol className="ml-5 list-decimal">
        {RENDERING_OPTIONS.map(({ label, url }, index) => (
          <li key={index}>
            <Link
              href={url}
              className="hover:text-sky-700 hover:underline">
              {label}
            </Link>
          </li>
        ))}
      </ol>
    </main>
  )
}

export default Home
