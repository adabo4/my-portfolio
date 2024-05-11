import React from "react";
import "./Projects.css";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import data from "./data";
import { Fade, Slide } from "react-awesome-reveal";
import ProjectDetail from "./ProjectDetail";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function Projects() {
  const [showMainDetail, setShowMainDetail] = useState(null);
  const [showCollabDetail, setShowCollabDetail] = useState(null);

  function toggleMainDetail(index) {
    setShowMainDetail(index);
  }

  function toggleCollabDetail(index) {
    setShowCollabDetail(index);
  }

  const collab_data = [
    {
      name: "VITALIS website",
      img: "./img/lekaren.png",
      link: "https://www.lekarenvitalis.sk",
      gitLink: "https://github.com/adabo4/vitalis-web.git",
      skills: {
        react: "React.js",
      },
      info: "info",
      text: `I participated in designing and developing our pharmacy website. It is a single page application where I learnt the basics 
            of how React works. I helped to add features using React libraries such as 'Lightgallery.js' for the Leaflet Gallery component; 'react-slick' for the Logoslider and 'React-GA' for Google Analytics.
            I studied the documentation for these libraries and worked to adapt them to best fit the needs of our website. This involved experimenting with various settings and configurations to ensure they integrated seamlessly with our design. 
            I also added data validation for email communication to ensure the accuracy and security of our communication channels.
            Now I maintain the website and keep the content up do date.`,
      white: "true",
    },
  ];

  return (
    <>
      <section id="projects">
        <div className="project-headline">
          <Fade>
            <h1>My projects</h1>
          </Fade>
        </div>
        <div className="projects">
          {data.map((item, index) => {
            return (
              <>
                <Slide direction={item.turn} cascade>
                  <div key={index} className="project-box">
                    <h3>{item.name}</h3>
                    <img
                      src={item.img}
                      alt={item.name}
                      className="project-image"
                    />
                    <div className="project-icons">
                      <HashLink
                        smooth
                        to="/#project"
                        className={
                          item.white
                            ? "project-icon "
                            : "project-icon blue-icon"
                        }
                        onClick={() => toggleMainDetail(index)}
                      >
                        <FaInfoCircle />
                      </HashLink>
                      {item.gitLink && (
                        <Link
                          to={item.gitLink}
                          className={
                            item.white
                              ? "project-icon"
                              : "project-icon blue-icon"
                          }
                          target="_blank"
                        >
                          {" "}
                          <AiFillGithub />
                        </Link>
                      )}
                      {item.gitLink ? (
                        <Link
                          to={item.link}
                          className={
                            item.white
                              ? "project-icon"
                              : "project-icon blue-icon"
                          }
                          target="_blank"
                        >
                          <BiLink />
                        </Link>
                      ) : (
                        <Link target="_blank" to={item.link} className="solo">
                          <BiLink />
                        </Link>
                      )}
                    </div>
                  </div>
                </Slide>
                {showMainDetail !== null && (
                  <ProjectDetail
                    toggleMainDetail={() => toggleMainDetail(null)}
                    item={data[showMainDetail]}
                  />
                )}
              </>
            );
          })}
        </div>

        <div className="project-headline">
          <Fade>
            {" "}
            <h1>Collaborations</h1>
          </Fade>
        </div>

        <div className="collab">
          {collab_data.map((item, index) => {
            return (
              <>
                <Fade delay={500}>
                  <div key={index} className="collab-box">
                    <img
                      src={item.img}
                      alt="Vitalis project"
                      className="project-image"
                    />
                    <div className="collab-icons">
                      <HashLink
                        smooth
                        to="/#project"
                        onClick={() => toggleCollabDetail(index)}
                      >
                        <FaInfoCircle />
                      </HashLink>
                      <Link to={item.gitLink} target="_blank">
                        <AiFillGithub />
                      </Link>
                      <Link to={item.link} target="_blank">
                        <BiLink className="project-img" />
                      </Link>
                    </div>
                  </div>
                </Fade>
                {showCollabDetail === index && (
                  <ProjectDetail
                    toggleCollabDetail={() => toggleCollabDetail(null)}
                    item={item}
                  />
                )}
              </>
            );
          })}
        </div>
      </section>

      {(showMainDetail !== null || showCollabDetail !== null) && (
        <div className="background-overlay"></div>
      )}
    </>
  );
}
