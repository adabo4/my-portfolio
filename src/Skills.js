import React from 'react';
import { useRef, useState, useEffect } from 'react';
import { AiFillHtml5 } from "react-icons/ai";
import { ImCss3 } from "react-icons/im";
import { TbBrandJavascript, TbSql, TbBrandNodejs } from "react-icons/tb";
import { FaReact } from "react-icons/fa6";
import { SiPostman } from "react-icons/si";
import { BsBootstrapFill } from "react-icons/bs";
import "./Icons.css"
import { motion } from "framer-motion"
// import Fade from 'react-reveal/Fade';
import { Fade } from "react-awesome-reveal";
import 'animate.css';


export default function Skills() {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const ref = useRef(null);

    const skillsData = [
        {
            icon: <AiFillHtml5 className='icon' />,
            label: 'HTML',
            rotate: 5,
            turn: 'left'
        },
        {
            icon: <ImCss3 className='icon' />,
            label: 'CSS',
            rotate: -5,
            turn: 'left'
        },
        {
            icon: <TbBrandJavascript className='icon' />,
            label: 'JavaScript',
            rotate: 5,
            turn: 'left'
        },
        {
            icon: <FaReact className='icon' />,
            label: 'React.js',
            rotate: -5,
            turn: 'left'
        },
        {
            icon: <TbBrandNodejs className='icon' />,
            label: 'NodeJs',
            rotate: 5,
            turn: 'right'
        },
        {
            icon: <SiPostman className='icon' />,
            label: 'Postman',
            rotate: -5,
            turn: 'right'
        },
        {
            icon: <TbSql className='icon' />,
            label: 'SQL',
            rotate: 5,
            turn: 'right'
        },
        {
            icon: <BsBootstrapFill className='icon' />,
            label: 'Bootstrap',
            rotate: -5,
            turn: 'right'
        }
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsIntersecting(entry.isIntersecting);
        });
        console.log(isIntersecting);
        observer.observe(ref.current);
        return () => observer.disconnect();
    }, [isIntersecting]);

    useEffect(() => {
        if (isIntersecting) {
            ref.current.querySelectorAll(".hexagon").forEach((el) => {
                el.classList.add("slide-in");
            });
        } else {
            ref.current.querySelectorAll(".hexagon").forEach((el) => {
                el.classList.remove("slide-in");
            });
        }
    }, [isIntersecting]);



    return (
        <>
            <section id='skills'>
                <div className="headline">
                    <Fade direction='bottom' >
                        <h1>Skills</h1>
                    </Fade>
                </div>

                <div className="hexagon-container" ref={ref}>
                    {skillsData.map((skill, index) => (
                        <motion.div
                            className={`hex`}
                            key={index}
                            whileHover={{ x: [0, -5, 5, -5, 0], transition: { duration: 0.5 }, rotate: skill.rotate }}
                        >
                            <div className={`hexagon ${skill.turn}`}>
                                {skill.icon}
                                <p>{skill.label}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>
        </>
    )
}
