import React from 'react'
import Head from 'next/head'

function Layout({ children }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <div className='h-screen w-full'>{children}</div>
        </>
    )
}

export default Layout