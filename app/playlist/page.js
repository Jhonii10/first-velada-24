import React from 'react';
import PlaylistTable from '../components/table';
import Link from 'next/link';
import { ArrowLeftCircleIcon, PlusIcon } from '@heroicons/react/24/solid';
import Pagination from '../components/pagination';
import { fetchInvoicesPages } from '../lib/data';
import Search from '../components/search';

const Page = async ({ searchParams }) => {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchInvoicesPages(query);
    return (
        <div className='flex h-screen  flex-col md:flex-row md:overflow-hidden'>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-black">
             <Link  href="/" className='block w-10' >
             <ArrowLeftCircleIcon class="h-10 w-10 text-gray-500" />
             </Link>
             <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Buscar cancion..." />
                <Link
                href="/agregar-cancion"
                className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                <span className="hidden md:block">Agregar Cancion</span>{' '}
                <PlusIcon className="h-5 md:ml-4" />
                </Link>
            </div>
             <PlaylistTable query={query} currentPage={currentPage}/>
             <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />

            </div>
        </div>
        </div>
    );
}

export default Page;
