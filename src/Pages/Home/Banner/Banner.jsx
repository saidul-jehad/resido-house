
// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './Banner.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';



const Banner = () => {
    return (
        <div className='hidden'>
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
                    <div className="bg-[url('https://png.pngtree.com/thumb_back/fh260/background/20210903/pngtree-small-apartment-home-interior-decoration-style-photography-map-with-map-image_794336.jpg')]   ">


                        <div className='flex justify-center h-[700px] border items-center'>
                            <p className='text-5xl text-sky-400 font-bold'>
                                <h3 >Your source for all </h3>
                                <h3>your real estate needs</h3>
                            </p>

                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>

                    <div className='bg-slate-500 min-h-screen'>
                        <div className=" min-h-screen bg-[url('https://static.vecteezy.com/system/resources/previews/022/964/960/non_2x/mockup-poster-frame-on-the-wall-of-living-room-luxurious-apartment-background-with-contemporary-design-modern-interior-design-3d-render-3d-illustration-generate-ai-free-photo.jpg')]">

                        </div>
                    </div>

                </SwiperSlide>
                <SwiperSlide>< img className='w-full rounded-lg' src="https://png.pngtree.com/thumb_back/fw800/background/20230718/pngtree-computer-generated-illustration-of-a-contemporary-and-lively-apartment-living-room-image_3900982.jpg" alt="" /></SwiperSlide>

                <SwiperSlide>
                    <div className='banner-bg w-full bg-no-repeat bg-cover'>
dasocugAI
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;