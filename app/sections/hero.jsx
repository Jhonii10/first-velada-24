import React from 'react'
import AnimateX from '../components/animateX'
import Link from 'next/link'
import { MapPinIcon } from '@heroicons/react/24/solid'

export default function Hero() {
  return (
    <div className='flex flex-col items-center text-center'> 
      <AnimateX/>
      <div className='flex flex-col gap-1'>
      <h2 className='text-lg font-bold uppercase lg:text-2xl text-neutral-300 underline-transition mt-6 flex max-w-sm flex-col transition-all duration-300 ease-in-out hover:text-accent motion-reduce:transition-none '>La primera velada del año</h2>
      <time className='text-2xl font-semibold '>08 de Junio</time>
      <Link 
        href='https://www.google.com/maps/place/Finca+Manabi/@3.6193633,-76.3891178,17z/data=!3m1!4b1!4m6!3m5!1s0x8e3a01abdc6dabd1:0x48b0b7e75b385b62!8m2!3d3.6193633!4d-76.3865429!16s%2Fg%2F11ts051b14?entry=ttu'
        className='text-md'
        >
        <div className='flex justify-center items-center '>
            <MapPinIcon className='h-5 w-6 text-white'/>
            Finca Manabi
        </div>
      </Link>

      <span
        tabIndex={0}
        className="text-md text-accent text-center text-red-700 pt-2"
      >
        ¡Cupos Agotados!
      </span>
    
     
      </div>
      
    </div>
  )
}
