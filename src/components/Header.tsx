import React from 'react'
import Button from './Button'
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa6'
import { IoIosArrowDown } from 'react-icons/io'

const iconColor = 'text-[#CCA24E] text-xl rotate-90'

const Header = () => {
    return (
        <div className='relative h-dvh w-screen overflow-hidden bg-cover bg-center cursor-pointer'
            style={{ backgroundImage: 'url("/assets/imgs/landing-page.png")' }}>
            
            <div className='overhead z-20'></div>

            <div className='font-extralight	 z-50 absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col text-center'>
                <h3 className='font-extralight text-white  max-sm:text-[30px] md:text-[70px] md:leading-[131px]'>Master Engineering</h3>
                
                <span className={`max-sm:text-[20px] md:text-[50px] goldBg bg-clip-text text-transparent mb-2`}> صمم معنا منزل أحلامك
                </span>

                <span className="font-light text-[14px] md:text-[16px] text-white max-w-[350px] max-h-[50px] md:max-w-[500px] md:max-h-[56px]"> مهندسون مستشارون نساعدكم في تصميم  مشاريع البناء في  مهندسون مستشارون نساعدكم في تصميم و إدارة مشاريع البناء في الأردن
                </span>

                <div className='max-sm:mt-10 md:mt-5'>
                    <Button Icon={MdOutlineKeyboardArrowLeft} textColor='text-white' text='تواصل معنا' backgroundColor={`goldBg`} />
                </div>
            </div>

            <div className='absolute bottom-2 left-2 md:left-8 mt-2'>
                <img 
                    src="/assets/videos/how-to-use-vid.png"
                    width={250}
                    height={250}
                    alt='video'
                    className={`max-sm:w-[200px] max-sm:h-[150px]`}
                />
            </div>

            <div className='absolute bottom-20 -right-20 md:-right-22 bg-[#15253E] p-2 md:p-4 -rotate-90'>
                <div dir='rtl' className='flex items-center justify-between gap-4'>
                    <span className={`goldBg bg-clip-text text-transparent text-[16px]`}> نبذة عنا </span>

                    <span className={`inline-block w-[2px] h-8 goldBg`} />

                    <div className=' flex justify-center items-center gap-4 '>
                        <FaInstagram className={`${iconColor}`} />
                        <FaLinkedinIn className={`${iconColor}`} />
                        <FaYoutube className={`${iconColor}`} />
                        <FaFacebookF className= {`${iconColor}`}/>
                    </div>
                </div>
            </div>

            <div className='absolute bottom-5 left-[50%] bg-gray-500 md:w-[68px] md:h-[53px] w-[48px] h-[33px] flex items-center justify-center'>
                <IoIosArrowDown className='text-2xl text-white' />
            </div>
        </div>
    )
}

export default Header