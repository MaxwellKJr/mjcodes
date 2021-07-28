import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
import Layout from "../layouts/index"
import Seo from "../components/seo"
import "./blog-post.css"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        siteUrl={post.frontmatter.slug}
        siteThumbnail={post.frontmatter.featuredImage.publicURL}
      />
      <div className="post-wrapper">
        <article>
          <Image
            src={post.frontmatter.featuredImage.publicURL}
            alt={post.frontmatter.title}
            fluid={post.frontmatter.featuredImage.childImageSharp.fluid}
            title={post.frontmatter.title}
          />
          <header>
            <h3>{post.frontmatter.title}</h3>
            <p>{post.frontmatter.date}</p>
          </header>
          <section dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
        </article>
        <nav className="blog-nav">
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        featuredImage {
          publicURL
          childImageSharp {
            fluid(maxWidth: 980) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
