'use client'
import React, { useEffect, useState } from 'react';
import { EVENT_TIMESTAMP } from '../consts/event-date';
import DateTime from '../components/date';
import Confetti from 'react-confetti';


const Countdown = () => {
  const [countdown, setCountdown] = useState({ days: '000', hours: '00', minutes: '00', seconds: '00' });
  const [timeEnded, setTimeEnded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      
      const distance = EVENT_TIMESTAMP - now;
     
      if (distance <= 0) {
        clearInterval(interval);
        setCountdown({ days: '000', hours: '00', minutes: '00', seconds: '00' });
        setTimeEnded(true);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24)).toString().padStart(2, '0');
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
      const seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');

      setCountdown({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = countdown;

  

  return (
    <div className='mx-auto  max-w-6xl px-2  selection:bg-primary selection:text-secondary md:pt-20 lg:px-10'>
    
    <section className=' flex flex-col place-items-center gap-y-10 ' aria-label="cuenta atrás">
    <hr className=" h-[2px] w-full min-w-[18rem] max-w-lg border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent md:my-9"/>
      
      {
        timeEnded 
        ? <>
            <h3 className='text-2xl '> ¡El evento ha terminado! 🎉</h3>
            <p>
               Esperamos que lo hayan disfrutado. 
            </p>
            
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1000 }}>
            <Confetti width={window.innerWidth} height={window.innerHeight} />
          </div>
          </>
        :
        <>
        <h3 className='text-white mb-6 text-balance text-center font-atomic text-2xl  md:text-3xl'>Para el inicio de la velada del año faltan...</h3>
        <div
          className="grid w-full select-none grid-cols-3 flex-col items-center justify-center gap-y-20 uppercase text-primary md:gap-x-6 md:gap-y-11"
          data-date={EVENT_TIMESTAMP}
          role="timer"
        >

        <DateTime
            dateType={'Dias'}
            value={days}
            position={'col-span-3'}
            className={'md:text-[20rem] block h-fit select-none overflow-hidden'}
        />

        <DateTime
            dateType={'Horas'}
            value={hours}
        />
        <DateTime
            dateType={'Minutos'}
            value={minutes}
        />

        <DateTime
            dateType={'Segundos'}
            value={seconds}
        />  

      </div>
      </>
      }
      
      <hr className=" h-[2px] w-full mb-6 mt-6 min-w-[18rem] max-w-lg border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent "/>

    </section>
    
    </div>
  );
};

export default Countdown;
