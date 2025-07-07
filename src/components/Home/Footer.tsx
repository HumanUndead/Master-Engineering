import React from 'react'

const Footer = () => {
    const links = ['About Us','Contact Us','FAQ','Projects']
    const contact = ['Amman - Mecca Street - Al-Husseini Complex - Fourth Floor - Office 404','info@master-engineers.com','+962 7 9975 2035']
    return (
        <footer className='w-full'>

            <div className='bg-[#15253E] p-8 md:p-24'>
                <div className="container mx-auto">
                    <div className="max-sm:text-center flex md:justify-around justify-center items-center md:flex-row flex-col">
                        {/* logo */}
                        <img className='w-[190px] h-[92px] max-sm:mb-4 md:self-start' src="/assets/imgs/main-logo.png" alt="main logo image" />
                        
                        {/* for links */}
                        <div className="flex flex-col gap-y-2 md:self-start">
                            <h3 className='goldBg bg-clip-text text-transparent font-normal text-[32px]'>Special Links</h3>
                            <div className='text-white flex flex-col max-sm:items-center ml-5 gap-y-2'>
                                {links.map((info,index) => (
                                    <a key={index} className={`footerLinks relative no-underline block text-[16px] font-normal`}>{info}</a>
                                ))}
                            </div>
                        </div>

                        {/* for contact */}
                        <div className="flex flex-col gap-y-2">
                            <h3 className='goldBg bg-clip-text text-transparent  font-normal text-[32px]'>Contact</h3>
                            <div className='text-white flex flex-col gap-y-2'>
                                {contact.map((info,index) => (
                                    <p
                                        key={index}
                                        className={`${index === 0 ? 'md:w-[235px]':''} font-normal text-[16px]`}>
                                        {info}
                                    </p>
                                ))}
                            </div>
                        </div>
                        
                        {/* for Newsletter */}
                        <div className="flex flex-col max-sm:justify-center items-center gap-y-2 md:self-start">
                            <h3 className='goldBg bg-clip-text text-transparent font-normal text-[32px]'>Newsletter</h3>
                            <div className='text-white flex flex-col gap-y-2 max-w-[246px]'>
                                <p className='text-[16px] font-light'>Subscribe to our newsletter & get all the latest news.</p>
                                <input className='bg-white text-black border-none px-1 py-1 outline-none' type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='goldBg text-white w-full min-h-[28px] flex items-center justify-center p-2 md:p-4'>
                <p className='text-[16px] font-medium text-center'>&copy; Master Engineering 2025. All rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer