import React from 'react';
import cardImg from '../../../assets/service.png'

const ServiceSection = () => {

    const cardData = [
        { headline: 'Express  & Standard Delivery', paragraph: 'We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.' },
        { headline: 'Nationwide Delivery', paragraph: 'We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.' },
        { headline: 'Fulfillment Solution', paragraph: 'We also offer customized service with inventory management support, online order processing, packaging, and after sales support.' },
        { headline: 'Cash on Home Delivery', paragraph: '100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.' },
        { headline: 'Corporate Service / Contract In Logistics', paragraph: 'Customized corporate services which includes warehouse and inventory management support.' },
        { headline: 'Parcel Return', paragraph: 'Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.' },
    ]

    return (
        <div className='p-20 bg-secondary rounded-2xl my-10'>
            <h2 className='text-4xl font-extrabold text-white text-center'>Our Services</h2>
            <p className='text-center text-sm/6 w-[65%] mx-auto text-gray-300 my-3'>Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>

            <div className="card_holder py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {
                    cardData.map( (data, index) =>

                        <div key={index} className="card bg-base-100 rounded-2xl card-md shadow-sm">
                            <div className="card-body flex flex-col items-center">
                                <div className='bg-gray-300 w-15 h-15 rounded-4xl flex justify-center items-center'>
                                    <img src={cardImg} className='h-[30px]' alt="" />
                                </div>

                                <div className='w-[80%] text-center flex justify-center'>
                                    <h2 className="card-title text-center text-xl text-secondary font-bold py-2"> {data.headline} </h2>
                                </div>
                                <p className='text-gray-700 text-center text-xs/5 font-semilight'> {data.paragraph} </p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ServiceSection;