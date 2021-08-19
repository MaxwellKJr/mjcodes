import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/index"
import Seo from "../components/Seo"
import Posts from "../components/Posts"

const Blog = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Blog" />
      <Posts />
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
