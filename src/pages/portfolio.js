import React from 'react'
import Layout from '../components/layout'
import Portfolio from '../components/Portfolio'
import SEO from '../components/seo'


const Portfoliopage = () => {
    return (
        <Layout>
        <SEO title="Portfolio" />
            <Portfolio />
        </Layout>
    )
}

export default Portfoliopage