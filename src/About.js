import React from "react";
import "./About.css";
import { Fade, AttentionSeeker } from "react-awesome-reveal";

export default function About() {
  return (
    <>
      <div className="wave-container">
        <div className="headline-about-me">
          <Fade direction="up">
            <h1>about me</h1>
          </Fade>
        </div>
        <section id="about">
          <div className="about-me">
            <div className="avatar">
              <img src="./img/avatar1.png" alt="" />
            </div>

            <div className="about-me-text">
              <AttentionSeeker effect="bounce">
                <Fade direction="left">
                  <h2>👋hello there!</h2>
                </Fade>
              </AttentionSeeker>
              <Fade cascade>
                <p>
                  Welcome to my corner of the web! I'm Adriana, a web
                  development enthusiast who's embarked on an exciting journey
                  towards becoming a web developer. I'm passionate about
                  creating websites and web applications that look stunning and
                  function seamlessly.
                </p>

                <p>
                  I taught myself to code using online resources and absolutely
                  fell in love with the creativity and problem solving that is
                  involved in developing new online experiences. Starting off
                  with JavaScript, HTML & CSS and evolving my knowledge base to
                  include JavaScript frameworks and backend programming in the
                  future, as well.
                </p>

                <p>
                  As I continue to learn, grow, and experiment in this
                  ever-evolving field, I'm excited to connect with fellow
                  developers, designers, and collaborators who share my
                  enthusiasm. I love the challenges of learning new design
                  concepts and enabling users with amazing user experiences.
                </p>
              </Fade>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
