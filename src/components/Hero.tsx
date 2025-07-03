import React from 'react'

const Hero = () => {
    return (
        <div className='relative h-dvh w-screen overflow-hidden bg-cover bg-center'
            style={{ backgroundImage: 'url("/assets/imgs/landing-page.png")' }}>
            
            <div className='overhead z-20'></div>

            <div className='z-50 absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col'>
                <h4 className='font-AlexandriaRegular font-[400] text-white  max-sm:text-[30px] md:text-[70px]'>Master Engineering</h4>
            </div>
        </div>
    )
}

export default Hero