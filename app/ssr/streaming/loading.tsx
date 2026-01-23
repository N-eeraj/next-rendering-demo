const Skeleton = () => {
  return (
    <>
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="mb-6">
          <div className="h-8 w-3/4 rounded bg-gray-300 animate-pulse" />
          <div className="mt-2 h-6 w-1/2 rounded bg-gray-200 animate-pulse" />
        </h1>

        <div className="mb-2 h-12 space-y-2 animate-pulse">
          <div className="h-4 w-full rounded bg-gray-300" />
          <div className="h-4 w-5/6 rounded bg-gray-300" />
        </div>

        <div className="mb-4 animate-pulse">
          <div className="h-4 w-3/4 rounded bg-gray-300" />
        </div>

        <ul className="mb-8 space-y-3 rounded-lg border border-gray-200 bg-gray-50 p-6">
          {Array.from({ length: 4 }).map((_, index) => (
            <li key={index} className="flex h-6 items-center gap-2">
              <span className="h-4 w-4 rounded-full bg-gray-300 animate-pulse" />
              <div className="h-4 w-3/4 rounded bg-gray-200 animate-pulse" />
            </li>
          ))}
        </ul>

        <div className="mb-8 space-y-2">
          <p className="h-4 w-3/4 rounded bg-gray-300 animate-pulse" />
        </div>

        <section className="mt-12 rounded-lg bg-gray-50 p-4 text-center md:p-6">
          <p className="mx-auto mb-4 h-4 w-1/2 rounded bg-gray-200 animate-pulse" />
          <div className="inline-block h-32 w-32 overflow-hidden rounded border border-gray-200 bg-gray-300 animate-pulse" />
          <div className="mx-auto flex max-w-md flex-col items-center space-y-2">
            <p className="h-3 w-full rounded bg-gray-200 animate-pulse" />
            <p className="h-3 w-6/7 rounded bg-gray-200 animate-pulse" />
          </div>
        </section>
      </main>
    </>
  )
}

export default Skeleton
