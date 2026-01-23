import Link from "next/link"

const RENDERING_OPTIONS = [
  {
    label: "Static SSG (static content only)",
    url: "/ssg/static",
  },
  {
    label: "SSG with Build-Time Fetch",
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
    label: "SSR with Streaming",
    url: "/ssr/streaming",
  },
  {
    label: "SSR with Partial Streaming",
    url: "/ssr/streaming/partial",
  },
]

function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
        React Rendering Demo
      </h1>

      <p className="mb-8 text-gray-700">
        Next.js offers multiple page rendering strategies, each optimized for different use cases. 
        This demo showcases how pages can be rendered, when data is fetched, and what the resulting 
        HTML looks like for users. Explore each page to see the differences in static, server-side, 
        incremental, and client-driven rendering.
      </p>

      <ol className="space-y-4">
        {RENDERING_OPTIONS.map(({ label, url }, index) => (
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
      </ol>
    </main>
  )
}

export default Home
