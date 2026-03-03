import React from "react";
import { useRef, useState, useEffect } from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { ImCss3 } from "react-icons/im";
import { TbBrandJavascript, TbSql } from "react-icons/tb";
import { FaGitAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { DiNginx } from "react-icons/di";
import "./Icons.css";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import SkillLevel from "./SkillLevel";
import "animate.css";

export default function Skills() {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);

  const skillsData = [
    {
      icon: <AiFillHtml5 className="icon" />,
      label: "HTML5",
      rotate: 5,
      turn: "left",
      percentage: 3,
    },
    {
      icon: <ImCss3 className="icon" />,
      label: "CSS3",
      rotate: -5,
      turn: "left",
      percentage: 3,
    },
    {
      icon: <TbBrandJavascript className="icon" />,
      label: "JavaScript",
      rotate: 5,
      turn: "left",
      percentage: 3,
    },
    {
      icon: <FaReact className="icon" />,
      label: "ReactJS",
      rotate: -5,
      turn: "left",
      percentage: 2,
    },
    {
      icon: <SiTypescript className="icon" />,
      label: "TypeScript",
      rotate: 5,
      turn: "right",
      percentage: 2,
    },
    {
      icon: <SiExpress className="icon" />,
      label: "ExpressJS",
      rotate: -5,
      turn: "right",
      percentage: 1,
    },
    {
      icon: <TbBrandNextjs className="icon" />,
      label: "NextJS",
      rotate: 5,
      turn: "right",
      percentage: 1,
    },

    {
      icon: <SiMongodb className="icon" />,
      label: "MongoDB",
      rotate: 5,
      turn: "right",
      percentage: 1,
    },
    {
      icon: <TbSql className="icon" />,
      label: "PostgreSQL",
      rotate: 5,
      turn: "right",
      percentage: 1,
    },
    {
      icon: <FaGitAlt className="icon" />,
      label: "Git",
      rotate: -5,
      turn: "right",
      percentage: 1,
    },
    {
      icon: <SiTailwindcss className="icon" />,
      label: "TailwindCSS",
      rotate: 5,
      turn: "left",
      percentage: 1,
    },
    {
      icon: <DiNginx className="icon" />,
      label: "Nginx",
      rotate: -5,
      turn: "left",
      percentage: 1,
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    });

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
      <section id="skills">
        <div className="headline">
          <Fade direction="bottom">
            <h1>Skills</h1>
          </Fade>
        </div>

        <div className="hexagon-container" ref={ref}>
          {skillsData.map((skill, index) => (
            <div className="skill-info" key={`skill-${index}`}>
              <div className="skill">
                <SkillLevel percentage={skill.percentage} skillId={index}></SkillLevel>
              </div>
              <motion.div
                className={`hex`}
                key={`motion-${index}`}
                whileHover={{
                  x: [0, -5, 5, -5, 0],
                  transition: { duration: 0.5 },
                  rotate: skill.rotate,
                }}
              >
                <div className={`hexagon ${skill.turn}`}>
                  {skill.icon}
                  <p>{skill.label}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
