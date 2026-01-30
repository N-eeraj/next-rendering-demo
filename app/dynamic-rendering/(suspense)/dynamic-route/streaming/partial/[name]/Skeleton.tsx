const Skeleton = () => {
  return (
    <>
      <section className="mt-12 rounded-lg bg-gray-50 p-4 md:p-6 text-center">
        <p className="mb-4 animate-pulse bg-gray-200 h-4 w-1/2 mx-auto rounded"></p>
        <div className="inline-block rounded overflow-hidden border border-gray-200 animate-pulse bg-gray-300 w-32 h-32"></div>
        <div className="mx-auto flex max-w-md flex-col items-center space-y-2">
          <p className="h-3 w-6/7 rounded bg-gray-200 animate-pulse" />
          <p className="h-3 w-full rounded bg-gray-200 animate-pulse" />
          <p className="h-3 w-5/6 rounded bg-gray-200 animate-pulse" />
        </div>
      </section>
    </>
  )
}

export default Skeleton
