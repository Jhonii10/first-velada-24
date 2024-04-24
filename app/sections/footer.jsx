import React from 'react';
import Github from '../icons/github';
import X from '../icons/x';
import Link from 'next/link';

const Footer = () => {

    const links = [
        {
            icon:<X/>,
            href: 'https://twitter.com'
        },
        {
            icon:<Github/>,
            href: 'https://github.com/Jhonii10/first-velada-24'
        },
    ]
    return (
        <div className='mx-auto  max-w-6xl px-2  selection:bg-primary selection:text-secondary md:pt-20 lg:px-10'>
            <footer className='relative mt-20 flex w-full flex-col place-items-center pb-20 pt-14 md:flex-row md:justify-between md:pt-16'>
                <hr className='absolute top-0 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:my-9'/>
                <div className='flex flex-col gap-4 text-center md:flex-row lg:gap-6'>
                    <span className='text-xl text-neutral-300 text-center'>
                        © 2024 La primer Velada del Año{'  '}
                        <span className='hidden md:inline'>|</span>
                        <br aria-hidden="true" className="block md:hidden"/>
                        {'  '}Todos los derechos reservados.
                    </span>
                    
                
                </div>
                <hr aria-hidden="true" className="my-12 h-[2px] w-full min-w-[18rem] border-t-0 bg-transparent bg-gradient-to-r from-transparent via-white to-transparent bg-center md:hidden"/>

                <nav>
                    <ul className='flex flex-row items-center gap-x-6'>
                        {
                            links.map(({icon , href} , index)=>(
                                <li key={index}>
                                    <Link
                                     href={href}
                                    >
                                    {icon}
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </footer>
        </div>
    );
}

export default Footer;
