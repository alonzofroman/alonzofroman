import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaGithub } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { Carousel } from 'react-responsive-carousel';
import '../styles/carousel.css';
import Charity from '../assets/images/charities.jpg';
import Haunted from '../assets/images/haunted.jpg';
import Weather from '../assets/images/weather.jpg';



export default class ProjectCarousel extends Component {
    render() {
        return (
            <Carousel className='carousel' infiniteLoop={true} showIndicators={false} >
                <div>
                    <img className='carImg' src={Charity} alt='charity site'/>
                    <p className='legend'>Charity Site</p>
                    <div className='carLinks'>
                    <a href='https://github.com/alonzofroman/charities-project'><FaGithub size={30}/></a>
                    <a href='https://alonzofroman.github.io/charities-project/'><CgWebsite size={30}/></a>
                    </div>
                </div>

                <div>
                    <img className='carImg' src={Haunted} alt='haunted site'/>
                     <p className='legend'>Haunted Site</p>
                     <div className='carLinks'>
                         <a href='https://github.com/alonzofroman/haunted-forum'><FaGithub size={30}/></a>
                         <a href='https://warm-springs-18820.herokuapp.com/'><CgWebsite size={30} /></a>
                     </div>
                </div>

                <div>
                    <img className='carImg' src={Weather} alt='weather site'/>
                    <p className='legend'>Weather Site</p>
                    <div className='carLinks'>
                        <a href='https://github.com/alonzofroman/weather-dash'><FaGithub size={30} /></a>
                        <a href='https://alonzofroman.github.io/weather-dash/'><CgWebsite size={30}/></a>
                    </div>
                </div>

            </Carousel>
        )
    }
}