import React from 'react'
import BannerCel from "../../assets/HomeBanner/bannerCel.png"

const Banner = () => {
    return (
        <div className="flex flex-col rounded-3xl overflow-hidden homebannerCardshadow my-8 border-2 border-LightViolet homebannerCardbg ">
            <div className="w-full flex flex-col sm:flex-row max-md:max-w-full">
                <div className="flex p-4 flex-col lg:w-5/12  max-md:w-full order-2 md:order-1">
                    <div className="flex z-10 flex-col items-start w-full">
                        <div className="text-4xl text-white font-extrabold ">
                            <p className="text-Blue whitespace-nowrap">Most Advanced </p>{" "}
                            <p className="text-Blue whitespace-nowrap">Creator’s</p>{" "}
                            <p className="text-black">Marketplace</p>
                        </div>
                        <div className=" mt-3 text-[18px] text-Blue ">
                            Revolutionizing the way {" "}
                            <br />
                            <span className=" text-black font-bold capitalize  drop-shadow-lg drop-shadow-black">
                                brands
                            </span>{" "}
                            and{" "}
                            <span className=" text-black capitalize font-bold">
                                influencers
                            </span>{" "}
                            collaborate,
                            <p className='whitespace-nowrap'>making it effortless, efficient, and impactful.</p>
                        </div>
                        <div className="flex gap-3 mt-4 text-[18px] uppercase whitespace-nowrap">
                            <div className="py-2 px-8 font-bold text-white bg-Blue rounded-full max-md:px-5">
                                LOGIN
                            </div>
                            <div className="px-8 py-2 font-bold text-black border border-Blue border-solid rounded-full">
                                REGISTER
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sm:hidden lg:block flex flex-col lg:w-7/12 order-1 md:order-2">
                    <img
                        loading="lazy"
                        srcSet={BannerCel}
                        className="h-full w-full rounded-tr-3xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner
