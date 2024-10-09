'use client'

import React from 'react'
import { FaChevronDown } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='w-full flex flex-col lg:flex-row justify-center items-center'>
            <div className='w-full lg:w-1/2 min-h-screen flex flex-col justify-center lg:pl-16 items-start relative'>
                <div className='absolute inset-0 bg-black opacity-50 z-0'
                    style={{
                        backgroundImage: 'url("/chair.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                </div>

                <div className='relative z-10 flex flex-col justify-center items-center lg:items-start p-12'>
                    <h1 className='text-[#D9A536] font-bold text-2xl text-center'>CONTACT</h1>
                    <h2 className='text-white font-bold text-center text-4xl'>Get In Touch</h2>
                    <img src="/moustache.png" alt="moustache" className='w-52' />
                    <p className='text-white'>
                        Suspendisse pretium felis dolor, sed placerat diam blandit vitae.
                        Sed eu nisl massa. Phasellus vehicula tristique orci ut ultrices.
                        Duis eu libero augue. In vulputate sodales tempus. Phasellus dolor orci,
                        consectetur in tincidunt eget, consectetur non orci.
                    </p>
                </div>
            </div>

            <div className='w-full lg:w-1/2 min-h-screen flex flex-col justify-center pl-6 lg:pl-16 items-center relative'>
                <div className='absolute inset-0 bg-black opacity-50 z-0'
                    style={{
                        backgroundImage: 'url("/map.png")',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}>
                </div>
                <div className='w-full relative z-10 flex flex-col justify-center items-center gap-y-8'>
                    <h1 className='text-[#D9A536] text-center font-bold text-3xl'>Make An Appointment</h1>
                    <p className='text-center'>Barber Is A Person Whose Occupation Is Mainly To Cut Dress Groom</p>

                    <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-4'>
                        <button className='w-[90%] h-12 border-1 border-black outline pl-4 text-start text-white'>Name</button>
                        <button className='w-[90%] h-12 border-1 border-black outline pl-4 text-start text-white'>Email</button>
                        <button className='w-[90%] h-12 border-1 border-black outline pl-4 text-start text-white'>Phone</button>
                        <button className='w-[90%] h-12 border-1 border-black outline pl-4 text-start text-white'>Time</button>
                        <button className='w-[90%] h-12 border-1 border-black outline px-4 text-start text-white flex flex-row justify-between items-center'>
                            Services <FaChevronDown />
                        </button>
                        <button className='w-[90%] h-12 border-1 border-black outline px-4 text-start text-white flex flex-row justify-between items-center'>
                            Choose Barber <FaChevronDown />
                        </button>
                    </div>

                    <button className='w-1/2 h-16 bg-[#CCA34C] text-center text-white text-lg lg:text-3xl'>Make An Appointment</button>
                </div>
            </div>
        </div>
    )
}

export default Contact