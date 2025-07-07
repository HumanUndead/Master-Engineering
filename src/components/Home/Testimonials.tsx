import React from 'react'
import { Playfair_Display } from "next/font/google"


const playfairDisplay = Playfair_Display({
    weight: ['400','500','600','700','800','900'],
    style: ['normal', 'italic'], 
    subsets: ['latin'],
    display: 'swap',
})

const Testimonials = () => {
    return (
        <div className='w-full h-full md:p-8 p-2 overflow-x-hidden bg-white'>
            <div className="container mx-auto">
                
                <div className="my-5 flex flex-col justify-center items-center gap-1">
                    <p className='text-[16px] goldBg bg-clip-text text-transparent font-normal'>الأراء</p>
                    <h4 className='font-light text-[32px] md:text-[64px] text-[#15253E] opinionBottomBorder relative'>ما يقوله عملاؤنا</h4>
                </div>

                <div className='max-w-[1015px] max-h-[206px] flex flex-col gap-y-2 '>
                    <div className='flex items-center justify-center md:gap-4 max-w-[891px] max-h-[158px] mx-auto'>
                        {/* quotation */}
                        <div className='self-start hidden md:block'>
                            <img 
                                alt='quotation image'
                                src="/assets/imgs/quotation.png"
                                className='w-[122px] h-[100px]'/>
                        </div>
                        
                        {/* info section */}
                        <div className="flex flex-col md:justify-center md:items-center my-11 max-w-[891px] w-full">
                            
                            <p className='text-[16px] max-sm:text-[15px] w-full max-w-[720px] font-light text-[#595959] whitespace-break-spaces md:text-right text-center'>
                                مهندسون مستشارون نساعدكم في تصميم و إدارة مشاريع البناء في الأردن مهندسون مستشارون  في تصميم و إدارة مشاريع البناء في الأردن مهندسون مستشارون نساعدكم في تصميم و إدارة مشاريع البناء في الأردن
                            </p>

                            <p className='w-full flex gap-4 justify-center md:justify-start items-center mt-8'>
                                <span className={playfairDisplay.className + "text-[#15253E] text-[16px] md:text-[23px] font-normal "}>
                                    Mahmoud Jamal
                                </span>
                                <span className='goldBg bg-clip-text text-transparent text-[16px] font-normal' >CEO, teba</span>
                            </p>

                        </div>
                    </div>

                    <div className='w-full flex items-center justify-center max-sm:mt-5 md:justify-end'>
                        <div className='flex justify-center items-center gap-4'>
                            <p className='w-4 h-[1px] bg-gray-400'> </p>
                            <p>01 02 03 04</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials