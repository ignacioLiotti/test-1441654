import React, { useState } from 'react'

function Navbar() {
    const [openMenu, setOpenMenu] = useState(false)

    const onMenuPress = () => {
        setOpenMenu(!openMenu)
    }

    return (
        <nav className={`fixed w-full h-16 md:h-20 bg-sky-500 border-b-sky-200 flex flex-row items-center justify-between shadow-md`}>
            {/* TODO: add transparent background as default and gradient brackground when scrolling down*/}
            <div className='flex flex-row items-center justify-between w-full p-4'>
                <img className='h-9 md:h-12 object-contain' src='/images/logo.png' alt='devlights logo' />
                {!openMenu && (
                    <button className='md:hidden' onClick={onMenuPress}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                )}
            </div>
            <div className='hidden md:block'>
                <ul className='flex flex-row items-center justify-end'>
                    {/* TODO: add the indicator for the current section as an underline*/}
                    <li>
                        <a className='block whitespace-nowrap w-auto py-5 px-4 text-sm md:text-md text-white font-sans' href="/#">Home</a>
                    </li>
                    <li>
                        <a className='block whitespace-nowrap w-auto py-5 px-4 text-sm md:text-md text-white font-sans' href="/#">About us</a>
                    </li>
                    <li>
                        <a className='block whitespace-nowrap w-auto py-5 px-4 text-sm md:text-md text-white font-sans' href="/#">Service</a>
                    </li>
                    <li>
                        <a className='block whitespace-nowrap w-auto py-5 px-4 text-sm md:text-md text-white font-sans' href="/#">Portfolio</a>
                    </li>
                    <li>
                        <a className='block whitespace-nowrap w-auto py-5 px-4 text-sm md:text-md text-white font-sans' href="/#">Clients</a>
                    </li>
                    <li>
                        <a className='block whitespace-nowrap w-auto py-5 px-4 text-sm md:text-md text-white font-sans' href="/#">Contact</a>
                    </li>
                    {/* TODO: this is a dropdown component that switches languages */}
                    <li>
                        <span className='block whitespace-nowrap w-auto py-5 px-4 text-sm md:text-md text-white font-sans'>EN</span>
                    </li>
                </ul>
            </div>
            {/* TODO: match the colors of the mobile drawer menu with the live version of the website */}
            <div className={`fixed md:hidden z-10 h-screen w-full bg-black bg-opacity-30 top-0 transition-all ease-in-out duration-500 ${openMenu ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`w-80 bg-sky-900 h-full pt-2 % transition-all ease-in-out duration-500 ${openMenu ? '-translate-x-0' : '-translate-x-80'}`}>
                    <ul className='flex flex-col items-start justify-end w-full'>
                        <li className='w-2/3'>
                            <a className='block whitespace-nowrap py-5 px-4 text-sm md:text-md text-white font-sans' href="/#">Home</a>
                        </li>
                        <li className='w-2/3'>
                            <a className='block whitespace-nowrap py-5 px-4 text-sm md:text-md text-white font-sans' href="/#">About us</a>
                        </li>
                        <li className='w-2/3'>
                            <a className='block whitespace-nowrap py-5 px-4 text-sm md:text-md text-white font-sans' href="/#">Service</a>
                        </li>
                        <li className='w-2/3'>
                            <a className='block whitespace-nowrap py-5 px-4 text-sm md:text-md text-white font-sans' href="/#">Portfolio</a>
                        </li>
                        <li className='w-2/3'>
                            <a className='block whitespace-nowrap py-5 px-4 text-sm md:text-md text-white font-sans' href="/#">Clients</a>
                        </li>
                        <li className='w-2/3'>
                            <a className='block whitespace-nowrap py-5 px-4 text-sm md:text-md text-white font-sans' href="/#">Contact</a>
                        </li>
                        {/* TODO: this is a dropdown component that switches languages */}
                        <li className='w-2/3'>
                            <span className='block whitespace-nowrap py-5 px-4 text-sm md:text-md text-white font-sans'>EN</span>
                        </li>
                    </ul>
                </div>
                <button className='md:hidden absolute top-0 right-0' onClick={onMenuPress} >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 m-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </nav>
    )
}

export default Navbar