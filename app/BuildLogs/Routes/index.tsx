import { Fragment } from "react"
import { getBuildRoutes } from "./getRoutes"

const TYPE_SYMBOL = {
  static: "○",
  ssg: "●",
  dynamic: "ƒ",
}

function getBracket(index: number, routes: Array<any>) {
  if (index === routes.length - 1) return "└"
  if (!index) return "┌"
  return "├"
}


async function Routes() {
  const routes = await getBuildRoutes()

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
        {routes.map(({ type, path, revalidate, expire, preRenderedPaths }, index) => (
          <Fragment key={path}>
            <tr>
              <td className="pl-0 pr-3 whitespace-nowrap">
                {getBracket(index, routes)}&nbsp;
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
            {type === "ssg" && (
              preRenderedPaths.map((path, subIndex) => (
                <tr key={path}>
                  <td>
                    <span className="inline-block translate-x-[1.75px]">
                      │&nbsp;
                    </span>
                    {getBracket(subIndex || 1, preRenderedPaths)}&nbsp;
                    {path}
                  </td>
                  <td className="pl-0 pr-3 text-end">
                    {revalidate}
                  </td>
                  <td className="px-0 text-end">
                    {expire}
                  </td>
                </tr>
              ))
            )}
          </Fragment>
        ))}
      </tbody>
    </table>
  )
}

export default Routes
