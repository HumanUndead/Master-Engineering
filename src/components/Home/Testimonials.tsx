"use client";

import React, { useRef } from 'react';
import { Playfair_Display } from "next/font/google";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';
import 'swiper/css';

const playfairDisplay = Playfair_Display({
    weight: ['400', '500', '600', '700', '800', '900'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
});

const Testimonials = () => {
    const swiperRef = useRef<SwiperClass | null>(null);

    const feedbackInfo = [
        {
            id: 1,
            info: "مهندسون 1 مستشارون نساعدكم في تصميم و إدارة مشاريع البناء في الأردن مهندسون مستشارون  في تصميم و إدارة مشاريع البناء في الأردن مهندسون مستشارون نساعدكم في تصميم و إدارة مشاريع البناء في الأردن",
        },{
            id: 2,
            info: "مهندسون 2 مستشارون نساعدكم في تصميم و إدارة مشاريع البناء في الأردن مهندسون مستشارون  في تصميم و إدارة مشاريع البناء في الأردن مهندسون مستشارون نساعدكم في تصميم و إدارة مشاريع البناء في الأردن",
        },{
            id: 3,
            info: "مهندسون 3 مستشارون نساعدكم في تصميم و إدارة مشاريع البناء في الأردن مهندسون مستشارون  في تصميم و إدارة مشاريع البناء في الأردن مهندسون مستشارون نساعدكم في تصميم و إدارة مشاريع البناء في الأردن",
        },{
            id: 4,
            info: "مهندسون 4 مستشارون نساعدكم في تصميم و إدارة مشاريع البناء في الأردن مهندسون مستشارون  في تصميم و إدارة مشاريع البناء في الأردن مهندسون مستشارون نساعدكم في تصميم و إدارة مشاريع البناء في الأردن",
        }
    ]

    return (
        <div className='relative w-full h-full md:p-8 p-2 overflow-hidden bg-white'>
            <div className="container mx-auto">

                <div className="my-5 flex flex-col justify-center items-center">
                    <p className='text-[16px] goldBg bg-clip-text text-transparent font-normal'>الأراء</p>
                    <h4 className='font-light text-[32px] md:text-[64px] text-[#15253E] opinionBottomBorder relative'>ما يقوله عملاؤنا</h4>
                </div>

                <div className='max-w-[1015px] flex flex-col gap-y-4'>
                    <div className='flex items-center justify-center md:gap-4 mx-auto'>
                        
                        <div className='self-start hidden md:block'>
                        <img 
                            alt='quotation image'
                            src="/assets/imgs/quotation.png"
                            className='w-[122px] h-[100px]' />
                        </div>

                        <div className="flex flex-col md:justify-center md:items-center my-8 w-full max-w-[891px] overflow-hidden">
                            <Swiper 
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                modules={[]} observer={true} observeParents={true} className="mySwiper w-full overflow-x-hidden"
                            >
                                {feedbackInfo.map((feedback) => (
                                    <SwiperSlide key={feedback.id} className='text-[16px] max-sm:text-[15px] font-light text-[#595959] whitespace-break-spaces md:text-right text-center'>
                                        {feedback.info}
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <p className='w-full flex gap-4 justify-center md:justify-start items-center mt-6'>
                                <span className={playfairDisplay.className + " text-[#15253E] text-[16px] md:text-[23px] font-normal"}> Mahmoud Jamal </span>
                                <span className='goldBg bg-clip-text text-transparent text-[16px] font-normal'>CEO, teba</span>
                            </p>
                        </div>
                    </div>

                    <div className='w-full flex items-center justify-center md:justify-end max-sm:mt-5'>
                        <div className='flex items-center gap-4'>
                        <p className='w-4 h-[1px] bg-gray-400'></p>
                        <div className='flex gap-6 z-600'>
                            {feedbackInfo.map((slide, index) => (
                            <button
                                key={slide.id}
                                onClick={() => swiperRef.current?.slideTo(index)}
                                className='text-[#15253E] cursor-pointer transition-all hover:underline focus:underline text-[14px] md:text-[16px]'
                            >
                                {String(index + 1).padStart(2, '0')}
                            </button>
                            ))}
                        </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='absolute right-0 top-20'>
                <img src="/assets/imgs/Vector.png" alt="Vector image" />
            </div>
        </div>
    );
};

export default Testimonials;
