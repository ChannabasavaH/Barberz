'use client'

import React from 'react'

const Clients = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-y-8 bg-white pt-8'>
        <p className='text-black text-4xl font-bold text-center'>Our Clients</p>
        <img src="/moustache.png" alt="moustache" className='w-44'/>
        <div className='flex flex-col lg:flex-row justify-center items-center gap-x-10'>
            <img src="/hairsalon1.png" alt="hairsalon1" />
            <img src="/hairsalon2.png" alt="hairsalon2" />
            <img src="/hairsalon3.png" alt="hairsalon3" />
            <img src="/hairsalon4.png" alt="hairsalon4" />
        </div>
    </div>
  )
}

export default Clients