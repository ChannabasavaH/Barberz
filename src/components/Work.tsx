'use client'

import React from 'react'

const Work = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center gap-y-10 bg-white'>
        <p className='text-black text-center text-4xl font-bold pt-10'>Our Work</p>
        <img src="/moustache.png" alt="moustache" className='w-44' />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4 pb-10'>
            <img src="/workImg1.png" alt="workImg1" />
            <img src="/workImg2.png" alt="workImg2" />
            <img src="/workImg3.png" alt="workImg3" />
            <img src="/workImg4.png" alt="workImg4" />
            <img src="/workImg5.png" alt="workImg5" />
            <img src="/workImg6.png" alt="workImg6" />
        </div>
    </div>
  )
}

export default Work