/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import '../assets/scss/main.scss'
import Header from "./Header"
import Footer from "./Footer"

const Layout = (props) => {
   return (
    <>
    <Header />
      <section id="main">{props.children}</section>
    <Footer />
    </>
   )
}

export default Layout
