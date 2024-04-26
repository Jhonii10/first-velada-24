import React from 'react';
import Youtube from '../icons/youtube';
import Link from 'next/link';

const YoutubePlay = ({url}) => {
    return (
        <Link href={url} target='_blank' className="rounded-md border p-2 hover:bg-gray-100" >
            <span className="sr-only">youtube</span>
            <Youtube/>
        </Link>
    );
}

export default YoutubePlay;
