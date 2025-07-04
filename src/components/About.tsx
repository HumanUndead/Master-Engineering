import React from 'react'


const bgGold ='bg-gradient-to-r from-[#CCA24E] via-[#C18A30] to-[#FFD67D] bg-clip-text text-transparent ';

const About = () => {
    return (
        <div className='w-full relative min-h-[728px] py-24 overflow-x-hidden'>
            <div className='flex items-center justify-end gap-2 overflow-x-hidden'>
                <div dir='rtl' className='px-6 md:px-0 md:absolute md:top-20 md:right-[380px]'>
                
                    <h4 className='font-light text-black text-xl sm:text-2xl md:text-3xl'>
                        مرحباً نحن <span className={`${bgGold} font-bold`}>Master Engineering</span>
                    </h4>

                    <div className='md:w-[866px] md:h-[278px] mt-5 flex flex-col gap-3'>

                        <p className='text-[14px] md:text-[18px] max-w-full font-light'>
                            .يتولى فريقنا كل شيء، بدءًا من تطوير الفكرة والمفهوم وحتى التنفيذ. نؤمن بالتقاليد ونمزجها داخل ابتكاراتنا. جميع مشاريعنا تحمل طابعًا فنيًا فريدًا وحلولاً وظيفية. العميل هو روح المشروع. هدفنا الرئيسي هو تجسيد قيمه وتفرده من خلال التصميم.يتولى فريقنا كل شيء
                        </p>

                        <p className='text-[14px] md:text-[18px] max-w-full font-light'>
                            يتولى فريقنا كل شيء، بدءًا من تطوير الفكرة والمفهوم وحتى التنفيذ. نؤمن بالتقاليد ونمزجها داخل ابتكاراتنا. جميع مشاريعنا تحمل طابعًا فنيًا فريدًا وحلولاً وظيفية. العميل هو روح المشروع. هدفنا الرئيسي هو تجسيد قيمه وتفرده من خلال التصميم.يتولى فريقنا كل شيء، بدءًا من تطوير الفكرة والمفهوم وحتى التنفيذ.
                        </p>

                        <p className='w-[189px] h-[8px] bg-[#15253E] mt-5'></p>
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