import React from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import amazonImg from '../../../assets/brands/amazon.png'
import casioImg from '../../../assets/brands/casio.png'
import moonstarImg from '../../../assets/brands/moonstar.png'
import randstadImg from '../../../assets/brands/randstad.png'
import starImg from '../../../assets/brands/star.png'
import starpeopleImg from '../../../assets/brands/start_people.png'
import { Autoplay } from 'swiper/modules';

const brandLogos = [amazonImg, casioImg, moonstarImg, randstadImg, starImg, starpeopleImg, moonstarImg, randstadImg]


const Brands = () => {
    return (
        <div>
            <div className='py-10'>
                <h2 className='text-center text-2xl font-bold text-secondary'>We've helped thousands of sales teams</h2>
            </div>
            <Swiper
                loop={true}
                slidesPerView={5}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                {
                    brandLogos.map((logo, index) => <SwiperSlide key={index}><img src={logo} alt="logo" /></SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default Brands;