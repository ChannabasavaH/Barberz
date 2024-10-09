'use client'

import React from 'react'

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
                    <div>
                        <img src="/david.png" alt="david" />
                        <div className='flex flex-col justify-center items-center gap-y-2 bg-[#B78E36] p-4 mb-4'>
                            <p className='text-white font-bold text-center text-3xl'>DAVID</p>
                            <p className='font-semibold'>Hair Cut Specialists</p>
                        </div>
                    </div>
                    <div>
                        <img src="/paul.png" alt="paul" />
                        <div className='flex flex-col justify-center items-center gap-y-2 bg-[#B78E36] p-4 mb-4'>
                            <p className='text-white font-bold text-center text-3xl'>PAUL</p>
                            <p className='font-semibold'>Beard & Trimming</p>
                        </div>
                    </div>
                    <div>
                        <img src="/charlie.png" alt="charlie" />
                        <div className='flex flex-col justify-center items-center gap-y-2 bg-[#B78E36] p-4 mb-4'>
                            <p className='text-white font-bold text-center text-3xl'>CHARLIE</p>
                            <p className='font-semibold'>Hair Cut Specialists</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specialists