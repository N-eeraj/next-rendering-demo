import RenderingMethods from "./RenderingMethods"
import Routes from "./Routes"

function BuildLogs() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-700">
        Build Logs
      </h2>

      <section className="w-full space-y-2 p-3 bg-black selection:bg-white text-gray-100 selection:text-gray-900 rounded-sm overflow-x-auto">
        <Routes />
        <RenderingMethods />
      </section>
    </section>
  )
}

export default BuildLogs
