import React from 'react';
import Typewriter from './typewriter';
import '../styles/home.css';

export default function Home() {
    return (
        <div className='homepage'>
            
            <div className='homeText'>
            <p>Hello. My name is Alonzo Roman</p>
            <Typewriter />
            </div>
            

        </div>
    )
}