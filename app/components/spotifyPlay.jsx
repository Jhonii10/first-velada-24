import Link from 'next/link';
import React from 'react';
import Spotify from '../icons/spotify';

const SpotifyPlay = ({url}) => {
    return (
        <Link href={url}  className="rounded-md border p-2 hover:bg-gray-100" >
            <span className="sr-only">youtube</span>
            <Spotify/>
        </Link>
    );
}

export default SpotifyPlay;
