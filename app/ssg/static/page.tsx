const BENEFITS = [
  "No data fetching",
  "No revalidation",
  "No server logic at request time",
  "Same HTML for every user",
]

function StaticSSG() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">
        Static Site Generation (SSG)
        <span className="block text-lg font-medium text-gray-500">
          Static Content Only
        </span>
      </h1>

      <p className="mb-4 text-gray-700">
        This page is fully generated at build time and contains no dynamic data.
      </p>

      <p className="mb-8 text-gray-700">
        The HTML is created once during&nbsp;
        <code className="rounded bg-gray-100 px-1 py-0.5 font-mono text-sm">
          next build
        </code>
        &nbsp;and then served as a static file for every request.
      </p>

      <ul className="mb-8 space-y-3 rounded-lg border border-gray-200 bg-gray-50 p-6">
        {BENEFITS.map((content, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-gray-800">
            <span className="text-green-500">✔</span>
            {content}
          </li>
        ))}
      </ul>

      <p className="text-sm text-gray-500">
        This represents the simplest and fastest rendering strategy in Next.js.
      </p>
    </main>
  )
}

export default StaticSSG
