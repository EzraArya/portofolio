import React from 'react';

export default function Header(){
    return (
        <nav className='flex justify-between m-14'>
            <div>
                <ul className="gap-6 flex justify-start font-montserrat font-bold text-2xl drop-shadow-md">
                    <li>
                        <a href="#hero" className='hover:animate-bounce hover:underline decoration-blue-500 decoration-3 decoration-wavy'>
                            <h1>
                                Home
                            </h1>
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
            </div>
            <div>
                <button></button>
            </div>
        </nav>
    )
}