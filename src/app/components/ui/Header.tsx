"use client";

import React, { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='flex justify-between m-14 items-center'>
            {/* Hamburger Menu Icon for small screens */}
            <div className="lg:hidden" onClick={toggleMenu}>
                <button className="text-gray-700 hover:text-gray-900 focus:outline-none">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>

            {/* Horizontal Menu for large screens */}
            <ul className="gap-6 hidden lg:flex justify-start font-montserrat font-bold text-2xl drop-shadow-md">
                <li>
                    <a href="#hero" className='hover:animate-bounce hover:underline decoration-blue-500 decoration-3 decoration-wavy'>
                        <h1>Home</h1>
                    </a>
                </li>
                <li>
                    <a href="#about" className='hover:animate-bounce hover:underline decoration-blue-500 decoration-3 decoration-wavy'>
                        About
                    </a>
                </li>
                <li>
                    <a href="#project" className='hover:animate-bounce hover:underline decoration-blue-500 decoration-3 decoration-wavy'>
                        Project
                    </a>
                </li>
                <li>
                    <a href="#contact" className='hover:animate-bounce hover:underline decoration-blue-500 decoration-3 decoration-wavy'>
                        Contact
                    </a>
                </li>
            </ul>

            {/* Mobile menu for small screens */}
            <ul className={`z-20 gap-6 flex-col flex justify-start font-montserrat font-bold text-2xl drop-shadow-md absolute top-20 left-0 bg-white w-full p-6 lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
                <li>
                    <a href="#hero" className='hover:animate-bounce hover:underline decoration-blue-500 decoration-3 decoration-wavy'>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#about" className='hover:animate-bounce hover:underline decoration-blue-500 decoration-3 decoration-wavy'>
                        About
                    </a>
                </li>
                <li>
                    <a href="#project" className='hover:animate-bounce hover:underline decoration-blue-500 decoration-3 decoration-wavy'>
                        Project
                    </a>
                </li>
                <li>
                    <a href="#contact" className='hover:animate-bounce hover:underline decoration-blue-500 decoration-3 decoration-wavy'>
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}
