import React from 'react'
import Button from './Button'
import { MdKeyboardArrowLeft } from 'react-icons/md'

const Features = () => {

    const mainInfo = [
        {
            index:1,
            src:"/assets/imgs/our-works-part-1.png",
            title:"مرابع النخيل",
            subTitle: "مشروع سكني راقٍ يجمع بين الطبيعة والحداثة، يقدم تجربة معيشية فريدة في قلب المدينة مع إطلالات على المساحات الخضراء الواسعة وخدمات متكاملة",
            buttonContent:"عرض المشروع",
        },{
            index:2,
            src:"/assets/imgs/our-works-part-2.png",
            title:"مرابع النخيل",
            subTitle: "مشروع سكني راقٍ يجمع بين الطبيعة والحداثة، يقدم تجربة معيشية فريدة في قلب المدينة مع إطلالات على المساحات الخضراء الواسعة وخدمات متكاملة",
            buttonContent:"عرض المشروع",
        }
    ]

    return (
        <div className='w-full relative h-screen py-8 overflow-x-hidden'>
            <div className="container mx-auto">
                <div className='flex gap-2 text-[40px]'>
                    <p className='b-bottom font-light'>المميزة</p>
                    <p className='font-thin'>من اعمالنا</p>
                </div>

                <div className='mt-5'>
                    {
                        mainInfo.map((info,index) => (
                            <div key={index} className={`w-full flex flex-col lg:flex-row ${ info.index === 2 ? 'lg:flex-row-reverse' : ''} justify-between items-center gap-10 my-20`}>
                                    <img className="w-[647px] h-[426px] object-cover rounded-lg" src={info.src} alt={info.title} />

                                    <div className="max-w-[500px] text-end flex flex-col gap-4">
                                        <p className="font-bold text-[32px] md:text-[40px]">{info.title}</p>
                                        <p className="font-light text-[14px] md:text-[16px] leading-[1.8]"> {info.subTitle}</p>

                                        <div className="flex justify-end">
                                            <Button
                                                text={info.buttonContent}
                                                textColor="text-[#15253E]"
                                                border="border border-[#15253E]"
                                                backgroundColor="bg-transparent"
                                                Icon={MdKeyboardArrowLeft}
                                            />
                                        </div>
                                    </div>
                                </div>
                        ))
                    }
                </div>

                <div className="w-full flex items-center justify-center">
                    <Button
                        text="عرض الكل"
                        textColor="text-[#15253E]"
                        border="border border-[#15253E]"
                        backgroundColor="bg-transparent"
                        Icon={MdKeyboardArrowLeft}
                    />
                </div>
            </div>
        </div>
    )
}

export default Features