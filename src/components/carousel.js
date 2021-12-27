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
                    <div className='legend' id='slideLegend'>
                    <a className='repoLink' target="_blank" rel='noreferrer' href='https://github.com/alonzofroman/charities-project'><FaGithub size={30}/></a>  
                    <p className='slideName'>Charity Site</p> 
                    <a classname='siteLink' target="_blank" rel='noreferrer' href='https://alonzofroman.github.io/charities-project/'><CgWebsite size={30}/></a>
                    </div>

                </div>

                <div>
                    <img className='carImg' src={Haunted} alt='haunted site'/>
                    <div className='legend' id='slideLegend'>
                        <a target="_blank" rel='noreferrer' href='https://github.com/alonzofroman/haunted-forum'><FaGithub size={30}/></a>
                        <p className='slideName'>Haunted Site</p>
                        <a target="_blank" rel='noreferrer' href='https://warm-springs-18820.herokuapp.com/'><CgWebsite size={30} /></a>
                    </div>
                </div>

                <div>
                    <img className='carImg' src={Weather} alt='weather site'/>
                    <div className='legend' id='slideLegend'>
                    <a target="_blank" rel='noreferrer' href='https://github.com/alonzofroman/weather-dash'><FaGithub size={30} /></a>
                    <p className='slideName'>Weather Site</p>
                    <a target="_blank" rel='noreferrer' href='https://alonzofroman.github.io/weather-dash/'><CgWebsite size={30}/></a>
                    </div>
                </div>

                <div>
                    <img className='carImg' src={Notes} alt='note taking site'/>
                    <div className='legend' id='slideLegend'>
                        <a target="_blank" rel='noreferrer' href='https://github.com/alonzofroman/express-note-taker'><FaGithub size={30} /></a>
                        <p className='slideName'>Express Note Taker</p>
                        <a target="_blank" rel='noreferrer' href='https://mysterious-retreat-76947.herokuapp.com'><CgWebsite size={30} /></a>
                    </div>
                </div>

                <div>
                    <img className='carImg' src={Workout} alt='Workout Tracker'/>
                    <div className='legend' id='slideLegend'>
                        <a target="_blank" rel='noreferrer' href='https://github.com/alonzofroman/workout-tracker'><FaGithub size={30} /></a>
                        <p className='slideName'>Workout Tracker</p>
                        <a target="_blank" rel='noreferrer' href='https://morning-stream-56566.herokuapp.com/'><CgWebsite size={30} /></a>
                    </div>
                </div>

                <div>
                    <img className='carImg' src={Blog} alt='Tech Blog'/>
                    <div className='legend' id='slideLegend'>
                        <a target="_blank" rel='noreferrer' href='https://github.com/alonzofroman/tech-blog'><FaGithub size={30} /></a>
                        <p className='slideName'>Tech Blog</p>
                        <a target="_blank" rel='noreferrer' href='https://nameless-sierra-18621.herokuapp.com/'><CgWebsite size={30} /></a>
                    </div>
                </div>

            </Carousel>
        )
    }
}