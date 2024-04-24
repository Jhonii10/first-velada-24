import React from 'react';

const DateTime = ({ value , position , className , dateType}) => {
    
    return (
        <div className={`relative w-full ${position} flex flex-col items-center justify-center text-center before:absolute before:inset-x-[-5px] before:inset-y-0 before:bg-gradient-to-b before:from-white/5 before:via-transparent before:to-transparent before:[clip-path:polygon(3.5%_0,100%_0%,97.5%_100%,0%_100%)] before:pointer-events-none`}>
          <span className={`tabular-nums text-7xl text-accent ${className} `}>{value}</span> {dateType}
        </div>
    );
}

export default DateTime;
