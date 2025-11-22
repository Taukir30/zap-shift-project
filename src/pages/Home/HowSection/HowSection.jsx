import React from 'react';
import { BsTruck } from 'react-icons/bs';

const HowSection = () => {

    const cardData = [
        {headline: 'Booking Pick & Drop', paragraph: 'From personal packages to business shipments — we deliver on time, every time.'},
        {headline: 'Cash On Delivery', paragraph: 'From personal packages to business shipments — we deliver on time, every time.'},
        {headline: 'Delivery Hub', paragraph: 'From personal packages to business shipments — we deliver on time, every time.'},
        {headline: 'Booking SME & Corporate', paragraph: 'From personal packages to business shipments — we deliver on time, every time.'},
    ]

    return (
        <div className='p-20'>
            <h2 className='text-2xl font-extrabold text-secondary'>How it Works</h2>

            <div className="card_holder py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
                {
                    cardData.map((data, index) =>

                        <div key={index} className="card bg-base-100 rounded-2xl card-md shadow-sm">
                            <div className="card-body">
                                <BsTruck size={40} />
                                <h2 className="card-title text-base text-secondary font-bold py-2"> {data.headline} </h2>
                                <p className='text-gray-700 font-semilight'> {data.paragraph} </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default HowSection;