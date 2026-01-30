import DynamicRoutes from "./DynamicRoutes"
import StaticRoutes from "./StaticRoutes"

function Home() {
  return (
    <main className="main-container">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900">
        Next Rendering Demo
      </h1>

      <p className="mb-8 text-gray-700">
        Next.js offers multiple page rendering strategies, each optimized for different use cases. 
        This demo showcases how pages can be rendered, when data is fetched, and what the resulting 
        HTML looks like for users. Explore each page to see the differences in static, server-side, 
        incremental, and client-driven rendering.
      </p>

      <section className="space-y-8">
        <StaticRoutes />
        <DynamicRoutes />
      </section>
    </main>
  )
}

export default Home
