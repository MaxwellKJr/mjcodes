import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/index"
import Seo from "../components/seo"

import Project from "../components/project"
import "./css/projects.css"

const Projects = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Projects" />
      <div className="container center-align">
        <h3 className="center-align">My Work</h3>
        <Project />
      </div>
    </Layout>
  )
}

export default Projects

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
