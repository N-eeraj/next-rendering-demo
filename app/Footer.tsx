const WEBSITE_LINK = "https://n-eeraj.vercel.app/" as const

function Footer() {
  return (
    <footer className="mt-6 text-gray-700 text-sm text-center">
      Built by&nbsp;
      <a
        href={WEBSITE_LINK}
        target="_blank"
        className="hover:text-[#0af] hover:underline duration-200">
        N-eeraj
      </a>
    </footer>
  )
}

export default Footer