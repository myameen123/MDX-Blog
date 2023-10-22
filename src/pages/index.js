import React from 'react'
import { graphql } from 'gatsby'

import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Posts from '../components/Posts'

const IndexPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => {
  return (
    <Layout>
      <Hero showPerson />
      <Posts title="recently published" posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        frontmatter {
          author
          category
          readTime
          slug
          title
          date(formatString: "MMM Do, YYYY")
          image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        excerpt
      }
    }
  }
`

export default IndexPage
