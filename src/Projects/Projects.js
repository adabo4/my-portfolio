import React from "react";
import "./Projects.css";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import data from "../data";
import { Fade, Slide } from "react-awesome-reveal";
import ProjectDetail from "./ProjectDetail";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

export default function Projects() {
  const [showMainDetail, setShowMainDetail] = useState(null);


  function toggleMainDetail(index) {
    setShowMainDetail(index);
  }

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
              <React.Fragment key={index}>
                <Slide direction={item.turn} cascade>
                  <div className="project-box">
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
              </React.Fragment>
            );
          })}
        </div>
      </section>

      {showMainDetail !== null && (
        <div className="background-overlay"></div>
      )}
    </>
  );
}
