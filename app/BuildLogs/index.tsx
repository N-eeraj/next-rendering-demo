import RenderingMethods from "./RenderingMethods"
import Routes from "./Routes"

function BuildLogs() {
  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-semibold text-gray-700">
        Build Logs
      </h2>

      <code className="block w-full space-y-2 px-2 py-4 bg-black selection:bg-white text-gray-100 selection:text-gray-900 rounded-sm overflow-x-auto">
        <Routes />
        <RenderingMethods />
      </code>
    </section>
  )
}

export default BuildLogs
