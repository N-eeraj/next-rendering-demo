import Image from "next/image"

const REPO_LINK = "https://github.com/N-eeraj/next-rendering-demo" as const

function Header() {
  return (
    <header className="relative space-y-4 mb-8">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900">
        Next Rendering Demo
      </h1>

      <p className="text-gray-700">
        Next.js offers multiple page rendering strategies, each optimized for different use cases. 
        This demo showcases how pages can be rendered, when data is fetched, and what the resulting 
        HTML looks like for users. Explore each page to see the differences in static, server-side, 
        incremental, and client-driven rendering.
      </p>

      <a
        href={REPO_LINK}
        target="_blank"
        className="group fixed md:absolute top-0 right-4 flex items-center h-12 hover:max-md:h-14 md:h-fit bg-black hover:bg-zinc-800 p-2 md:p-1.5 rounded-b-sm md:rounded-t-sm duration-200">
        <Image
          src="/github.svg"
          alt="github-repo"
          height={24}
          width={24}
          className="invert group-hover:md:scale-95 duration-200" />
      </a>
    </header>
  )
}

export default Header
