'use client'

import React, { useEffect } from 'react';

import Link from "next/link";
import { useState } from "react";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div>

            {/* Navbar */}
            <nav
                className={`fixed w-full lg:pt-5 pt-11 left-0 z-10 transition-all duration-300 ${scrolled ? "bg-white  shadow-md text-black" : "bg-transparent text-white"
                    }`}
            >
                <div className="container lg:h-[101.71px] h-[74px] mx-auto flex justify-between items-center px-6 lg:px-24 transition-all duration-300">
                    {/* Logo */}
                    <Link href="/">
                        <div className="lg:w-[84.89px] w-[74px] lg:h-[87px] h-[74px] bg-white"></div>
                    </Link>

                    {/* Menu Items */}
                    <div className="hidden md:flex font-semibold text-base items-center lg:gap-12 md:gap-7">
                        <Link href="/" className="hover:text-orange-500">Home</Link>
                        <Link href="#about" className="hover:text-orange-500">About</Link>
                        <Link href="#Properties" className="hover:text-orange-500">Properties</Link>
                        <Link href="#Neighborhood" className="hover:text-orange-500">Neighborhood</Link>
                        <Link href="#Blogs" className="hover:text-orange-500">Blogs</Link>
                        <Link href="#contact" className="hover:text-orange-500">Contact</Link>

                        {/* Language Selector */}
                        <div className="lg:ml-12 ml-0">
                            <select className="w-[76px] font-semibold h-[47px] bg-[#FF5A3C] text-white text-center rounded-xl outline-none">
                                <option value="es">ES</option>
                                <option value="bn">BN</option>
                                <option value="en">EN</option>
                            </select>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='flex md:hidden items-center gap-4'>
                        <button className=" w-[43.52px] mx-auto flex items-center h-[40.95px] bg-opacity-40 bg-gray-300 justify-center text-center " onClick={() => setIsOpen(!isOpen)}>
                            {isOpen ? ""
                                //  (
                                //     <svg width="30" height="30" fill="black" viewBox="0 0 24 24">
                                //         <path d="M6 18L18 6M6 6l12 12" stroke="black" strokeWidth="2" />
                                //     </svg>
                                // ) 
                                : (
                                    <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                                        <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" />
                                    </svg>
                                )}
                        </button>

                        <div className=" border border-[#FF5A3C]">
                            <h1 className="w-[43.52px] bg-transparent text-2xl font-nunito flex items-center justify-center font-semibold h-[40px]   text-center rounded-xl outline-none">
                                ES
                            </h1>
                        </div>

                    </div>
                </div>


                {/* Mobile Menu with Animation */}
                <div className='flex items-center'>
                    <div
                        className={`fixed top-0 left-0 w-full h-full bg-[#FF5A3C] bg-opacity-95 transform 
        ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"} 
        transition-all duration-700 ease-in-out 
        origin-top-left flex flex-col items-center justify-center space-y-6`}
                    >
                        <button className="absolute top-4 right-6 text-white text-3xl" onClick={() => setIsOpen(false)}>
                            X
                        </button>
                        <Link href="/" className="text-white text-xl transition-colors duration-400 hover:text-black " onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="#about" className="text-white transition-colors duration-400 hover:text-black text-xl" onClick={() => setIsOpen(false)}>About</Link>
                        <Link href="#properties" className="text-white transition-colors duration-400 hover:text-black text-xl" onClick={() => setIsOpen(false)}>Properties</Link>
                        <Link href="#neighborhood" className="text-white transition-colors duration-400 hover:text-black text-xl" onClick={() => setIsOpen(false)}>Neighborhood</Link>
                        <Link href="#blogs" className="text-white transition-colors duration-400 hover:text-black text-xl" onClick={() => setIsOpen(false)}>Blogs</Link>
                        <Link href="#contact" className="text-white transition-colors duration-400 hover:text-black text-xl" onClick={() => setIsOpen(false)}>Contact</Link>

                    </div>

                </div>


            </nav>
        </div>
    );
};

export default Navbar;