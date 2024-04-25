import React from 'react';
import PlaylistTable from '../components/table';
import Link from 'next/link';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/solid';
import Pagination from '../components/pagination';
import { fetchInvoicesPages } from '../lib/data';

const Page = async ({ searchParams }) => {

    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchInvoicesPages(query);
    return (
        <div className='flex h-screen  flex-col md:flex-row md:overflow-hidden'>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12 bg-black">
             <Link  href="/" >
             <ArrowLeftCircleIcon class="h-10 w-10 text-gray-500" />
             </Link>
             <PlaylistTable query={query} currentPage={currentPage}/>
             <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
        </div>
    );
}

export default Page;
