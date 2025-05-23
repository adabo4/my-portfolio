import "./Home.css";
import About from "../AboutUs/About";
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Navbar from "../NAVBAR/Navbar";

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
