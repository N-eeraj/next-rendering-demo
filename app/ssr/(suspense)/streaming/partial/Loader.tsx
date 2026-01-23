const Skeleton = () => {
  return (
    <>
      <section className="mt-12 rounded-lg bg-gray-50 p-4 md:p-6 text-center">
        <p className="mb-4 animate-pulse bg-gray-200 h-4 w-1/2 mx-auto rounded"></p>
        <div className="inline-block rounded overflow-hidden border border-gray-200 animate-pulse bg-gray-300 w-32 h-32"></div>
        <p className="max-w-md mt-4 mx-auto animate-pulse bg-gray-200 h-4 w-3/4 rounded"></p>
      </section>
    </>
  )
}

export default Skeleton
