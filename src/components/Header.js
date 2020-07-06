import React from 'react'
import 'twin.macro'

export default () => {
  return (
    <nav tw="flex w-full items-center fixed justify-between flex-wrap bg-white p-6 border-b z-10">
      <div tw="flex items-center flex-shrink-0 text-white mr-6">
        <a href="/">
          <span tw="font-semibold text-lg md:text-xl text-black tracking-tight">
            Susan Mittman Real Estate
          </span>
        </a>
      </div>
      <div tw="block lg:hidden">
        <button tw="flex items-center px-3 py-2 border rounded text-black border-teal-400 hover:text-black hover:border-white">
          <svg
            tw="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div tw="hidden w-full md:block flex-grow lg:flex lg:items-center lg:w-auto">
        <div tw="text-sm lg:flex-grow text-right">
          <a
            href="#work"
            tw="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-400 mr-4"
          >
            Work
          </a>
          <a
            href="#about"
            tw="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-400 mr-4"
          >
            About
          </a>
          <a
            href="#testimonials"
            tw="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-400 mr-4"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            tw="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-400 mr-4"
          >
            Contact
          </a>
          <a
            href="https://blog.michaelbrooks.dev"
            tw="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-400 mr-4 lg:mr-0"
          >
            Blog
          </a>
        </div>
      </div>
    </nav>
  )
}
