'use client'

import React, { useRef } from 'react'
import { easeInOut, motion, useInView } from 'framer-motion'

const Introduction = () => {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      className='w-full min-h-screen flex flex-col lg:flex-row justify-center items-center bg-white gap-x-8 p-4 overflow-x-hidden'
    >
      <motion.div
        initial={{ opacity: 0, x: '-30%' }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: easeInOut }}
        className='w-full lg:w-1/2 flex flex-col justify-center items-center text-black text-center gap-y-6'
      >
        <h1 className='text-amber-400 text-2xl font-semibold'>INTRODUCING</h1>
        <h2 className='lg:w-2/3 text-gray-700 text-4xl font-bold'>BARBERZ.. The Barbershop Since 1990</h2>
        <img src="/barber.png" alt="Barber" />
        <p className='text-md'>Barber is a person whose occupation is mainly to cut dress groom style and shave men's and boys' hair.
          A barber's place of work is known as a "barbershop" or a "barber's".
          Barbershops are also places of social interaction and public discourse.
          In some instances, barbershops are also public forums.
        </p>
        <button className='w-1/3 font-semibold text-white text-lg lg:text-2xl bg-amber-300 h-20'>MORE ABOUT US</button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: '30%' }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: easeInOut }}
        className='pt-8'
      >
        <img src="/secondDivImg.png" alt="BarberImg" />
      </motion.div>
    </motion.div>
  )
}

export default Introduction