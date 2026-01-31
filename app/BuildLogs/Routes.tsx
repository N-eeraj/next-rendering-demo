interface StaticRoute {
  type: "static"
  path: string
  revalidate?: string
  expire?: string
}

interface SSGRoute {
  type: "ssg"
  path: string
  preRenderedPaths: Array<Record<string, string>>
  revalidate?: string
  expire?: string
}

interface DynamicRoute {
  type: "dynamic"
  path: string
}

type Route = StaticRoute
  | DynamicRoute
  | SSGRoute

const TYPE_SYMBOL = {
  static: "○",
  ssg: "●",
  dynamic: "ƒ",
}

const routes = ([
  {
    type: "static",
    path: "/",
  },

  // static routes with static rendering
  {
    type: "static",
    path: "/static-rendering",
  },
  {
    type: "static",
    path: "/static-rendering/build-time-fetch",
  },
  {
    type: "static",
    path: "/static-rendering/isr",
    revalidate: "1m",
    expire: "1y",
  },

  // static routes with dynamic rendering
  {
    type: "dynamic",
    path: "/dynamic-rendering",
  },
  {
    type: "dynamic",
    path: "/dynamic-rendering/streaming",
  },
  {
    type: "dynamic",
    path: "/dynamic-rendering/streaming/partial",
  },

  // dynamic routes with ssg rendering
  {
    type: "static",
    path: "/ssg/dynamic-route",
  },
  {
    type: "ssg",
    path: "/ssg/dynamic-route/[name]",
    preRenderedPaths: [],
  },
  {
    type: "static",
    path: "/ssg/dynamic-route/isr",
  },
  {
    type: "ssg",
    path: "/ssg/dynamic-route/isr/[name]",
    preRenderedPaths: [],
  },

  // dynamic routes with static rendering
  {
    type: "static",
    path: "/dynamic-rendering/dynamic-route",
  },
  {
    type: "dynamic",
    path: "/dynamic-rendering/dynamic-route/[name]",
  },
  {
    type: "static",
    path: "/dynamic-rendering/dynamic-route/streaming",
  },
  {
    type: "dynamic",
    path: "/dynamic-rendering/dynamic-route/streaming/[name]",
  },

  {
    type: "static",
    path: "/dynamic-rendering/dynamic-route/streaming/partial",
  },
  {
    type: "dynamic",
    path: "/dynamic-rendering/dynamic-route/streaming/partial/[name]",
  },

  {
    type: "static",
    path: "/_not-found",
  },
] satisfies Array<Route>)
  .sort((a, b) => a.path.localeCompare(b.path))

function getBracket(index: number) {
  if (index === routes.length - 1) return "└"
  if (!index) return "┌"
  return "├"
}

function Routes() {
  return (
    <table className="text-sm font-mono">
      <thead>
        <tr className="underline">
          <th className="pr-3 text-start">
            Route (app)
          </th>
          <th className="pr-3 text-start">
            Revalidate
          </th>
          <th className="text-start">
            Expire
          </th>
        </tr>
      </thead>
      <tbody>
        {routes.map(({ type, path, revalidate, expire }, index) => (
          <tr key={path}>
            <td className="pl-0 pr-3 whitespace-nowrap">
              {getBracket(index)}
              {TYPE_SYMBOL[type]}&nbsp;
              {path}
            </td>
            <td className="pl-0 pr-3 text-end">
              {revalidate}
            </td>
            <td className="px-0 text-end">
              {expire}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Routes
