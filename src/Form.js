import React, { useState, useRef } from 'react'
import "./Form.css"
import { Fade } from "react-awesome-reveal"
import emailjs from '@emailjs/browser';

export default function Form() {
    const form = useRef();

    const [values, setValues] = useState({
        name: "",
        email: "",
        number: "",
        text: ""
    })

    const [sent, setSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    const [errors, setErrors] = useState({
        name: '',
        email: '',
        text: '',
    });





    const handleChange = (e) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })

        // if (value.length < 2) {
        //     setInputError('You must include at least 2 characters');
        // } else {
        //     setInputError('');
        // }
    };


    const formSubmit = async (e) => {


        e.preventDefault()

        const resetForm = () => {

            setValues({
                name: "",
                email: "",
                number: "",
                text: ""
            });

            setTimeout(() => {
                setSent(false);
                setErrorMessage('');
            }, 3000);
        }


        if (
            values.name.length >= 2 &&
            values.email.includes("@") &&
            values.text.trim() !== ""
        ) {

            setIsLoading(true)
            // const response = await axios.post("https://myportfolio-api-alpha.vercel.app/contact-me", {
            //     ...values
            // })

            const templateParams = {
                from_name: values.name,
                to_name: 'Adriana',
                subject: `Message from ${values.name}`,
                message: values.text,
                user_email: values.email,
                contact_number: values.number
            };

            emailjs
                .send('service_i3j4zf8', 'template_9xhxraj', templateParams, '8e0x-teEx9zwXPXt1')
                .then(
                    () => {
                        setSent(true)
                        console.log("successful")
                        resetForm();

                    },
                    (error) => {
                        console.error("error" + error)
                        setErrorMessage('Message was not sent.');
                        resetForm();
                    },
                )
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            setErrorMessage("Please fill all the fields with *")
        }


    }


    return (
        <>

            <form ref={form} onSubmit={formSubmit}>
                <Fade>
                    <label className='label'>Your name<span>*</span>
                        <input type="text" className='input' name='name' value={values.name} onChange={handleChange}

                            onBlur={() => {
                                if (values.name.length < 2) {
                                    setErrors({
                                        ...errors,
                                        name: 'Please include more than 1 character.',
                                    });
                                } else {
                                    setErrors({
                                        ...errors,
                                        name: '',
                                    });
                                }
                            }}

                        />
                        {errors.name && <p className="error">{errors.name}</p>}
                    </label>
                </Fade>
                <Fade>
                    <label className='label'>Your email<span>*</span>
                        <input type="email" className='input' name='email' value={values.email} onChange={handleChange}

                            onBlur={() => {
                                if (!values.email.includes("@" && ".")) {
                                    setErrors({
                                        ...errors,
                                        email: 'Please include valid email.',
                                    });
                                } else {
                                    setErrors({
                                        ...errors,
                                        email: '',
                                    });
                                }
                            }}
                        />
                        {errors.email && <p className="error">{errors.email}</p>}
                    </label>
                </Fade>

                <Fade>

                    <label className='label'>Your phone number
                        <input type="text" className='input' name='number' value={values.number} onChange={handleChange} />
                    </label>
                </Fade>
                <Fade>
                    <label className='label'>Enter your text<span>*</span>
                        <textarea className="input textarea" name="text" value={values.text} id="" cols="30" rows="10" onChange={handleChange}


                            onBlur={() => {
                                if (values.text.trim() === "") {
                                    setErrors({
                                        ...errors,
                                        text: 'Please fill this field with your text.',
                                    });
                                } else {
                                    setErrors({
                                        ...errors,
                                        text: '',
                                    });
                                }
                            }}

                        >
                        </textarea>
                        {errors.text && <p className="error">{errors.text}</p>}
                    </label>
                </Fade>
                <button type="submit" className="submit-btn" disabled={isLoading}>
                    {isLoading ? 'Submitting...' : 'Submit'}
                </button>

                <div>
                    {sent ? "Message was sent successfully. Thank you!" : errorMessage || null}
                </div>

            </form>


        </>

    )
}