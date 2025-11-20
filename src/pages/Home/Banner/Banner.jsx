import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import banImg1 from '../../../assets/banner/banner1.png'
import banImg2 from '../../../assets/banner/banner2.png'
import banImg3 from '../../../assets/banner/banner3.png'
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <Carousel showStatus={false} autoPlay={true} showThumbs={false} infiniteLoop={true} >
            <div>
                <img src={banImg1} />
                
            </div>
            <div>
                <img src={banImg2} />
                
            </div>
            <div>
                <img src={banImg3} />
                
            </div>
        </Carousel>
    );
};

export default Banner;