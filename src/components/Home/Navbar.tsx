"use client"

import { useState } from "react"
import Image from "next/image"
import { IoMdSearch, IoMdMenu, IoMdClose } from "react-icons/io"
import Button from "./Button"

const navTxtColor = 'bg-gradient-to-r from-[#CCA24E] via-[#C18A30] to-[#FFD67D] bg-clip-text text-transparent';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    const navItems = ["الرئيسية", "خدماتنا", "مشاريعنا", "خدمة الدراسة الأولية المجانية", "تواصل معنا"]

    return (
        <header className="w-full z-990 absolute top-0">
            <nav className="relative">
                {/* Desktop Navigation */}
                <div className="hidden lg:flex justify-between items-center w-full h-full">
                    <div className="cursor-pointer ml-[8%] xl:ml-36">
                        <Button
                            text="تسجيل دخول"
                            backgroundColor="bg-gradient-to-r from-[#CCA24E] via-[#C18A30] to-[#FFD67D]"
                            textColor="text-white"
                        />
                    </div>

                    <div className="bg-[#15253E] py-2 px-8 xl:px-12">
                        <ul dir="rtl" className={`transition-colors duration-300 flex justify-center items-center gap-3 xl:gap-6 ${navTxtColor}`}>
                            <li className="flex-shrink-0">
                                <Image
                                    src="/assets/imgs/main-logo.png"
                                    alt="logo"
                                    width={95}
                                    height={46}
                                    className="w-auto h-10 xl:h-12"
                                />
                            </li>

                            {navItems.map((item, index) => (
                                <li key={index} className={`cursor-pointer text-xs xl:text-sm hover:text-[#d4b578]`}>
                                    <span className={`${index === 0 ? navTxtColor : ''}`}>{item}</span>
                                </li>
                            ))}

                            <li className="mx-3 xl:mx-6 text-[#c0a060]">
                                <IoMdSearch className="text-lg cursor-pointer" />
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className="lg:hidden">
                    <div className="flex z-890 justify-between items-center p-4 bg-[#15253E]">
                        <div dir="rtl">
                            <Image src="/assets/imgs/main-logo.png" alt="logo" width={64} height={32} className="w-auto h-8" />
                        </div>
                        <button onClick={toggleMenu} className="text-white text-xl p-2">
                            {isMenuOpen ? <IoMdClose /> : <IoMdMenu />}
                        </button>
                    </div>

                    {isMenuOpen && (
                        <div className="absolute z-88 top-full left-0 w-full bg-[#15253E] shadow-lg">
                            <ul dir="rtl" className="flex flex-col text-white">
                                {navItems.map((item, index) => (
                                    <li key={index} className="border-b border-gray-600 last:border-b-0">
                                        <a href="#" className="block px-6 py-4 hover:bg-[#1a2b42]" onClick={() => setIsMenuOpen(false)}>
                                            {item}
                                        </a>
                                    </li>
                                ))}
                                <li className="border-b border-gray-600">
                                    <div className="flex items-center px-6 py-4 hover:bg-[#1a2b42]">
                                        <IoMdSearch className="text-lg mr-2" />
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
