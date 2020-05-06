import React, { Component} from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout'
import SEO from '../components/seo'


class BlogPost extends Component {
  render() {
    const {
      title,
      content
    } = this.props.data.contentfulBlog
    return (
        <Layout>
        <SEO title={title} />
        <div className="sec">
        <h1>{title}</h1>
        </div>

      </Layout>
    )
  }
}

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
}

export default BlogPost

export const pageQuery = graphql`
  query blogPostQuery($slug: String!){
    contentfulBlog(slug: {eq: $slug}) {
      title
      slug
      
    }
  }
`