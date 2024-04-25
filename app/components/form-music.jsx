'use client'
import Link from 'next/link';
import React from 'react';
import { useFormState } from 'react-dom';
import { addPlay } from '../lib/actions';

const FormMusic = () => {
    const initialState = { message: null, errors: {} };
    const [state, formAction] = useFormState(addPlay, initialState);

    return (
            <form action={formAction} className=' p-8 rounded  md:w-1/3  w-72' style={{background:'linear-gradient(#fff 0%, #ffffff80 20%, #0000 100%)'}}  >
            <label htmlFor='title' className='font-bold text-sm ' >
            Nombre
        </label>
        <input
            type='text' 
            placeholder="Ingrese nombre de la cancion"
            className='border border-gray-400  text-black p-2 mb-4 w-full rounded  text-xs md:text-sm  '
            name='title'
            id='title'
            required
        />
        <label htmlFor='title' className='font-bold text-sm ' >
            Artista
        </label>
        <input
            type='text' 
            placeholder="Ingrese nombre del artista"
            className='border border-gray-400  text-black p-2 mb-4 w-full rounded text-xs md:text-sm '
            name='artist'
            id='artist'
            required

        />
        <label htmlFor='title' className='font-bold text-sm ' >
            Genero
        </label>
        <input
            type='text' 
            placeholder="Ingrese el genero de la cancion"
            className='border border-gray-400  text-black p-2 mb-4 w-full rounded text-xs md:text-sm '
            name='gender'
            id='gender  '
            required
        />

    <div className="mt-6 flex justify-end gap-4">

        <Link
          href="/"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancelar
        </Link>
        <button
            type='submit' 
            className='flex h-10 items-center rounded-lg bg-gray-950 px-4 text-sm font-medium text-white transition-colors hover:bg-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
            Agregar cancion
        </button>
        </div>
      </form>
    );
}

export default FormMusic;
