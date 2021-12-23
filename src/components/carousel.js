import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { Carousel } from 'react-responsive-carousel';
import '../styles/carousel.css';
import Charity from '../assets/images/charities.jpg';
import Haunted from '../assets/images/haunted.jpg';
import Weather from '../assets/images/weather.jpg';
import Notes from '../assets/images/notes.jpg';
import Workout from '../assets/images/workout.jpg';
import Blog from '../assets/images/blog.jpg';



export default class ProjectCarousel extends Component {
    render() {
        return (
            <Carousel className='carousel' infiniteLoop={true} showIndicators={false} >
                <div>
                    <img className='carImg' src={Charity} alt='charity site'/>
                    <p className='legend'>Charity Site</p>
                    <div className='carLinks'>
                    <a target="_blank" rel='noreferrer' href='https://github.com/alonzofroman/charities-project'><FaGithub size={30}/></a>
                    <a target="_blank" rel='noreferrer' href='https://alonzofroman.github.io/charities-project/'><CgWebsite size={30}/></a>
                    </div>
                </div>

                <div>
                    <img className='carImg' src={Haunted} alt='haunted site'/>
                     <p className='legend'>Haunted Site</p>
                     <div className='carLinks'>
                         <a target="_blank" rel='noreferrer' href='https://github.com/alonzofroman/haunted-forum'><FaGithub size={30}/></a>
                         <a target="_blank" rel='noreferrer' href='https://warm-springs-18820.herokuapp.com/'><CgWebsite size={30} /></a>
                     </div>
                </div>

                <div>
                    <img className='carImg' src={Weather} alt='weather site'/>
                    <p className='legend'>Weather Site</p>
                    <div className='carLinks'>
                        <a target="_blank" rel='noreferrer' href='https://github.com/alonzofroman/weather-dash'><FaGithub size={30} /></a>
                        <a target="_blank" rel='noreferrer' href='https://alonzofroman.github.io/weather-dash/'><CgWebsite size={30}/></a>
                    </div>
                </div>

                <div>
                    <img className='carImg' src={Notes} alt='note taking site'/>
                    <p className='legend'>Express Note Taker</p>
                    <div className='carLinks'>
                        <a target="_blank" rel='noreferrer' href='https://github.com/alonzofroman/express-note-taker'><FaGithub size={30} /></a>
                        <a target="_blank" rel='noreferrer' href='https://mysterious-retreat-76947.herokuapp.com'><CgWebsite size={30} /></a>
                    </div>
                </div>

                <div>
                    <img className='carImg' src={Workout} alt='Workout Tracker'/>
                    <p className='legend'>Workout Tracker</p>
                    <div className='carLinks'>
                        <a target="_blank" rel='noreferrer' href='https://github.com/alonzofroman/workout-tracker'><FaGithub size={30} /></a>
                        <a target="_blank" rel='noreferrer' href='https://morning-stream-56566.herokuapp.com/'><CgWebsite size={30} /></a>
                    </div>
                </div>

                <div>
                    <img className='carImg' src={Blog} alt='Tech Blog'/>
                    <p className='legend'>Tech Blog</p>
                    <div className='carLinks'>
                        <a target="_blank" rel='noreferrer' href='https://github.com/alonzofroman/tech-blog'><FaGithub size={30} /></a>
                        <a target="_blank" rel='noreferrer' href='https://nameless-sierra-18621.herokuapp.com/'><CgWebsite size={30} /></a>
                    </div>
                </div>

            </Carousel>
        )
    }
}