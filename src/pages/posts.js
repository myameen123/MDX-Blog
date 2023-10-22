import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Posts from '../components/Posts'

const PostsPage = ({
  data: {
    allMdx: { nodes: posts },
  },
}) => {
  return (
    <Layout>
      <Hero />
      <Posts title="all posts" posts={posts} />
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
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

export default PostsPage
