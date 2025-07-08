"use client"

import React, { useState } from 'react'
import { MdKeyboardArrowLeft } from 'react-icons/md';

const Work = () => {
    const InfoSection = [
        {
            index:1,
            src:"/assets/imgs/user-part-1.png",
            headTitle: "قائمة المهندسين في الموقع",
            subTitle: "اطلع على قائمة المهندسين المؤهلين على الموقع",
        },
        {
            index:2,
            src:"/assets/imgs/user-part-2.png",
            headTitle: "مشاريع فلل متنوعة",
            subTitle: "استعرض نماذج الفلل لتصميم منزل احلامك",
        },
        {
            index:3,
            src:"/assets/imgs/user-part-3.png",
            headTitle:"خدمة تسعير المشاريع",
            subTitle:"احصل على تسعير دقيق لمشاريعك من خلال خدمة تقدير التكاليف",
        },
        {
            index:4,
            src:"/assets/imgs/user-part-4.png",
            headTitle:"خدمة الدراسة الأولية المجانية",
            subTitle:"نقدم دراسة أولية مجانية لمساعدتك في بداية مشروعك.",
        },
        {
            index:5,
            src:"/assets/imgs/user-part-5.png",
            headTitle:"خدمة تصميم داخلي",
            subTitle:"دعم كامل في تنفيذ تصميم داخلي مبتكر",
        },
        {
            index:6,
            src:"/assets/imgs/user-part-6.png",
            headTitle:"طلب تصميم مشروع جديد",
            subTitle:"ساعد في تحقيق مشروعك من خلال خدمات تصميم متخصصة",
        }
    ]

    const [isHover, setIsHover] = useState(false);

    const handleHover = () => {
        setIsHover(prev => !prev);
    }

    return (
        <div className='w-full relative min-h-[728px] py-24 overflow-x-hidden'>
            <div dir='rtl' className='container mx-auto overflow-x-hidden p-8'>
                
                <div className="content flex flex-col gap-8">
                    <div dir='' className="topic w-[173px] hight-[52px]">
                        <p className='flex justify-center items-center gap-1 text-[30px] md:text-[40px]'>
                            <span className='font-extralight'>ماذا</span>
                            <span className='font-light customBorder'>نقدم</span>
                        </p>
                    </div>

                    <div dir='ltr' className='grid max-sm:grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer'>
                        {
                            InfoSection.map((info:any,index:number) => (
                                <div key={index} className="relative group max-w-[588px] max-h-[360px] overflow-hidden">
                                        <div className='addOverlay'>
                                            <div className='overlayEffect'></div>
                                            <img 
                                                src={info.src}
                                                alt={info.headTitle}
                                                className="w-full h-full object-cover" />

                                            <div className='addIndex absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-0 transition-transform duration-500 ease-in-out group-hover:translate-y-[-50%] 
                                                flex flex-col items-center justify-center gap-2 text-center w-full px-4'>
                                                
                                                <span className='text-[16px] md:text-[28px] font-normal text-white'>{info.headTitle}</span>
                                                <span className='md:w-[446px] w-[250px] h-[5px] goldBg'></span>
                                                <span className='text-[14px] md:text-[16px] font-light text-white'>{info.subTitle}</span>
                                                
                                                <div className='arrowLeft hidden'>
                                                    <span className='w-[68px] h-[53px] bg-gray-400 opacity-[75%] flex justify-center items-center'>
                                                        <MdKeyboardArrowLeft className='text-4xl text-white' />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work