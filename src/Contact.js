
import "./Contact.css"
import { AiOutlineMail, AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import { Fade } from "react-awesome-reveal";
import Form from './Form'
import { Link } from "react-router-dom"

export default function Contact() {
    return (
        <>
            <section id="contact">
                <div className="top-background"></div>
                <Fade>
                    <div className='headline'>
                        <h1>contact </h1>
                    </div>
                </Fade>
                <Fade>
                    <div className="icons">
                        <Link to="mailto:ada.bohunicka@gmail.com">
                            <AiOutlineMail className='cont' />
                        </Link>
                        <Link to="https://github.com/adabo4/">
                            <AiFillGithub className='cont' />
                        </Link>
                        <Link to="https://www.linkedin.com/in/adriana-bohunicka/">
                            <AiFillLinkedin className='cont' />
                        </Link>
                    </div>
                </Fade>
                <div className="contact">
                    <Form />
                </div>
                <div className="bottom-background"></div>
            </section >
        </>
    )
}
