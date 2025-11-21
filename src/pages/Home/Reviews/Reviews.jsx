import React, { use } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import customerImg from '../../../assets/customer-top.png'
import { EffectCoverflow, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';

const Reviews = ({ reviewsPromise }) => {

    const reviews = use(reviewsPromise);
    // console.log(reviews)

    return (
        <div className='my-20'>
            <div className='w-full flex flex-col items-center gap-3'>
                <img src={customerImg} className='w-[200px] my-5' alt="" />
                <h2 className='text-3xl font-bold text-secondary'>What our customers are sayings</h2>
                <p className='text-sm text-gray-600 w-[60%] text-center'>Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!</p>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={3}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                {
                    reviews.map(review =>

                        <SwiperSlide key={review.id}>
                            <ReviewCard review={review}></ReviewCard>
                        </SwiperSlide>
                    )
                }

            </Swiper>
        </div>
    );
};

export default Reviews;