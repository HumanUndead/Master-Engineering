"use client"

import { useState } from "react"
import Image from "next/image"

import { IoMdSearch, IoMdMenu, IoMdClose } from "react-icons/io"
import Button from "./Button";

const navTxtColor = 'bg-gradient-to-r from-[#CCA24E] via-[#C18A30] to-[#FFD67D] bg-clip-text text-transparent';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const navItems = ["الرئيسية", "خدماتنا", "مشاريعنا", "خدمة الدراسة الأولية المجانية", "تواصل معنا"]

    return (
        <header className="w-full z-990 absolute top-0">
            <nav className="relative">
                {/* Desktop Navigation */}
                <div className="hidden lg:flex justify-between items-center w-full h-full">

                    {/* Login Button - Left side */}
                    <div className="cursor-pointer ml-4 xl:ml-44">
                        <Button
                            text="تسجيل دخول"
                            backgroundColor="bg-gradient-to-r from-[#CCA24E] via-[#C18A30] to-[#FFD67D]"
                            textColor="text-white"
                        />
                    </div>

                    {/* Main Navigation - Right side */}
                    <div className="bg-[#15253E] py-3 px-10 xl:px-15">
                        <ul dir="rtl" className={`transition-colors duration-300 flex justify-center items-center gap-4 xl:gap-8 ${navTxtColor}`}>
                            <li className="flex-shrink-0">
                                <Image
                                    src="/assets/imgs/main-logo.png"
                                    alt="logo"
                                    width={119}
                                    height={57}
                                    className="w-auto h-12 xl:h-14"
                                />
                            </li>

                            {navItems.map((item:any, index:number) => (
                                <li key={index} className={`transition-colors duration-300 cursor-pointer whitespace-nowrap text-sm xl:text-base hover:text-[#d4b578] `}>
                                    {item}
                                </li>
                            ))}

                            <li className={`mx-4 xl:mx-8 text-[#c0a060]`}>
                                <IoMdSearch className="text-xl cursor-pointer" />
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                
                    {/* Mobile Header */}
                    <div className="flex z-890 justify-between items-center p-4 bg-[#15253E]">
                        {/* Logo */}
                        <div dir="rtl">
                            <Image src="/assets/imgs/main-logo.png" alt="logo" width={80} height={38} className="w-auto h-10" />
                        </div>

                        {/* Mobile Menu Button */}
                        <button onClick={toggleMenu} className="text-white text-2xl p-2" aria-label="Toggle menu">
                            {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
                        </button>
                    </div>

                    {/* Mobile Menu Overlay */}
                    {isMenuOpen && (
                        <div className="absolute z-88 top-full left-0 w-full bg-[#15253E] shadow-lg">
                            <ul dir="rtl" className="flex flex-col text-white">
                                {navItems.map((item:any, index:number) => (
                                    <li key={index} className="border-b border-gray-600 last:border-b-0">
                                        <a href="#" className="block px-6 py-4 hover:bg-[#1a2b42] transition-colors duration-300"
                                        onClick={() => setIsMenuOpen(false)} > {item} </a>
                                    </li>
                                ))}

                                {/* Search and Login in Mobile Menu */}
                                <li className="border-b border-gray-600">
                                    <div className="flex items-center px-6 py-4 hover:bg-[#1a2b42] transition-colors duration-300">
                                        <IoMdSearch className="text-xl mr-2" />
                                    </div>
                                </li>

                                <li className="p-6" onClick={() => setIsMenuOpen(false)}>
                                    <Button
                                        text="تسجيل دخول"
                                        backgroundColor="bg-gradient-to-r from-[#CCA24E] via-[#C18A30] to-[#FFD67D]"
                                        textColor="text-white"
                                    />
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar