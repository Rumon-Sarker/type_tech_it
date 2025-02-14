'use client'

import React from 'react';

import Link from "next/link";
import { useState } from "react";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>

            {/* Navbar */}
            <nav className="fixed w-full top-[19px] left-0 z-10">
                <div className="container w-[1086.9px] h-[101.71px]  mx-auto flex justify-between items-center px-6">
                    {/* Logo  */}
                    <Link href="/">
                        <div className="w-[84.89px] h-[87px] bg-white"></div>
                    </Link>

                    {/* Menu Items */}
                    <div className="hidden md:flex font-semibold text-base items-center gap-12">
                        <Link href="/" className="text-white hover:text-orange-500">
                            Home
                        </Link>
                        <Link href="#about" className="text-white hover:text-orange-500">
                            About

                        </Link>
                        <Link href="#Properties" className="text-white hover:text-orange-500">
                            Properties
                        </Link>
                        <Link href="#Neighborhood" className="text-white hover:text-orange-500">
                            Neighborhood
                        </Link>
                        <Link href="#Blogs" className="text-white hover:text-orange-500">
                            Blogs
                        </Link>
                        <Link href="#contact" className="text-white hover:text-orange-500">
                            Contact
                        </Link>
                        {/* Language Selector */}
                        <div className='ml-12'>
                            <select className="w-[76px] font-semibold   h-[47px] bg-[#FF5A3C]  text-white text-center rounded-xl outline-none">
                                <option value="bn">ES</option>
                                <option value="bn">BN</option>
                                <option value="en">EN</option>
                            </select>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? (
                            <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                                <path d="M6 18L18 6M6 6l12 12" stroke="white" strokeWidth="2" />
                            </svg>
                        ) : (
                            <svg width="30" height="30" fill="white" viewBox="0 0 24 24">
                                <path d="M4 6h16M4 12h16M4 18h16" stroke="white" strokeWidth="2" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden bg-black bg-opacity-80 py-4 space-y-4 absolute w-full left-0">
                        <Link href="/" className="block text-white text-center" onClick={() => setIsOpen(false)}>
                            Home
                        </Link>
                        <Link href="/about" className="block text-white text-center" onClick={() => setIsOpen(false)}>
                            About
                        </Link>
                        <Link href="/product" className="block text-white text-center" onClick={() => setIsOpen(false)}>
                            Product
                        </Link>
                        <Link href="/contact" className="block text-white text-center" onClick={() => setIsOpen(false)}>
                            Contact
                        </Link>
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Navbar;