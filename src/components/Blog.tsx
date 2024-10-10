'use client'

import React, { useRef } from 'react'
import { easeInOut, motion, useInView } from 'framer-motion'


const Blog = () => {


    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <div className='w-full flex flex-col justify-center items-center bg-white'>
            <div className='w-full flex flex-col justify-center items-center gap-y-6 text-center font-bold'>
                <h1 className='text-[#D9A536] text-lg lg:text-3xl pt-8'>NEWS FROM BLOG</h1>
                <h2 className='text-black text-2xl lg:text-5xl'>WHAT'S ON OUR MIND</h2>
                <img src="/moustache.png" alt="moustache" className='w-44' />
            </div>
            <motion.div
                ref={ref}
                className='w-full grid grid-cols-1 lg:grid-cols-3 gap-4 p-8 overflow-x-hidden'
            >
                {/* Blog Card 1 */}
                <motion.div
                    initial={{ opacity: 0, x: '20%' }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: easeInOut }}
                >
                    <div className="relative">
                        <img src="/blog1.png" alt="blog1" className="w-full" />
                        {/* Date container */}
                        <div className="absolute bottom-[-1rem] right-0 bg-[#D9A536] text-black font-semibold w-16 h-16 flex items-center justify-center z-10">
                            <p className="text-sm">Mar 20</p>
                        </div>
                    </div>
                    <div className="mt-6 pl-4 flex flex-col justify-start gap-y-2 border-l-2 border-l-[#D9A536]">
                        <p className="text-gray-400">BEARD STYLES / BY ADMIN</p>
                        <h6 className="text-black font-bold">The Best Barbershop In The Town</h6>
                        <p className="text-gray-400 text-sm w-2/3">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </motion.div>

                {/* Blog Card 2 */}
                <motion.div
                    initial={{ opacity: 0, x: '20%' }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: easeInOut }}
                >
                    <div className="relative">
                        <img src="/blog2.png" alt="blog2" className="w-full" />
                        <div className="absolute bottom-[-1rem] right-0 bg-[#D9A536] text-black font-semibold w-16 h-16 flex items-center justify-center z-10">
                            <p className="text-sm">Mar 20</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start mt-4 pl-4 gap-y-2 font-semibold border-l-2 border-l-[#D9A536]'>
                        <p className='text-gray-400'>BEARD STYLES / BY ADMIN</p>
                        <h6 className='text-black'>The Best Barbershop In The Town</h6>
                        <p className='text-gray-400 text-sm w-2/3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </motion.div>

                {/* Blog Card 3 */}
                <motion.div
                    initial={{ opacity: 0, x: '20%' }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 1, ease: easeInOut }}
                >
                    <div className="relative">
                        <img src="/blog3.png" alt="blog3" className="w-full" />
                        <div className="absolute bottom-[-1rem] right-0 bg-[#D9A536] text-black font-semibold w-16 h-16 flex items-center justify-center z-10">
                            <p className="text-sm">Mar 20</p>
                        </div>
                    </div>
                    <div className='flex flex-col justify-start mt-4 pl-4 gap-y-2 font-semibold border-l-2 border-l-[#D9A536]'>
                        <p className='text-gray-400'>BEARD STYLES / BY ADMIN</p>
                        <h6 className='text-black'>The Best Barbershop In The Town</h6>
                        <p className='text-gray-400 text-sm w-2/3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Blog;
