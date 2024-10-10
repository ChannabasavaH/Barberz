'use client'

import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Main = () => {
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center relative'
            style={{
                backgroundImage: 'url("/backgroundImg1.png")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}>
            <div className='w-full flex flex-col justify-center items-center z-10 bg-black bg-opacity-50 absolute top-0'>
                <Navbar />
            </div>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='w-full flex flex-col justify-center items-center gap-y-8 text-center p-2'
            >
                <h1 className='text-3xl font-bold lg:text-7xl text-white'>Our Hairstyle Enhances Your Smile!!</h1>
                <p className='lg:w-1/2 text-lg lg:text-2xl text-white'>
                    Our barbershop is the territory created purely for males who appreciate premium quality, time and flawless look.
                </p>
                <button className='w-1/2 lg:w-1/3 h-24 text-lg lg:text-2xl font-bold text-white text-center bg-amber-300'>
                    MAKE AN APPOINTMENT
                </button>
            </motion.div>
        </div>
    )
}

export default Main