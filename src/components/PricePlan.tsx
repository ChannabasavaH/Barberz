'use client'

import React, { useRef } from 'react'
import { easeInOut, motion, useInView } from 'framer-motion'
import { Duplex } from 'stream';

const PricePlan = () => {

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true })

    return (
        <motion.div
            ref={ref}
            className='w-full flex flex-col justify-center items-center bg-white'
        >
            <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 1, ease: easeInOut }}
                className='w-full bg-[#FDF8E9] flex flex-col justify-center items-center m-8'
            >
                <div className='mt-4 flex flex-col justify-center items-center gap-y-4'>
                    <h1 className='text-center text-4xl font-bold text-black'>Barbershop Pricing Plan</h1>
                    <img src="/moustache.png" alt="moustache" className='w-44' />
                </div>
                <div className='p-12 grid grid-cols-1 lg:grid-cols-2 gap-10'>
                    <div className='flex flex-col justify-center items-center lg:items-start gap-y-4'>
                        <div className='flex flex-row justify-center items-center lg:items-start gap-x-8'>
                            <h2 className='text-black text-2xl text-center'>Hair Cut</h2>
                            <p className='text-[#D9A536]'>.................</p>
                            <p className='font-bold text-2xl text-[#D9A536] text-center'>$10</p>
                        </div>
                        <p className='text-black text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center lg:items-start gap-y-4'>
                        <div className='flex flex-row justify-center items-center lg:items-start gap-x-8'>
                            <h2 className='text-black text-2xl text-center'>Shaving</h2>
                            <p className='text-[#D9A536]'>.................</p>
                            <p className='font-bold text-2xl text-[#D9A536] text-center'>$40</p>
                        </div>
                        <p className='text-black text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center lg:items-start gap-y-4'>
                        <div className='flex flex-row justify-center items-center lg:items-start gap-x-8'>
                            <h2 className='text-black text-2xl text-center'>Hair Styling</h2>
                            <p className='text-[#D9A536]'>.................</p>
                            <p className='font-bold text-2xl text-[#D9A536] text-center'>$25</p>
                        </div>
                        <p className='text-black text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center lg:items-start gap-y-4'>
                        <div className='flex flex-row justify-center items-center lg:items-start gap-x-8'>
                            <h2 className='text-black text-2xl text-center'>Beard Trimming</h2>
                            <p className='text-[#D9A536]'>.................</p>
                            <p className='font-bold text-2xl text-[#D9A536] text-center'>$25</p>
                        </div>
                        <p className='text-black text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center lg:items-start gap-y-4'>
                        <div className='flex flex-row justify-center items-center lg:items-start gap-x-8'>
                            <h2 className='text-black text-2xl text-center'>Hair Trimming</h2>
                            <p className='text-[#D9A536]'>.................</p>
                            <p className='font-bold text-2xl text-[#D9A536] text-center'>$30</p>
                        </div>
                        <p className='text-black text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center lg:items-start gap-y-4'>
                        <div className='flex flex-row justify-center items-center lg:items-start gap-x-8'>
                            <h2 className='text-black text-2xl text-center'>Face Cleaning</h2>
                            <p className='text-[#D9A536]'>.................</p>
                            <p className='font-bold text-2xl text-[#D9A536] text-center'>$60</p>
                        </div>
                        <p className='text-black text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center lg:items-start gap-y-4'>
                        <div className='flex flex-row justify-center items-center lg:items-start gap-x-8'>
                            <h2 className='text-black text-2xl text-center'>Kids Hair Cut</h2>
                            <p className='text-[#D9A536]'>.................</p>
                            <p className='font-bold text-2xl text-[#D9A536] text-center'>$15</p>
                        </div>
                        <p className='text-black text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    </div>
                    <div className='flex flex-col justify-center items-center lg:items-start gap-y-4'>
                        <div className='flex flex-row justify-center items-center lg:items-start gap-x-8'>
                            <h2 className='text-black text-2xl text-center'>Mustache Trim</h2>
                            <p className='text-[#D9A536]'>.................</p>
                            <p className='font-bold text-2xl text-[#D9A536] text-center'>$12</p>
                        </div>
                        <p className='text-black text-center'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center mb-12'>
                    <button className='text-white w-32 h-12 text-center bg-[#D9A536]'>VIEW MORE</button>
                </div>
            </motion.div>
        </motion.div>
    )
}

export default PricePlan