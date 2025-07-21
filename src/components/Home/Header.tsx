import React from 'react'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'
import Button from './Button'

const Header = () => {
    return (
        <div className='h-dvh w-full bg-cover bg-center cursor-pointer'
            style={{ backgroundImage: 'url("/assets/imgs/landing-page.png")' }}>
            
            <div className='overhead z-200'></div>

            <div className="container z-800 mx-auto">
                <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col text-center font-extralight'>
                    <h3 className='text-white max-sm:text-[24px] md:text-[56px] md:leading-[105px]'>
                        Master Engineering
                    </h3>

                    <span className="goldBg bg-clip-text text-transparent max-sm:text-[16px] md:text-[40px] mb-2">
                        صمم معنا منزل أحلامك
                    </span>

                    <span className="font-light text-[12px] md:text-[13px] text-white max-w-[280px] md:max-w-[400px]">
                        مهندسون مستشارون نساعدكم في تصميم و إدارة مشاريع البناء في الأردن
                    </span>

                    <div className='max-sm:mt-8 md:mt-4'>
                        <Button Icon={MdOutlineKeyboardArrowLeft} textColor='text-white' text='تواصل معنا' backgroundColor='goldBg' />
                    </div>
                </div>

                <div className='absolute max-sm:bottom-9 bottom-9 left-2 md:left-12 mt-2'>
                    <img
                        src="/assets/videos/how-to-use-vid.png"
                        width={200}
                        height={200}
                        alt="video"
                        className='max-sm:w-[160px] max-sm:h-[120px]'
                    />
                </div>

                <div className='absolute right-0 bottom-0 w-[46px] h-[346px] bg-[#15253E] flex flex-col justify-evenly items-center gap-3'>
                    <span className="goldBg bg-clip-text text-transparent text-[13px] -rotate-90 whitespace-nowrap">
                        نبذة عنا
                    </span>

                    <span className="inline-block w-[1px] h-6 goldBg rotate-90" />

                    <div className='flex flex-col items-center gap-3'>
                        <FaInstagram className="text-[#CCA24E] text-lg" />
                        <FaLinkedinIn className="text-[#CCA24E] text-lg" />
                        <FaYoutube className="text-[#CCA24E] text-lg" />
                        <FaFacebookF className="text-[#CCA24E] text-lg" />
                    </div>
                </div>

                <div className='absolute max-sm:bottom-3 bottom-4 left-[48%] bgDownArrow md:w-[54px] md:h-[42px] w-[38px] h-[26px] flex items-center justify-center'>
                    <IoIosArrowDown className='text-xl text-white' />
                </div>
            </div>
        </div>
    )
}

export default Header
