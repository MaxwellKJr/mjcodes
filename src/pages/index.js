import React from "react"
import { Link, graphql } from "gatsby"
import "materialize-css/dist/css/materialize.min.css"
import Layout from "../layouts/index"
import Seo from "../components/Seo"
import { motion } from "framer-motion"
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
                  <motion.h1
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        scale: 0.8,
                        x: -100,
                        opacity: 0,
                      },
                      visible: {
                        scale: 1,
                        x: 0,
                        opacity: 1,
                        transition: {
                          delay: 1,
                        },
                      },
                    }}
                  >
                    The Struggling Programmer
                  </motion.h1>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        scale: 0.8,
                        x: -100,
                        opacity: 0,
                      },
                      visible: {
                        scale: 1,
                        x: 0,
                        opacity: 1,
                        transition: {
                          delay: 1.2,
                        },
                      },
                    }}
                    className="occupations"
                  >
                    <ul>
                      <li>
                        <a
                          href="http://maxwellkapezi-resume.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="See my resume"
                        >
                          Web Developer 💻{" "}
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://maxwellkapezi.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="The creative side of me"
                        >
                          Writer 📝
                        </a>
                      </li>
                      <li>
                        <a
                          href="http://instragram.com/_maxwellkjr/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Graphic Designer 🖌️
                        </a>
                      </li>
                    </ul>
                  </motion.div>
                  <motion.p
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        scale: 0.8,
                        x: -100,
                        opacity: 0,
                      },
                      visible: {
                        scale: 1,
                        x: 0,
                        opacity: 1,
                        transition: {
                          delay: 1.6,
                        },
                      },
                    }}
                  >
                    A platform to showcase my web development journey and share
                    the few things I know.
                  </motion.p>
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{
                      hidden: {
                        scale: 0,
                        opacity: 0,
                        x: -100,
                      },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        transition: {
                          delay: 2,
                        },
                      },
                    }}
                    className="ctas"
                  >
                    <Link to="/projects" className="btn-primary">
                      View Projects
                    </Link>

                    <Link to="/blog" className="btn-primary">
                      Read Blog
                    </Link>
                  </motion.div>
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
