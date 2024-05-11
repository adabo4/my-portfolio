import React from "react";
import "./Home.css";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Navbar from "./NAVBAR/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
