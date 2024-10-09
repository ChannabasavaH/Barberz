'use client'

import React from 'react'
import { FaPhoneVolume, FaMapLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center relative'>
            <div className='absolute inset-0 bg-black opacity-50 z-0'
                style={{
                    backgroundImage: 'url("/backgroundImg4.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
            </div>
            <div className='w-full relative z-10 grid grid-cols-1 lg:grid-cols-4 gap-6 pt-10 p-2'>
                <div className='flex flex-col justify-center items-center gap-y-8 p-x-6'>
                    <img src="/barberzlogo.png" alt="barberzlogo" />
                    <p>There are many variations of passages of lorem ipsum available,
                        but the majority have suffered alteration in some form.
                    </p>
                    <input type="email" placeholder='Email*' className='pl-2' />
                    <button className='bg-[#D9A536D4] w-1/2 md:w-1/2 h-8 rounded-2xl'>SUBSCRIBE</button>
                </div>
                <div className='flex flex-col justify-center items-center gap-y-4 p-x-6'>
                    <h1 className='text-white text-2xl text-bold text-center'>QUICK LINKS</h1>
                    <img src="/moustache.png" alt="moustache" className='w-32' />
                    <div className='flex flex-col justify-center items-start gap-y-4'>
                        <div className='flex justify-center items-center gap-x-4'>
                            <img src="/scissors.png" alt="scissors" className='h-4 w-4 rotate-90' />
                            <h4>HOME</h4>
                        </div>
                        <div className='flex justify-center items-center gap-x-4'>
                            <img src="/scissors.png" alt="scissors" className='h-4 w-4 rotate-90' />
                            <h4>ABOUT US</h4>
                        </div>
                        <div className='flex justify-center items-center gap-x-4'>
                            <img src="/scissors.png" alt="scissors" className='h-4 w-4 rotate-90' />
                            <h4>GALLERY</h4>
                        </div>
                        <div className='flex justify-center items-center gap-x-4'>
                            <img src="/scissors.png" alt="scissors" className='h-4 w-4 rotate-90' />
                            <h4>CONTACT US</h4>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-y-4 p-x-6'>
                    <h1 className='text-white text-2xl text-bold text-center'>SERVICES</h1>
                    <img src="/moustache.png" alt="moustache" className='w-32' />
                    <div className='flex flex-col justify-center items-start gap-y-4'>
                        <div className='flex justify-center items-center gap-x-4'>
                            <img src="/scissors.png" alt="scissors" className='h-4 w-4 rotate-90' />
                            <h4>HAIRS</h4>
                        </div>
                        <div className='flex justify-center items-center gap-x-4'>
                            <img src="/scissors.png" alt="scissors" className='h-4 w-4 rotate-90' />
                            <h4>BEAUTY</h4>
                        </div>
                        <div className='flex justify-center items-center gap-x-4'>
                            <img src="/scissors.png" alt="scissors" className='h-4 w-4 rotate-90' />
                            <h4>SPA</h4>
                        </div>
                        <div className='flex justify-center items-center gap-x-4'>
                            <img src="/scissors.png" alt="scissors" className='h-4 w-4 rotate-90' />
                            <h4>MASSAGE </h4>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center gap-y-4 p-x-6'>
                    <h1 className='text-white text-2xl text-bold text-center'>CONTACT</h1>
                    <img src="/moustache.png" alt="moustache" className='w-32' />
                    <div className='flex flex-col justify-center items-center lg:items-start gap-y-4'>
                        <div className='flex flex-row justify-center items-center gap-x-4'>
                            <FaPhoneVolume />
                            <p>+123456789</p>
                        </div>
                        <div className='flex flex-row justify-center items-center lg:items-start gap-x-4'>
                            <IoIosMail />
                            <p>barberz.123@info.com</p>
                        </div>
                        <div className='flex flex-row justify-center items-center lg:items-start gap-x-4'>
                            <FaMapLocationDot />
                            <p>GOLDEN STREET, CHINATOWN SAN FRANCISCO</p>
                        </div>
                    </div>
                    <div className='w-full flex flex-row justify-center lg:justify-start items-center lg:items-start gap-x-4'>
                        <FaFacebookF />
                        <FaTwitter />
                        <FaYoutube />
                        <AiFillInstagram />
                    </div>
                </div>
            </div>
            <p>Copyright &copy; 2021 All Rights Reversed</p>
        </div>
    )
}

export default Footer