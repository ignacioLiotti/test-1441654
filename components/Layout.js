import React from 'react'
import Head from 'next/head'
import Navbar from './Navbar'

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <Head>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className='flex-grow pt-16 md:pt-20'>{children}</div>
        </>
    )
}

export default Layout