export interface Pokemon {
  name: string
  sprites: {
    other: {
      home: {
        front_default: string
      }
    }
  }
}

export interface StaticRoute {
  type: "static"
  path: string
  revalidate?: string
  expire?: string
}

export interface SSGRoute {
  type: "ssg"
  path: string
  preRenderedPaths: Array<string>
  generateStaticParamsFunction: Function
  revalidate?: string
  expire?: string
}

export interface DynamicRoute {
  type: "dynamic"
  path: string
}

export type Route = StaticRoute
  | DynamicRoute
  | SSGRoute

export type GeneratedRoute = [
  SSGRoute["path"],
  Array<Record<string, string>>
]
