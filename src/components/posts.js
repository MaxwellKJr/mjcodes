import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
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
                publicURL
                childImageSharp {
                  fluid(maxWidth: 3000, maxHeight: 1800) {
                    ...GatsbyImageSharpFluid
                  }
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
            <div className="post" key={node.fields.slug}>
              <Link to={node.fields.slug}>
                <Img
                  src={node.frontmatter.featuredImage}
                  alt={title}
                  sizes={node.frontmatter.featuredImage.childImageSharp.fluid}
                  className="post-img responsive-img"
                  title={title}
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Posts
