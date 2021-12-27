import React from 'react';
import Typewriter from './typewriter';
import '../styles/home.css';
import Dev from '../assets/images/dev.jpeg';
import Portrait from '../assets/images/portrait.jpg';

export default function Home() {
    return (
        <div className='homepage'>
            <img src={Portrait} alt='portrait' className='portraitImg' style={{ alignSelf: 'center' }}></img>
            <div className='homeText'>
            <h1>Hello. My name is Alonzo Roman</h1>
            <Typewriter />
            </div>
            

        </div>
    )
}