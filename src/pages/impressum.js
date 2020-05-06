import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Impressum = () => (
  <Layout>
    <SEO title="Impressum" />
    <section className="sec">
         <h1 className="h1">Impressum</h1>
         <p className="p">Angaben gemäß § 5 TMG: <br/> <br/>Annika Wischnewsky 
         <br/> Salomonstr. 18B <br/> 04103 Leipzig</p>  
         <p className="p">---</p>
         <a href="mailto:annika@wischn.com" className="p">mail: annika[@]wischn.com</a>
         <p className="p">phone: +49 151 46 114 158</p>
         <p className="p">---</p>
         <p className="p">Verantwortlich für den Inhalt gemäß §55 Abs. 2 RStV: <br/> Annika Wischnewsky</p>
  </section>
  </Layout>
)

export default Impressum
