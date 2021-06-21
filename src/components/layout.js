import React from "react"
import { Link } from "gatsby"

import Footer from "./footer"
import Header from './Header'
import SocialNav from './SocialNav'

const Layout = ({ location, title, children }) => {
  return (
       <div className="main-content relative">
        <Header/>
        <main>{children}</main>
        <Footer />
      </div>
  )
}

export default Layout
