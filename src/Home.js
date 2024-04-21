import React, { useState } from 'react'
import "./Home.css"
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import { NavLink } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa';



export default function Home() {

    const scrollTo = (x, y) => {
        window.scrollTo({
            top: x,
            left: y,
            behavior: "smooth",
        });
    }

    function scroolSkills() {

        var scrollSkills = document.getElementById("skills").getBoundingClientRect().top;
        window.scrollTo({ top: scrollSkills, behavior: 'smooth' });

    }
    function scroolProjects() {
        var scrollProjects = document.getElementById("projects").getBoundingClientRect().top;
        window.scrollTo({ top: scrollProjects, behavior: 'smooth' });
    }
    function scroolContact() {
        var scrollContact = document.getElementById("contact").getBoundingClientRect().top;
        window.scrollTo({ top: scrollContact, behavior: 'smooth' });
    }



    const [show, setShow] = useState(false);

    const toggleMenu = () => {
        setShow(!show);
    };



    return (

        <>
            <nav className='navbar'>
                <h2>
                    <GiHamburgerMenu className='hamburger-icon' onClick={toggleMenu} />
                </h2>
                <ul className={`nav-menu ${show ? "show" : "hide"}`}>
                    <NavLink to="#about" onClick={() => { scrollTo(100, 100); toggleMenu() }}><li>About</li></NavLink>
                    <NavLink to="#skills" onClick={() => { scroolSkills(); toggleMenu() }}><li>Skills</li></NavLink>

                    <NavLink to="#projects" onClick={() => { scroolProjects(); toggleMenu() }}><li>Projects</li></NavLink>
                    <NavLink to="#contact" onClick={() => { scroolContact(); toggleMenu() }}><li>Contact</li></NavLink>

                </ul>

                {show && <FaTimes className='nav-close-btn' onClick={toggleMenu}></FaTimes>}
            </nav>

            <About />
            <Skills />
            <Projects />
            <Contact />
        </>


    )
}
