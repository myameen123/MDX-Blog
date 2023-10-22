import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'

const CategoryTemplate = ({
  data: {
    allMdx: { nodes: posts },
  },
  pageContext: { category },
}) => {
  return (
    <Layout>
      <Hero />
      <Posts posts={posts} title={`category / ${category}`} />
    </Layout>
  )
}

export const query = graphql`
  query GetPostsByCategory($category: String) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
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

export default CategoryTemplate
