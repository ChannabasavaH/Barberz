'use client'

import React from 'react'

const Services = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center gap-6 bg-[#FDF8E9]'>
            <div className='w-full flex flex-col justify-center items-center gap-4 text-black text-center'>
                <h1 className='text-amber-300 font-bold text-2xl'>SERVICES</h1>
                <h2 className='font-bold text-4xl'>Our Services</h2>
                <img src="/moustache.png" alt="moustache" className='w-52' />
            </div>
            <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-x-8 text-black text-center mb-12 px-8'>
                <div className='flex flex-col justify-center items-center p-2 gap-y-4 bg-white rounded-md'>
                    <img src="/scissors.png" alt="scissors" />
                    <h1 className='font-bold text-xl'>Hair Cut</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing.
                        Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.
                    </p>
                    <button className='text-amber-300 text-center w-1/2 h-12 border-2 border-amber-300 border-outline rounded-md'>READ MORE</button>
                </div>
                <div className='flex flex-col justify-center items-center p-2 gap-y-4 bg-white rounded-md'>
                    <img src="/shaving.png" alt="shaving" />
                    <h1 className='font-bold text-xl'>Shaving</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing.
                        Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.
                    </p>
                    <button className='text-amber-300 text-center w-1/2 h-12 border-2 border-amber-300 border-outline rounded-md'>READ MORE</button>
                </div>
                <div className='flex flex-col justify-center items-center p-2 gap-y-4 bg-white rounded-md'>
                    <img src="/hair-dye-brush.png" alt="hair-dye-brush" />
                    <h1 className='font-bold text-xl'>Hair Color</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing.
                        Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.
                    </p>
                    <button className='text-amber-300 text-center w-1/2 h-12 border-2 border-amber-300 border-outline rounded-md'>READ MORE</button>
                </div>
                <div className='flex flex-col justify-center items-center p-2 gap-y-4 bg-white rounded-md'>
                    <img src="/trimmer.png" alt="trimmer" />
                    <h1 className='font-bold text-xl'>Beard Trim</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Risus feugiat in ante metus dictum at. Dolor sit amet consectetur adipiscing.
                        Et malesuada fames ac turpis egestas. Neque viverra justo nec ultrices dui sapien.
                    </p>
                    <button className='text-amber-300 text-center w-1/2 h-12 border-2 border-amber-300 border-outline rounded-md'>READ MORE</button>
                </div>
            </div>
        </div>
    )
}

export default Services