'use client'

import React, { useEffect, useState } from 'react';
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { GoVideo } from "react-icons/go";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen])

    return (
        <div className='w-full flex flex-col justify-center items-center'>
            {/* Top Bar */}
            <div className='w-full flex flex-col lg:flex-row justify-center items-center p-1'>
                <div className='w-full flex justify-center items-center gap-2'>
                    <BiSolidPhoneCall />
                    <p>+123456789</p>
                    <IoIosMail />
                    <p>barberz123@info.com</p>
                </div>
                <div className='w-full flex justify-center items-center gap-4'>
                    <FaFacebookF />
                    <FaTwitter />
                    <TbWorld />
                    <GoVideo />
                </div>
            </div>

            {/* Desktop Navbar */}
            <div className='w-full hidden md:flex justify-evenly items-center text-lg text-center'>
                <p>Home</p>
                <p className='flex flex-row items-center justify-center gap-x-2'>Services <FaChevronDown /></p>
                <p>About</p>
                <img src="/barberzlogo.png" alt="Barberz" className='w-28 h-24' />
                <p>Team</p>
                <p>Booking</p>
                <p>Contact Us</p>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className='md:hidden w-full flex justify-between items-center p-4'>
                <img src="/barberzlogo.png" alt="Barberz" className='w-20 h-16' />
                <button onClick={toggleMenu}>
                    {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center gap-6 transition-transform duration-500 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                {/* Close Icon */}
                <button
                    onClick={toggleMenu}
                    className="absolute top-6 right-6 text-white"
                >
                    <FaTimes size={30} />
                </button>

                <p onClick={toggleMenu} className='cursor-pointer'>Home</p>
                <p onClick={toggleMenu} className='cursor-pointer flex flex-row items-center justify-center gap-x-2'>
                    Services <FaChevronDown />
                </p>
                <p onClick={toggleMenu} className='cursor-pointer'>About</p>
                <p onClick={toggleMenu} className='cursor-pointer'>Team</p>
                <p onClick={toggleMenu} className='cursor-pointer'>Booking</p>
                <p onClick={toggleMenu} className='cursor-pointer'>Contact Us</p>
            </div>
        </div>
    );
};

export default Navbar;
