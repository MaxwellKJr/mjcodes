import React from "react"
import "./css/project.css"
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const Project = () => {
  const state = [
    {
      pID: 1,
      name: "Developer's Blog",
      imageURL: "https://www.udrop.com/file/9aqZ/mjcodes.png",
      projectURL: "https://mjcodes.netlify.app",
      githubURL: "https://github.com/MaxwellKJr/developers-starter-blog",
      projectDescription:
        "This is the open source version of this website. Well I decided to share it because I want to see what it is capable of becoming if other people work on it!💯",
      tags: ["React", "Gatsby", "Markdown"],
    },
    {
      pID: 2,
      name: "Flossy's Clothing",
      imageURL: "https://www.udrop.com/file/4Yd9/flossysclothing.png",
      projectURL: "https://flossysclothing.netlify.app",
      githubURL: "https://github.com/MaxwellKJr/flossys-clothing",
      projectDescription:
        "This started off as a class project in my second year Web Development class. Despite being limited with what we could use, I managed to make it appealing.",
      tags: ["React", "JavaScript", "CSS"],
    },
    {
      pID: 3,
      name: "SpeedLight Tech",
      imageURL: "https://www.udrop.com/file/4Ydb/slt.png",
      projectURL: "https://speedlighttech.netlify.app",
      githubURL: "",
      projectDescription:
        "A simple brochure landing page for something that I co-founded. SpeedLight Tech. All I can say is I spent a lot of time on this and it was worth it.",
      tags: ["HTML", "CSS", "JavaScript", "Materialize"],
    },

    {
      pID: 4,
      name: "Gamer Girl 44",
      imageURL: "https://www.udrop.com/file/4Ydc/speedlight.png",
      projectURL: "https://gamergirl44.netlify.app",
      githubURL: "",
      projectDescription:
        "I made this project as I was learning React, GatsbyJS and Materialize. On top of that, I managed to learn yaml so that I could host the post using the NetlifyCMS.",
      tags: ["React", "GatsbyJS", "Blog"],
    },
    {
      pID: 5,
      name: "Toxic Arts",
      imageURL: "https://www.udrop.com/file/4Yda/toxicart.png",
      projectURL: "https://toxicarts.netlify.app",
      githubURL: "https://github.com/MaxwellKJr/toxicarts",
      projectDescription:
        "This was what made me improve at CSS Grid and it is the first project I ever made for a friend. It made me realize I have nothing to lose even if I make something for free.",
      tags: ["HTML", "CSS"],
    },
    {
      pID: 6,
      name: "#BecomingCrimson",
      imageURL: "https://www.udrop.com/file/4Ydd/crimsons.png",
      projectURL: "becomingcrimson.netlify.app",
      githubURL: "https://github.com/MaxwellKJr/becoming-crimson",
      projectDescription:
        "My first deployed project. I was still rusty when I was making this but I had to get out of my shell one or the other. This was for my brother David, a few weeks before his wedding day.",
      tags: ["HTML", "CSS"],
    },
  ]

  // const imageLinks = [
  //   "https://www.udrop.com/file/4Yd9/flossysclothing.png",
  //   "https://www.udrop.com/file/4Yda/toxicart.png",
  //   "https://www.udrop.com/file/4Ydb/slt.png",
  //   "https://www.udrop.com/file/4Ydc/speedlight.png",
  //   "https://www.udrop.com/file/4Ydd/crimsons.png",
  // ]

  return (
    <div className="projects">
      {state.map(project => {
        return (
          <div className="project" key={project.pID} title={project.name}>
            <div className="project-details">
              <h5>
                <a
                  href={project.projectURL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="ext-link-icon"
                  />
                </a>
              </h5>
              <p className="project-desc">{project.projectDescription}</p>
              <a
                href={project.githubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Github{" "}
                <FontAwesomeIcon icon={faGithub} className="ext-link-icon" />{" "}
              </a>
              <ul className="tags">
                {project.tags.map(tag => (
                  <li className="tag">{tag}</li>
                ))}
              </ul>
            </div>
            <a
              href={project.projectURL}
              target="_blank"
              rel="noopener noreferrer"
              className="img-link"
            >
              <img
                src={project.imageURL}
                alt={project.name}
                className="project-img"
              />
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default Project
