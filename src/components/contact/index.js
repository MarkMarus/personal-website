import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import {useEffect} from 'react'
import { useState } from 'react';
import emailjs from '@emailjs/browser'
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
    const [ letterClass, setLetterClass ] = useState ('text-animate')
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs 
        .sendForm(
            'gmail',
            'template_YeJhZkgb',
            form.current,
            'user_a7sctmU9M2invqlzy'
        )
        .then(
            () => {
                alert('Message was sent!')
                window.location.reload(false)
            },
            () => {
                alert('Message failed to send')
            }
        )
    }
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])
    return (
        <>
            <div className="container contact-page">
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am very interested in any opportunities to work with you. I'm looking for company to work with 
                        where i can gain experience as a front-end developer by solving real tasks and problems. However if You have any questions
                        you can contact me using the form below or simply contacting me by emailing at marusmarkoweb@gmail.com.
                    </p>
                    <div className='contact-form'>
                        <form ref={form}onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required/>
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required/>
                                </li>
                                <li className='half'>
                                    <input type="text" name="subject" placeholder='Subject' required/>
                                </li>
                                <li className='half'>
                                    <textarea name="message" placeholder='Message' required/>
                                </li>
                                <li>
                                    <input type="submit" className='flat-button' value='Submit'/>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
<Loader type='pacman' />

        </>
    )
}

export default Contact;