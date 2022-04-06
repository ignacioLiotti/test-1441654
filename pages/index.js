import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <Head>
        <title>Devlights - Home</title>
        <meta name="description" content="We are a company dedicated to provide technological solutions. In Devlights, we truly understand the idea that there are no two companies alike, and that each one has its own unique needs." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='text-2xl'>This is the HOME page</h1>
    </div>
  )
}
