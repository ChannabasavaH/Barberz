'use client'

import React from 'react'

const Testimonials = () => {
    return (
        <div className='w-full min-h-screen flex flex-col justify-center p-4 lg:pl-16 items-center relative'>
            <div className='absolute inset-0 bg-black opacity-50 z-0'
                style={{
                    backgroundImage: 'url("/backgroundImg2.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
            </div>
            <div className='w-full relative z-10 flex flex-col justify-center items-center gap-y-4'>
                <div className='flex flex-col justify-center items-center gap-y-4'>
                    <h1 className='font-bold text-3xl text-center text-[#D9A536]'>TESTIMONIALS</h1>
                    <p className='font-bold text-4xl text-center text-white'>Hear From Our Customers</p>
                    <img src="/moustache.png" alt="moustache" />
                </div>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-x-4'>
                    <div className='w-full lg:w-1/3 flex flex-row justify-center m-4 lg:m-0 itmes-center lg:items-start bg-[#252424] p-4 gap-x-4'>
                        <div className='flex justify-center items-start lg:items-center'>
                            <img src="/reviewImg1.png" alt="reviewImg1" />
                        </div>
                        <div className='flex flex-col justify-center items-center lg:items-start relative gap-y-6'>
                            <p>"Just came back to home and should say that it is definitely a great experience.
                                I would recommend it for everyone who needs a bike for a short term or want to t...”
                            </p>
                            <div className='flex flex-col justify-center items-center lg:items-start gap-y-2'>
                                <h1 className='text-[#D9A536] font-bold text-center text-4xl'>Robert Fox</h1>
                                <p>Writer</p>
                                <div className='flex flex-row justify-center items-center'>
                                    <img src="/star.png" alt="star" />
                                    <img src="/star.png" alt="star" />
                                    <img src="/star.png" alt="star" />
                                    <img src="/star.png" alt="star" />
                                    <img src="/emptystar.png" alt="star" />
                                </div>
                            </div>
                            <img src="/quotes.png" alt="quotes" className='absolute right-0 bottom-0 w-8 lg:w-16' />
                        </div>
                    </div>
                    <div className='w-full lg:w-1/3 flex flex-row justify-center m-4 lg:m-0 itmes-center lg:items-start bg-[#252424] p-4 gap-x-4'>
                        <div className='flex justify-center items-start lg:items-center'>
                            <img src="/reviewImg2.png" alt="reviewImg2" />
                        </div>
                        <div className='flex flex-col justify-center items-center lg:items-start relative gap-y-6'>
                            <p>"Amazing service! Claire helped me to reduce the shipping price a little
                                and shipped it immediately after purchasing. The amethyst cave I got is a beauty and I c...”
                            </p>
                            <div className='flex flex-col justify-center items-center lg:items-start gap-y-2'>
                                <h1 className='text-[#D9A536] font-bold text-center text-4xl'>Marvin McKenny</h1>
                                <p>Businessman</p>
                                <div className='flex flex-row justify-center items-center'>
                                    <img src="/star.png" alt="star" />
                                    <img src="/star.png" alt="star" />
                                    <img src="/star.png" alt="star" />
                                    <img src="/star.png" alt="star" />
                                    <img src="/star.png" alt="star" />
                                </div>
                            </div>
                            <img src="/quotes.png" alt="quotes" className='absolute right-0 bottom-0 w-8 lg:w-16' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials