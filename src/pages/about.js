import React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../layouts/index"
import Seo from "../components/Seo"
import "./css/about.css"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="About" />
      <section id="about" className="showcase-about">
        <div className="wrapper">
          <div className="showcase-details">
            <div className="row">
              <div className="col s12 m12 l6">
                <div className="details">
                  <div className="image">
                    <StaticImage
                      src="../img/showcase.jpg"
                      width={600}
                      className="img"
                      placeholder="blurred"
                      alt="Maxwell Kapezi, Jr."
                      title="Maxwell Kapezi, Jr."
                    />
                  </div>
                </div>
              </div>

              <div className="col s12 m12 l6">
                <div className="about">
                  <h4>About Me</h4>
                  <p>
                    My name is Maxwell Kapezi Jr. I am a Web Developer from the
                    Warm Heart of Africa, Malawi, currently focusing on{" "}
                    <a
                      href="https://reactjs.org"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      React.js
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://laravel.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Laravel
                    </a>{" "}
                    frameworks. I am also a fourth year Bachelor of Education (BEd)
                    in Computer Science student at the{" "}
                    <a
                      href="https://unima.ac.mw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Univeristy of Malawi
                    </a>
                    {"."}
                  </p>
                  <p>
                    I started learning how to code in 2017 because I wanted to
                    make my own video game (yes I wanted to make video games)
                    but that dream died quick. For the whole story read my post{" "}
                    <Link to="/hello-world">Hello World</Link>
                    {"."}
                  </p>
                  <p>
                    Apart from coding I also enjoy writing short stories, poetry
                    &amp; video games. I mean why not?
                  </p>
                  <Link to="/skills" className="btn-primary">
                    My Skills →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
