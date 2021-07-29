import React from "react"
import { Link, graphql } from "gatsby"
import "materialize-css/dist/css/materialize.min.css"
import Layout from "../layouts/index"
import Seo from "../components/seo"
import "./css/index.css"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Home" />
      <section id="showcase" className="showcase">
        <div className="wrapper">
          <div className="showcase-details">
            <div className="row">
              <div className="col s12 m12 l8">
                <div className="details">
                  <h1>The Struggling Programmer</h1>
                  <p className="occupations">
                    Web Developer 💻 | Writer 📝 | Gamer 🎮
                  </p>
                  <p>
                    A platform to showcase my web development journey and share
                    the few things I know.
                  </p>
                  <div className="ctas">
                    <Link to="/projects" className="btn-primary">
                      View Projects
                    </Link>

                    <Link to="/contact" className="btn-primary">
                      Contact Me
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
