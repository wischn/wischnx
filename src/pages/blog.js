import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Link from 'gatsby-link'

const BlogPost = ({node}) => {
  return (
    <li>
      <Link to={node.slug}><h3>{node.title}</h3></Link>
    </li>
  )
}
const BlogPage = ({data}) => (
 <Layout>
 <SEO title="Blog" />
  <ul className='blog-post'>
    {data.allContentfulBlog.edges.map((edge) => <BlogPost node={edge.node} />)}
  </ul>
  </Layout>
)

export default BlogPage

export const pageQuery = graphql`
   query pageQuery {
    allContentfulBlog (
    filter: {
      node_locale: {eq: "en-US"}
    },
    sort:{ fields: [publishDate], order: DESC }
    ) {
        edges {
          node {
            title
            slug
         }
        }
     }
   }
`