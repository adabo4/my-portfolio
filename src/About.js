import React from 'react'
import "./About.css"
import { Fade, AttentionSeeker } from "react-awesome-reveal";

export default function About() {
    return (
        <>

            <div className="wave-container">

                <section id='about'>

                    <div className='headline'>
                        <Fade direction='up'>
                            <h1>about me</h1>
                        </Fade>
                    </div>


                    <div className="about-me">

                        <div className='avatar'>
                            <img src="./img/avatar1.png" alt="" />
                        </div>

                        <div className='about-me-text' >
                            <AttentionSeeker effect='bounce'><Fade direction='left'><h2>👋hello there!</h2></Fade></AttentionSeeker>
                            <Fade cascade>
                                <p>Welcome to my corner of the web! I'm Adriana, a web development enthusiast
                                    who's embarked on an exciting journey towards becoming a web developer. I'm passionate about creating websites and web applications
                                    that not only look stunning but function seamlessly.</p>

                                <p>
                                    {/* Currently, I find myself at the beginner stage of my web development career.
                                However, what sets me apart is my ability to learn fast and adapt quickly.
                                I thrive on challenges and view every project as an opportunity to expand my skill set.
                                I'm actively exploring various tools and techniques within the world of web development,
                                soaking up knowledge like a sponge to continually enhance my capabilities.
                                I'm constantly inquisitive, eager to explore how things work under the hood
                                and discover new ways to bring ideas to life in the digital realm. */}
                                    I taught myself to code using online resources and absolutely fell in love with the creativity and problem
                                    solving that is involved in developing and engineering innovative new online experiences.
                                    Starting off with JavaScript, HTML & CSS and evolving my knowledge base to include JavaScript frameworks,
                                    backend programming, design and much more.
                                </p>

                                <p>
                                    {/* As I continue to learn, grow, and experiment in this ever-evolving field,
                                I'm excited to connect with fellow developers, designers, and collaborators
                                who share my enthusiasm. Together, we can push the boundaries of web
                                development and create remarkable digital experiences. */}
                                    Communication is key and it's paramount value of mine. I believe in transparency and constructive Communication
                                    above all else. This helps me develop deep relationships and ensure my effectivness and productivity in any work space
                                    with any team.
                                </p>
                                <p>
                                    {/* Thank you for visiting my portfolio website, and I invite you to explore my projects.
                                If you're interested in collaborating, sharing insights, or simply want to connect,
                                please don't hesitate to reach out! */}
                                    Carefully crafting and designing amazing user experiences allows me to express and experiment with every morsel of
                                    creativity I have. I love the challenges of learning new design concepts and enabling users with amazind user experiences.
                                </p>
                            </Fade>
                        </div>

                    </div>


                </section>
            </div>

        </>
    )
}
