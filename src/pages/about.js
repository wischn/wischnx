import React from 'react'
import Layout from '../components/layout'
import About from '../components/About'
import SEO from '../components/seo'


const Aboutpage = () => {
    return (
        <Layout>
             <SEO title="About"/>
            <About />
        </Layout>
    )
}

export default Aboutpage