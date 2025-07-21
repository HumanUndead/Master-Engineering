import React from 'react'

const Achievement = () => {

    const statistics = [
        {
            index:1,
            number: 2190,
            info: "ساعات العمل",
        },{
            index:2,
            number: 166,
            info: "عميل راضي",
        },{
            index:3,
            number: 166,
            info: "مشروع تم تنفيذه",
        }
    ]

    return (
        <div className='w-full relative h-[538px] py-8 overflow-x-hidden'>
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/assets/imgs/achievements.png')" }}>
                
                <div className="overlayAchievement z-10">
                    <div dir='rtl' className="statisticsInfo relative p-4 text-white container mx-auto mt-5">
                        <div className='w-full flex flex-col md:flex-row  justify-center  items-center md:gap-15 gap-0'>
                            
                            <div className='flex md:flex-col'>
                                <p className='md:font-thin text-[40px] md:opacity-[55%]'>بعض</p>
                                <p className='md:font-light text-[40px] flex justify-end items-center gap-2'>
                                    <span>الحقائق</span>
                                    <span>والأرقام</span>
                                </p>
                            </div>
                            
                            <div className='translate-y-6'>
                                <p className='w-full max-w-[838px] text-[14px] md:text-[18px] font-light leading-relaxed'>
                                    يتولى فريقنا كل شيء، بدءًا من تطوير الفكرة والمفهوم وحتى التنفيذ. نؤمن بالتقاليد ونمزجها داخل ابتكاراتنا. جميع مشاريعنا تحمل طابعًا فنيًا فريدًا وحلولاً وظيفية. العميل هو روح المشروع. هدفنا الرئيسي هو تجسيد قيمه وتفرده من خلال التصميم.
                                </p>
                            </div>

                        </div>

                        <div dir='ltr' className="statisticsNumber w-full mt-8 flex items-center justify-end gap-5 md:gap-10">
                            {
                                statistics.map((info:any,index:number) => (
                                    <div key={index} className='flex flex-col items-end md:justify-center md:items-center md:gap-2'>
                                        <span className='goldBg bg-clip-text text-transparent font-medium text-[40px] md:text-[102px]'>{info.number}</span>
                                        <span className='text-[28px] text-white font-thin opacity-[60%] max-sm:text-[16px] '>{info.info}</span>
                                    </div>
                                ))
                            }
                        </div>

                        <div className='absolute md:left-0 md:top-[70%] left-[-35%] top-[100%]'>
                            <p className='w-[420px] font-black text-[50px] md:text-[110px] opacity-[20%]'>انجازاتنا</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievement