import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './Banner.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className=" flex items-center justify-center flex-col gap-5 text-white bg-[url('https://cdna.artstation.com/p/assets/images/images/015/507/918/large/ahmed-mohamed-finish.jpg')] min-h-[700px] bg-no-repeat bg-cover">
                        <h3 className='font-bold text-3xl text-center'>Discover Your Dream Home Today</h3>
                        <p className='md:w-3/5 w-4/5 mx-auto'>Explore a curated collection of exquisite residences tailored to your lifestyle. Find the perfect blend of luxury, comfort, and sophistication in our premier residential estate listings. Start your journey now</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex items-center justify-center flex-col gap-5 text-white bg-[url('https://c0.wallpaperflare.com/preview/358/1019/781/living-room-apartment-room-interior.jpg')] min-h-[700px] bg-no-repeat bg-cover">
                        <h3 className='font-bold text-3xl text-center'>Discover Your Dream Home Today</h3>
                        <p className='md:w-3/5 w-4/5 mx-auto'>Explore a curated collection of exquisite residences tailored to your lifestyle. Find the perfect blend of luxury, comfort, and sophistication in our premier residential estate listings. Start your journey now</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className=" flex items-center justify-center flex-col gap-5 text-white bg-[url('https://img.freepik.com/free-photo/minimalist-black-interior-with-black-sofa_1268-31786.jpg')] min-h-[700px] bg-no-repeat bg-cover">
                        <h3 className='font-bold text-3xl text-center'>Discover Your Dream Home Today</h3>
                        <p className='md:w-3/5 w-4/5 mx-auto'>Explore a curated collection of exquisite residences tailored to your lifestyle. Find the perfect blend of luxury, comfort, and sophistication in our premier residential estate listings. Start your journey now</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Banner;