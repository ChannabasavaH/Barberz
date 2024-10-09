'use client'

import React from 'react'

const Appointment = () => {
    return (
        <div className='w-full min-h-screen flex flex-col justify-center p-4 lg:pl-16 items-center relative'>
            <div className='absolute inset-0 bg-black opacity-50 z-0'
                style={{
                    backgroundImage: 'url("/backgroundImg3.png")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}>
            </div>
            <div className='w-full relative z-10 flex flex-col justify-center items-center text-white text-center gap-y-10'>
                <h1 className='text-[#D9A536] text-lg lg:text-3xl font-bold'>BEST BARBERSHOP IN THE CITY</h1>
                <h2 className='w-full lg:w-1/2 text-3xl lg:text-6xl font-bold'>Making You Look Good Is In Our Heritage.</h2>
                <p className='font-semibold text-lg'>Barber is a person whose occupation is mainly to cut dress groome style
                    and shave men’s and boy’s hair
                </p>
                <button className='text-center text-lg font-bold w-1/2 lg:w-1/4 h-16 bg-[#D9A536]'>MAKE AN APPOINTMENT</button>
            </div>
        </div>
    )
}

export default Appointment
