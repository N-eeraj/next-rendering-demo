import { getStaticParams } from "@/app/ssg/dynamic-route/getStaticParams"
import type {
  Route,
  GeneratedRoute,
} from "@/types"

const ROUTES = ([
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
    preRenderedPaths: [] as Array<string>,
    generateStaticParamsFunction: () => getStaticParams(),
  },
  {
    type: "static",
    path: "/ssg/dynamic-route/isr",
  },
  {
    type: "ssg",
    path: "/ssg/dynamic-route/isr/[name]",
    preRenderedPaths: [] as Array<string>,
    generateStaticParamsFunction: () => getStaticParams(151),
    revalidate: "1m",
    expire: "1y",
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

const ssgRoutesPromise = Promise.all(
  ROUTES.reduce((
    ssgPaths: Array<Promise<GeneratedRoute>>,
    { type, path, generateStaticParamsFunction }
  ) => {
    if (type === "ssg") {
      const generatedPathsMap: Promise<GeneratedRoute> = generateStaticParamsFunction()
        .then((params: Array<Record<string, string>>) => ([
          path,
          params
        ]))
      ssgPaths.push(generatedPathsMap)
    }
    return ssgPaths
  }, [])
)

function replaceParams(path: string, params: GeneratedRoute["1"][number]) {
  return path.replace(/\[([^\]]+)\]/g, (_, key) => {
    return params[key] ?? `[${key}]`
  })
}

export async function getBuildRoutes() {
  const generatedRouteParams = Object.fromEntries(await ssgRoutesPromise)
  ROUTES.forEach(({ type, path }, index) => {
    if (type === "ssg") {
      const generatedPaths = generatedRouteParams[path].map(params => replaceParams(path, params))
      ROUTES[index].preRenderedPaths = generatedPaths
    }
  })
  return ROUTES
}
