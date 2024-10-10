'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Specialists = () => {

    return (
        <div className='w-full'>
            <div className='w-full p-8 flex flex-col lg:flex-row justify-center items-center gap-10 bg-[#FDF8E9]'>
                <div className='flex flex-col justify-center items-center text-black gap-y-4'>
                    <p className='font-bold text-4xl'>2000+</p>
                    <p>HAPPY CLIENTS</p>
                </div>
                <img src="/scissors.png" alt="scissors" />
                <div className='flex flex-col justify-center items-center text-black gap-y-4'>
                    <p className='font-bold text-4xl'>500</p>
                    <p>HAIR CUTS</p>
                </div>
                <img src="/scissors.png" alt="scissors" />
                <div className='flex flex-col justify-center items-center text-black gap-y-4'>
                    <p className='font-bold text-4xl'>150</p>
                    <p>STYLERS</p>
                </div>
                <img src="/scissors.png" alt="scissors" />
                <div className='flex flex-col justify-center items-center text-black gap-y-4'>
                    <p className='font-bold text-4xl'>35</p>
                    <p>BRANCHES</p>
                </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center bg-white'>
                <div className='flex flex-col justify-center items-center gap-y-4'>
                    <h1 className='text-[#D9A536] font-bold text-3xl text-center'>SPECIALISTS</h1>
                    <h2 className='text-black font-bold text-3xl text-center'>Our Team</h2>
                    <img src="/moustache.png" alt="moustache" />
                </div>
                <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-x-6 mt-4 p-4'>
                    {['david', 'paul', 'charlie'].map((name, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -10, boxShadow: '0px 10px 20px rgba(0,0,0,0.3)', scale: 1.05 }}
                            className='flex flex-col justify-center items-center'>
                            <img src={`/${name}.png`} alt={name} />
                            <div className='w-full flex flex-col justify-center items-center gap-y-2 bg-[#B78E36] p-4 mb-4'>
                                <p className='text-white font-bold text-center text-3xl'>{name.toUpperCase()}</p>
                                <p className='font-semibold'>{name === 'david' ? 'Hair Cut Specialist' : name === 'paul' ? 'Beard & Trimming' : 'Hair Cut Specialist'}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Specialists