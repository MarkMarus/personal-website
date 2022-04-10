import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import Loader from 'react-loaders';
import Logo from './Logo';

const Home = () => {
    const [ letterClass, setLetterClass ] = useState ('text-animate')
    const nameArray = [' ', ' ', 'M', 'a', 'r', 'k', ' ', ' ', 'M', 'a', 'r', 'u', 's']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>`m </span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                 <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={15} />
                 </h1>
                <h2>Junior Front-end developer()</h2>
                <Link to="contact" className="flat-button">CONTACT ME</Link>
            </div>
            <Logo />
            <Loader type="pacman" />
        </div>
    )
}

export default Home;