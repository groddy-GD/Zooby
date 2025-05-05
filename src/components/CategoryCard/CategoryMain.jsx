import React from 'react'
import { CategoryData } from '../../data/CategoryData'
import CategoryCard from './CategoryCard'


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const CategoryMain = () => {

    console.log(CategoryCard)

    return (
        <div className='max-w-[1280px] mt-3 rounded-[24px] bg-Snow px-6 py-8  mx-auto'>

            <div className="flex relative items-center justify-center gap-3">

                <button className="absolute -left-4 z-50  flex items-center prev-Banner gap-2 bg-white  h-8 justify-center aspect-square active:scale-95 shadow-md border rounded-full">
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
                        prevEl: ".prev-Banner",
                        nextEl: ".next-banner",
                    }}
                    modules={[Autoplay, Navigation]}
                    slidesPerView={3}
                    spaceBetween={30}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                        },
                        768: {
                            slidesPerView: 5,
                        },

                        1024: {
                            slidesPerView: 8,
                        },
                    }}
                    className="mySwiper"
                >
                    {CategoryData.map((category, index) => (
                        <SwiperSlide key={index} className=''>
                            <CategoryCard category={category} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className="flex items-center absolute -right-4 z-50 gap-2 bg-white next-banner h-8 justify-center aspect-square active:scale-95 shadow-md border rounded-full">
                    <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 11L6.5 6L1.5 1" stroke="#1E1E1E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                </button>
            </div>
        </div>
    )
}

export default CategoryMain