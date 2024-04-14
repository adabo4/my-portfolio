import React from 'react'
import "./Projects.css"
import { AiFillGithub } from "react-icons/ai"
import { BiLink } from "react-icons/bi"
import { Link } from "react-router-dom"
import data from "./data"
import { Fade, Slide } from "react-awesome-reveal";

export default function Projects() {
    return (
        <>
            <section id='projects'>
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
                                    <div className="project-box">
                                        <h3>{item.name}</h3>
                                        <img src={item.img} alt={item.name} className='project-image' />
                                        <div className="project-icons">
                                            {item.gitLink && <Link to={item.gitLink} target='_blank'> <AiFillGithub /></Link>}
                                            {item.gitLink ? <Link to={item.link} target='_blank'><BiLink /></Link> : <Link target='_blank' to={item.link} className='solo'><BiLink /></Link>}
                                        </div>
                                    </div>
                                </Slide>

                            </>
                        )
                    })}


                    {/* <div className='project-box'>
                        <img src="./img/project1.png" alt="" className='project-image' />
                        <div className="project-icons">
                            <Link> <AiFillGithub /></Link>
                            <Link><BiLink className='project-img' /></Link>
                        </div>
                    </div>

                    <div className='project-box'>
                        <img src="./img/project2.png" alt="" />
                        <div className="project-icons">
                            <Link> <AiFillGithub /></Link>
                            <Link><BiLink className='project-img' /></Link>
                        </div>
                    </div>
                    <div className='project-box'>
                        <img src="./img/project3.png" alt="" />
                        <Link> <AiFillGithub /></Link>
                        <Link><BiLink className='project-img' /></Link>
                    </div>
                    <div className='project-box'>
                        <img src="./img/project5.png" alt="" />
                        <Link> <AiFillGithub /></Link>
                        <Link><BiLink className='project-img' /></Link>
                    </div> */}
                </div>

                <div className="project-headline">
                    <Fade> <h1>Collaborations</h1></Fade>
                </div>

                <div class="collab">
                    <Fade delay={500}><div className="collab-box">
                        <img src="./img/project6.png" alt="" className='project-image' />
                        <div className="collab-icons">
                            <Link to="https://www.lekarenvitalis.sk" target='_blank'>
                                <BiLink className='project-img solo' />
                            </Link>
                        </div>
                    </div></Fade>
                </div>
            </section></>
    )
}
