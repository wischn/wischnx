import React from "react"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/About"
import Contact from "../components/Contact"
import { useStaticQuery, graphql } from 'gatsby'
import logo from "../assets/images/svg/logo_gr.svg";
import Img from 'gatsby-image'
// import { Link } from "gatsby"
// import scrollTo from 'gatsby-plugin-smoothscroll'

const Indexpage = () => {
  const data = useStaticQuery(graphql`
    query {
    file(relativePath: { eq: "tree.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
  `) 
  return (
  <>
  <Hero />
  <Layout>
    <SEO title="Home" />
      <section className="sec">
      {/* <Img className="imgmain" fluid={data.file.childImageSharp.fluid} alt="Tree" /> */}
        <div className="welcome">
          <h1 className="h1">willkommen bei <img className="xlogo" src={logo} alt="Wischn Logo"/></h1>
         {/*} <p className="p">Warum muss Digitalisierung was schlechtes sein? Ist es nicht ein schöner Gedanke, dass uns Arbeit abgenommen wird und wir uns den Dingen widmen können, die uns wirklich wichtig sind?</p> */}
        </div>
        <p>Hallo, hier entsteht gerade was. Schau doch bald nochmal vorbei. <br/>
          Meld dich gerne schon mal in der Zwischenzeit: <br/><br/> <a href="mailto:annika@wischn.com">annika[@]wischn.com</a>
        </p>
      </section>
     {/* <section className="sec dark"><About /></section>
      <section className="sec"><Contact /></section> */}
  </Layout>
  </>
)
}

 export default Indexpage

