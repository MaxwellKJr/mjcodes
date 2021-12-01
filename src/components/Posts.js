import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { motion } from "framer-motion"
import "./css/posts.css"

const Posts = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }

      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              description
              featuredImage {
                childImageSharp {
                  gatsbyImageData(
                    aspectRatio: 1.5
                    placeholder: BLURRED
                    formats: [AUTO, WEBP, AVIF]
                  )
                }
              }
            }
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.edges

  return (
    <div id="posts">
      <h3 className="center">Posts</h3>
      <div className="posts-wrapper">
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <motion.div
              whileHover={{
                scale: 1.04,
                rotate: -2,
                transition: { duration: 0.1 },
              }}
              className="post"
              key={node.fields.slug}
            >
              <Link to={node.fields.slug}>
                <GatsbyImage
                  image={getImage(node.frontmatter.featuredImage)}
                  alt={node.frontmatter.title}
                />
              </Link>
              <div className="post-details">
                <div className="details">
                  <h3>
                    <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <div>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: node.frontmatter.description || node.excerpt,
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className="tags actions">
                <small>{node.frontmatter.date}</small>
                <br />
                <Link to={node.fields.slug}>Read More</Link>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Posts
