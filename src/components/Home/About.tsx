import React from 'react'

const bgGold ='bg-gradient-to-r from-[#CCA24E] via-[#C18A30] to-[#FFD67D] bg-clip-text text-transparent ';

const About = () => {
    return (
        <div className='w-full relative min-h-[728px] py-24 container mx-auto'>
            <div className='flex items-center justify-end gap-2 overflow-x-hidden'>
                <div dir='rtl' className='px-6 md:px-0 md:absolute md:top-20 md:right-[380px]'>
                    <h4 className='font-light text-black text-xl sm:text-2xl md:text-3xl flex md:gap-2 max-sm:flex-col'>
                        <span> مرحباً نحن </span>
                        <span className={`${bgGold} font-bold inline-block`}>Master Engineering</span>
                    </h4>

                    <div className='md:min-w-[866px] md:min-h-[278px] mt-5 flex flex-col gap-3'>

                        <p className='text-[14px] md:text-[18px] max-w-full font-light text-base/6'>
                            يتولى فريقنا كل شيء، بدءًا من تطوير الفكرة والمفهوم وحتى التنفيذ نؤمن بالتقاليد ونمزجها داخل ابتكاراتنا جميع مشاريعنا تحمل طابعًا فنيًا فريدًا وحلولاً وظيفية العميل هو روح المشروع هدفنا الرئيسي هو تجسيد قيمه وتفرده من خلال التصميم يتولى فريقنا كل شيء
                        </p>

                        <p className='text-[14px] md:text-[18px] max-w-full font-light text-base/6'>
                            يتولى فريقنا كل شيء، بدءًا من تطوير الفكرة والمفهوم وحتى التنفيذ. نؤمن بالتقاليد ونمزجها داخل ابتكاراتنا. جميع مشاريعنا تحمل طابعًا فنيًا فريدًا وحلولاً وظيفية. العميل هو روح المشروع. هدفنا الرئيسي هو تجسيد قيمه وتفرده من خلال التصميم.يتولى فريقنا كل شيء، بدءًا من تطوير الفكرة والمفهوم وحتى التنفيذ.
                        </p>

                        <p className='w-[189px] h-[8px] bg-[#15253E] mt-5'></p>
                    </div>

                    <div className='md:-mt-4 mt-6'>
                        <p className='font-normal text-[24px]'>كيف تسير عملية التصميم</p>
                        
                        <div className="flex flex-col gap-2">
                            <p className='our-work flex gap-2 items-center'>
                                <span className='spanBorder'></span>
                                الفكرة والبداية
                            </p>
                            <p className='our-work flex gap-2 items-center md:mr-[180px]'>
                                <span className='spanBorder'></span>
                                التصميم والأنشاء
                            </p>
                            <p className='our-work flex gap-2 items-center md:mr-[380px]'>
                                <span className='spanBorder'></span>
                                البناء والتشطيب
                            </p>
                        </div>
                    </div>

                    <div className='absolute md:top-[250px] md:left-[8px] left-[-120px] top-[400px] max-sm:top-[550px] max-sm:left-[-90px]  md:w-[237px] md:h-[286px]'>
                        <p className='w-[80%] max-sm:w-[50%] max-sm:text-[50px] font-black text-[70px] md:text-[110px] opacity-7'>
                            من نحن
                        </p>
                    </div>

                </div>

                <div className='absolute -right-10 top-15 hidden md:block'>
                    <img 
                        width={393}
                        height={728}
                        src="/assets/imgs/about.png"
                        alt="about us image" 
                        />
                </div>
            </div>
        </div>
    )
}

export default About