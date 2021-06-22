import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  return (
    <nav className="relative px-6 py-6 flex justify-between items-center bg-gray-50">
      <a className="text-3xl font-bold leading-none" href="#">
        <StaticImage className="lg:ml-12 h-12" src="../../../static/images/exagonos-log.png" layout="fixed" />
      </a>
      <div className="lg:hidden">
        <button className="hidden navbar-burger flex items-center text-gray-400 p-3">
          <svg className="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Mobile menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li><a className="text-sm text-gray-400 hover:text-gray-500 hidden" href="#">Start</a></li>
      </ul>
    </nav>
  )
}

export default Header
