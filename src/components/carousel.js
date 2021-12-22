import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Charity from '../assets/images/charities.jpg';
import Haunted from '../assets/images/haunted.jpg';
import Weather from '../assets/images/weather.jpg';

export default class ProjectCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={Charity} alt='charity site'/>
                    <p>Charity Site</p>
                </div>

                <div>
                    <img src={Haunted} alt='haunted site'/>
                    <p>Haunted Site</p>
                </div>

                <div>
                    <img src={Weather} alt='weather site'/>
                    <p>Weather Site</p>
                </div>

            </Carousel>
        )
    }
}