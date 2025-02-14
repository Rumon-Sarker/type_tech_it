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
                className={`fixed w-full top-0 left-0 z-10 transition-all duration-300 ${scrolled ? "bg-white shadow-md text-black" : "bg-transparent text-white"
                    }`}
            >
                <div className="container h-[101.71px] mx-auto flex justify-between items-center px-6 md:px-24 transition-all duration-300">
                    {/* Logo */}
                    <Link href="/">
                        <div className="w-[84.89px] h-[87px] bg-white"></div>
                    </Link>

                    {/* Menu Items */}
                    <div className="hidden md:flex font-semibold text-base items-center gap-12">
                        <Link href="/" className="hover:text-orange-500">Home</Link>
                        <Link href="#about" className="hover:text-orange-500">About</Link>
                        <Link href="#Properties" className="hover:text-orange-500">Properties</Link>
                        <Link href="#Neighborhood" className="hover:text-orange-500">Neighborhood</Link>
                        <Link href="#Blogs" className="hover:text-orange-500">Blogs</Link>
                        <Link href="#contact" className="hover:text-orange-500">Contact</Link>

                        {/* Language Selector */}
                        <div className="ml-12">
                            <select className="w-[76px] font-semibold h-[47px] bg-[#FF5A3C] text-white text-center rounded-xl outline-none">
                                <option value="es">ES</option>
                                <option value="bn">BN</option>
                                <option value="en">EN</option>
                            </select>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden z-20" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <svg width="30" height="30" fill="black" viewBox="0 0 24 24">
                                <path d="M6 18L18 6M6 6l12 12" stroke="black" strokeWidth="2" />
                            </svg>
                        ) : (
                            <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                                <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu with Animation
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-[#FF5A3C] bg-opacity-90 transform ${isOpen ? "translate-x-0" : "-translate-x-full"
                        } transition-transform duration-300 ease-in-out flex flex-col items-center justify-center space-y-6`}
                >
                    <button className="absolute top-4 right-6 text-white text-3xl" onClick={() => setIsOpen(false)}>
                        ✖
                    </button>
                    <Link href="/" className="text-white text-xl" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="#/about" className="text-white text-xl" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="#/product" className="text-white text-xl" onClick={() => setIsOpen(false)}>Product</Link>
                    <Link href="#/contact" className="text-white text-xl" onClick={() => setIsOpen(false)}>Contact</Link>
                </div> */}

                {/* Mobile Menu with Animation */}
                <div
                    className={`fixed top-0 left-0 w-full h-full bg-[#FF5A3C] bg-opacity-95 transform 
        ${isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0"} 
        transition-all duration-700 ease-in-out 
        origin-top-left flex flex-col items-center justify-center space-y-6`}
                >
                    <button className="absolute top-4 right-6 text-white text-3xl" onClick={() => setIsOpen(false)}>

                    </button>
                    <Link href="/" className="text-white text-xl" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link href="#about" className="text-white text-xl" onClick={() => setIsOpen(false)}>About</Link>
                    <Link href="#product" className="text-white text-xl" onClick={() => setIsOpen(false)}>Product</Link>
                    <Link href="#contact" className="text-white text-xl" onClick={() => setIsOpen(false)}>Contact</Link>
                </div>

            </nav>
        </div>
    );
};

export default Navbar;