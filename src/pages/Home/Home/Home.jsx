import React from 'react';
import Banner from '../Banner/Banner';
import HowSection from '../HowSection/HowSection';
import ServiceSection from '../ServiceSection/ServiceSection';
import Brands from '../Brands/Brands';
import Reviews from '../Reviews/Reviews';
import Faq from '../Faq/Faq';

const reviewsPromise = fetch('/reviews.json').then( res => res.json() );

const Home = () => {
    return (
        <div>
            <div className='my-6'>
                <Banner></Banner>
            </div>
            <div>
                <HowSection></HowSection>
            </div>
            <div>
                <ServiceSection></ServiceSection>
            </div>
            <div>
                <Brands></Brands>
            </div>
            <div>
                <Reviews reviewsPromise={reviewsPromise}></Reviews>
            </div>
            <div>
                <Faq></Faq>
            </div>
        </div>
    );
};

export default Home;