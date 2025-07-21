import React from 'react'
import { GoArrowLeft } from 'react-icons/go'
import { Playfair_Display } from "next/font/google"

const playfairDisplay = Playfair_Display({
    weight: ['400','500','600','700','800','900'],
    style: ['normal', 'italic'], 
    subsets: ['latin'],
    display: 'swap',
})

const News = () => {

    const newsInfo = [
        {
            index:1,
            src:"/assets/imgs/testimonial-part-1.png",
            newsTitle: "Master Engineers",
            newsDate: "02-04-2021",
            newsOwner:"ali abdulaha",
            newsText: "مهندسون مستشارون نساعدكم في تصميم و إدارة مشاريع البناء في الأردن",
        },{
            index:2,
            src:"/assets/imgs/testimonial-part-2.png",
            newsTitle: "Master Engineers",
            newsDate: "02-04-2021",
            newsOwner:"ali abdulaha",
            newsText: "مهندسون مستشارون نساعدكم في تصميم و إدارة مشاريع البناء في الأردن",
        },{
            index:3,
            src:"/assets/imgs/testimonial-part-3.png",
            newsTitle: "Master Engineers",
            newsDate: "02-04-2021",
            newsOwner:"ali abdulaha",
            newsText: "مهندسون مستشارون نساعدكم في تصميم و إدارة مشاريع البناء في الأردن",
        }
    ]

    return (
        <div className='w-full p-5 md:p-20 overflow-x-hidden bg-[#F3F3F3]'>
            <div className="container mx-auto">
                <div className="my-5 flex flex-col justify-center items-center gap-1">
                    <p className='text-[16px] goldBg bg-clip-text text-transparent font-normal'> الأخبار ومقالات </p>
                    <h4 className='font-light text-[32px] md:text-[64px] text-[#15253E] opinionBottomBorder relative'> اخر الاحداث والمستجدات</h4>
                </div>

                <div className='grid md:grid-cols-2 max-sm:grid-cols-1 lg:grid-cols-3 gap-3'>
                {
                    newsInfo.map((news:any,index:number) => (
                        <div key={index} className='max-w-[383px]'>
                            <img  className='w-[386px] h-[400px] object-cover rounded-lg' src={news.src} alt={news.newsTitle} />

                            <div className="w-full flex flex-col gap-y-2 max-sm:text-center max-sm:items-center sm:items-center md:text-right">
                                
                                <h4 className={`${playfairDisplay.className} #15253E mt-3 md:w-full font-normal text-[32px]`}>{news.newsTitle}</h4>
                                
                                <div className="md:w-full flex flex-col md:flex-row justify-end items-center gap-4 text-[#15253E] text-[16px]">
                                    <span>{news.newsDate}</span>
                                    <span className='hidden md:block'> / </span>
                                    <span className='goldBg bg-clip-text text-transparent font-normal'> {news.newsOwner} </span>
                                </div>

                                <p className=' font-light w-[382px] text-[16px] text-[#595959]'>{news.newsText}</p>

                                <p className='md:w-full flex justify-end items-center gap-4'>
                                    <GoArrowLeft className='w-6 h-6 text-yellow-400' />
                                    <span className='font-medium text-[16px]'>قراءة المزيد</span>
                                </p>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default News