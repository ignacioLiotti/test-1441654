import React from 'react'

function Footer() {
  return (
    <footer className={`bg-[url('/images/footer-bg.png')] w-full bg-no-repeat bg-center-bottom h-96 py-16`} >
      <div className='container container-width'>
        <div className='contact-data flex flex-col'></div>
        <div className='links flex flex-col'></div>
        <div className='contact-form flex flex-col'></div>
      </div>
    </footer >
  )
}

export default Footer