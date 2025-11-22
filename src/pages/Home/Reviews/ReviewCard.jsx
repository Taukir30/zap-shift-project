import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewCard = ({review}) => {

    console.log(review)

    return (
        <div className="card bg-base-100 shadow-xl w-full max-w-md mx-auto">
            <div className="card-body">
                <FaQuoteLeft className="text-primary text-4xl mb-4" />
                <p className="text-gray-600">
                    {review.review}
                </p>
                <div className="divider divider-dashed my-4"></div>
                <div className="flex items-center gap-4">
                    <div className="avatar placeholder hidden sm:block">
                        <img src={review.user_photoURL} className='w-[50px] rounded-4xl' alt="" />
                    </div>
                    <div className='w-full'>
                        <h3 className="font-bold text-sm sm:text-lg text-primary">{review.userName}</h3>
                        <p className="text-gray-500 overflow-hidden w-full text-sm">{review.user_email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;