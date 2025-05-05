import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Banner from './Banner';

const BannerMain = () => {
    return (
        <div className='max-w-[1280px] mt-3 rounded-[24px] bg-Snow px-6  mx-auto'>

            <div className="flex relative items-center justify-center gap-3">

                <button className="absolute -left-4 z-50  flex items-center prev-category gap-2 bg-white  h-8 justify-center aspect-square active:scale-95 shadow-md border rounded-full">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 11L1.5 6L6.5 1" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 1000,
                    }}
                    speed={900}
                    navigation={{
                        prevEl: ".prev-category",
                        nextEl: ".next-category",
                    }}
                    modules={[Autoplay, Navigation]}
                    slidesPerView={1}
                    centeredSlides={true}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 30
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },

                        1024: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                    }}
                    className="mySwiper"
                >
                    {[1, 2, 3, 4, 5].map((category, index) => (
                        <SwiperSlide key={index} className='w-[700px]'>
                            <Banner />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="flex items-center absolute -right-4 z-50 gap-2 bg-white next-category h-8 justify-center aspect-square active:scale-95 shadow-md border rounded-full">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 11L6.5 6L1.5 1" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default BannerMain