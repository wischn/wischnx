import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/About"
import Contact from "../components/Contact"
import Image from "../components/image"
// import { Link } from "gatsby"
// import Image from "../components/image"
// import scrollTo from 'gatsby-plugin-smoothscroll'

const IndexPage = () => (
  <>
  <Hero />
  <Layout>
    <SEO title="Home" />
      <section className="sec">
        <div className="imgs"><Image src="tree.jpg"/></div>
        <div className="welcome">
          <h1 className="h1">willkommen bei wischn.</h1>
          <p className="p">Warum muss Digitalisierung was schlechtes sein? Ist es nicht ein schöner Gedanke, dass uns Arbeit abgenommen wird und wir uns den Dingen widmen können, die uns wirklich wichtig sind?</p>
        </div>
      </section>
      <section className="sec dark"><About /></section>
      <section className="sec"><Contact /></section>

  </Layout>
  </>
)

export default IndexPage
