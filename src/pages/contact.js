import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts/index"
import Seo from "../components/Seo"
import "./css/contact.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"

const Contact = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Contact" />
      <section id="contact" className="showcase-about">
        <div className="wrapper">
          <div className="contact">
            <div className="row">
              <div className="col s12 m10">
                <div className="contact-form">
                  <h4>Contact Me</h4>
                  <form method="POST" name="inquiries" data-netlify="true">
                    <input
                      type="text"
                      name="username"
                      placeholder="Enter name (Optional)"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      required
                    />
                    <input
                      type="text"
                      name="inquiry"
                      placeholder="Inquiries or Booking"
                      required
                    />
                    <button className="btn-primary" name="submit">
                      Submit{" "}
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="paperplane"
                      />
                    </button>
                  </form>
                  <h5 className="hide-on-large-only">Reach Me</h5>
                  <ul className="social-links hide-on-large-only">
                    <li>
                      <a
                        href="https://web.facebook.com/maxwelljr.kapezi/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Facebook"
                      >
                        <FontAwesomeIcon icon={faFacebook} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/maxwellkjr"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Twitter"
                      >
                        <FontAwesomeIcon icon={faTwitter} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/_maxwellkjr"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Instagram"
                      >
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/MaxwellKJr"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                      >
                        <FontAwesomeIcon icon={faGithub} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact_info%3BZtlTnqqYSwWD90TH%2B2IOEQ%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                      >
                        <FontAwesomeIcon icon={faLinkedin} />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wa.me/265992800255"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="WhatsApp"
                      >
                        <FontAwesomeIcon icon={faWhatsapp} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
