import Link from 'next/link';
import React from 'react';

const Events = () => {
    return (
        <div className='mx-auto  max-w-6xl px-10  selection:bg-primary selection:text-secondary md:pt-20 lg:px-10'>
            <h3 className='text-2xl font-semibold  text-white text-center'>
                PlayList
            </h3>
            <p className='text-xl text-neutral-300 mt-4 text-center'>
              Aqui puedes enviar tus canciones favoritas 
            </p>
            <div className='scroll-horizontal items-top mt-6 flex flex-col flex-wrap justify-center gap-9 md:flex-row *:md:basis-1/3 '>
            <Link
                href='/agregar-cancion'
                className='inline-block text-center skew-x-[-21deg] cursor-pointer border-2 border-primary font-semibold uppercase px-5 py-2.5 before:absolute before:-inset-0.5 before:origin-right before:scale-x-0 before:bg-primary hover:scale-110 hover:text-secondary hover:before:origin-left hover:before:scale-x-100 aria-disabled:pointer-events-none aria-disabled:border-[#666] aria-disabled:bg-[#666] aria-disabled:text-[#111] ease-in motion-safe:transition-[color,transform] motion-safe:before:transition-transform motion-safe:before:duration-300 motion-safe:before:ease-in motion-safe:hover:delay-100 motion-safe:hover:ease-out motion-safe:hover:before:delay-100 motion-safe:hover:before:ease-out w-full text-base'>
                Agregar Canción
            </Link>

            <Link
                href='/playlist'
                className='inline-block text-center skew-x-[-21deg] cursor-pointer border-2 border-primary font-semibold uppercase px-5 py-2.5 before:absolute before:-inset-0.5 before:origin-right before:scale-x-0 before:bg-primary hover:scale-110 hover:text-secondary hover:before:origin-left hover:before:scale-x-100 aria-disabled:pointer-events-none aria-disabled:border-[#666] aria-disabled:bg-[#666] aria-disabled:text-[#111] ease-in motion-safe:transition-[color,transform] motion-safe:before:transition-transform motion-safe:before:duration-300 motion-safe:before:ease-in motion-safe:hover:delay-100 motion-safe:hover:ease-out motion-safe:hover:before:delay-100 motion-safe:hover:before:ease-out w-full text-base'>
                Ver playlist
            </Link>
            </div>

            <div className='mt-20 flex  items-center justify-center gap-4 xs:flex-row'>
            <h3 data-astro-cid-ey7maxor="" tabIndex="0" className="text-xl text-neutral-300 text-center">
                 Web patrocinada por
            </h3>
            <Link 
                href='https://www.jhoniipia.com'
                className='transition hover:scale-110 focus:scale-110 motion-reduce:transition-none motion-reduce:hover:scale-100 motion-reduce:focus:scale-100 text-2xl   text-white text-center font-bold'
                >JhoniIpia
            </Link>
            </div>
        </div>
    );
}

export default Events;
