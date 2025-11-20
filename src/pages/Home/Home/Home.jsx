import React from 'react';
import Banner from '../Banner/Banner';
import HowSection from '../HowSection/HowSection';

const Home = () => {
    return (
        <div>
            <div className='my-6'>
                <Banner></Banner>
            </div>
            <div>
                <HowSection></HowSection>
            </div>
        </div>
    );
};

export default Home;