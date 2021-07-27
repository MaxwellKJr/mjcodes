import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../layouts/index"
import Seo from "../components/seo"
import "./css/about.css"
import "./css/skills.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJs,
  faPhp,
  faPython,
  faReact,
  faWordpress,
} from "@fortawesome/free-brands-svg-icons"
import {
  faDatabase,
  faPlusCircle,
  faShareAltSquare,
} from "@fortawesome/free-solid-svg-icons"

const Skills = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Skills" />
      <section id="about" className="showcase-about">
        <div className="wrapper">
          <div className="showcase-details">
            <div className="row">
              <div className="col s12 m12 l6">
                <div className="about">
                  <h4>My Skills</h4>
                  <p>Languages/Technologies I am comfortable with</p>
                  <div className="row">
                    <div className="col s6">
                      <div className="card-dark">
                        <FontAwesomeIcon
                          icon={faHtml5}
                          className="fa-2x skill-icon"
                        />
                        <span className="skill">HTML5</span>
                      </div>
                    </div>
                    <div className="col s6">
                      <div className="card-dark">
                        <FontAwesomeIcon
                          icon={faCss3}
                          className="fa-2x skill-icon"
                        />
                        <span className="skill">CSS3</span>
                      </div>
                    </div>
                    <div className="col s6">
                      <div className="card-dark">
                        <FontAwesomeIcon
                          icon={faJs}
                          className="fa-2x skill-icon"
                        />
                        <span className="skill">JavaScript</span>
                      </div>
                    </div>
                    <div className="col s6">
                      <div className="card-dark">
                        <FontAwesomeIcon
                          icon={faReact}
                          className="fa-2x skill-icon"
                        />
                        <span className="skill">React.js</span>
                      </div>
                    </div>
                    <div className="col s6">
                      <div className="card-dark">
                        <FontAwesomeIcon
                          icon={faJava}
                          className="fa-2x skill-icon"
                        />
                        <span className="skill">Java</span>
                      </div>
                    </div>
                    <div className="col s6">
                      <div className="card-dark">
                        <FontAwesomeIcon
                          icon={faPython}
                          className="fa-2x skill-icon"
                        />
                        <span className="skill">Python</span>
                      </div>
                    </div>
                    <div className="col s6">
                      <div className="card-dark">
                        <FontAwesomeIcon
                          icon={faDatabase}
                          className="fa-2x skill-icon"
                        />
                        <span className="skill">SQL</span>
                      </div>
                    </div>
                    <div className="col s6">
                      <div className="card-dark">
                        <FontAwesomeIcon
                          icon={faShareAltSquare}
                          className="fa-2x skill-icon"
                        />
                        <span className="skill">GraphQL</span>
                      </div>
                    </div>
                    <div className="col s6">
                      <div className="card-dark">
                        <FontAwesomeIcon
                          icon={faGitAlt}
                          className="fa-2x skill-icon"
                        />
                        <span className="skill">Git</span>
                      </div>
                    </div>
                    <div className="col s6">
                      <div className="card-dark">
                        <FontAwesomeIcon
                          icon={faWordpress}
                          className="fa-2x skill-icon"
                        />
                        <span className="skill">WordPress</span>
                      </div>
                    </div>
                  </div>
                  <p>Languages I only know the basics</p>
                  <div className="row">
                    <div className="col s6">
                      <div className="card-dark">
                        <FontAwesomeIcon
                          icon={faPhp}
                          className="fa-2x skill-icon"
                        />
                        <span className="skill">PHP</span>
                      </div>
                    </div>
                    <div className="col s6">
                      <div className="card-dark">
                        <FontAwesomeIcon
                          icon={faPlusCircle}
                          className="fa-2x skill-icon"
                        />
                        <span className="skill">MatLab</span>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="/about" className="btn-primary">
                  ← About me
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Skills

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
