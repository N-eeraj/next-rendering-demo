import BuildLogs from "./BuildLogs"
import DynamicRoutes from "./DynamicRoutes"
import Footer from "./Footer"
import Header from "./Header"
import StaticRoutes from "./StaticRoutes"

function Home() {
  return (
    <main className="main-container">
      <Header />

      <section className="space-y-6 mb-8">
        <StaticRoutes />
        <DynamicRoutes />
      </section>

      <BuildLogs />

      <Footer />
    </main>
  )
}

export default Home
