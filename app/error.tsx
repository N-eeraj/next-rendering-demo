"use client"

import Title from "@/components/Title"
import Link from "next/link"

const refresh = () => window.location.reload()

function ErrorPage() {
  return (
    <main className="main-container flex flex-col items-center justify-center min-h-[70vh] text-center">
      <Title
        heading="500 - Something Went Wrong"
        tagline="Oops! Something went wrong on our end"
      />

      <p className="mb-8 text-gray-700 max-w-lg">
        An unexpected error occurred while loading this page. Try refreshing the page or go back home.
      </p>

      <div className="flex items-center gap-x-3">
        <Link
          href="/"
          className="block w-fit">
          <button className="min-w-20 px-3 py-2 bg-gray-900 hover:bg-gray-700 text-white rounded-xs cursor-pointer duration-200">
            Back to Home
          </button>
        </Link>
        <button
          className="min-w-20 px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray--900 rounded-xs cursor-pointer duration-200"
          onClick={refresh}>
          Refresh Page
        </button>
      </div>
    </main>
  )
}

export default ErrorPage
