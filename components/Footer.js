import React from 'react'

function Footer() {
  return (
    <footer className={`bg-[url('/images/footer-bg.png')] w-full bg-no-repeat bg-center-bottom py-16`} >
      <div className='container-width h-[46rem] flex flex-col md:flex-row items-center justify-between'>

        {/* First column: Contact info */}
        <div className='flex flex-col items-start px-4 md:px-4 h-full md:w-4/12 gap-6 order-1'>
          <img
            className="h-9 md:h-12 object-contain mb-3"
            src="/images/logo-white.png"
            alt="devlights logo"
          />
          <ul className='list-none'>
            <li>
              <div className='flex flex-row mt-6 mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-icon-blue mr-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <p className='font-open-sans text-white leading-5 text-[0.938rem]'>Corrientes, Argentina. 1250 Junin st., 2nd Floor.</p>
              </div>
            </li>
            <li>
              <div className='flex flex-row mt-6 mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-icon-blue mr-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p className='font-open-sans text-white leading-5 text-[0.938rem]'>+54 (0379) 4230003</p>
              </div>
            </li>
            <li>
              <div className='flex flex-row mt-6 mb-4'>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-icon-blue mr-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p className='font-open-sans text-white leading-5 text-[0.938rem]'>contact@devlights.com</p>
              </div>
            </li>
          </ul>
          <div className="flex flex-col self-center md:self-start items-center gap-8 max-w-[270px]">
            <a href="https://clutch.co/profile/devlights?utm_source=widget&amp;utm_medium=widget_2&amp;utm_campaign=widget&amp;utm_content=logo">
              <img src="/images/clutch-1.svg" className="w-52" alt="rated 5 stars on clutch" />
            </a>
            <a target="_blank" href="https://www.designrush.com/agency/software-development/colorado">
              <img src="/images/design-rush-badge2.png" alt="" className="w-full" />
            </a>
            <div className="w-52">
              <img src="./images/clutch.png" alt="clutch badge top b2b companies latin america" />
            </div>
          </div>
        </div>
        {/* Second column: links and social */}
        <div className='contact-form flex flex-col items-start justify-start px-4 md:px-4 h-full md:w-3/12 gap-6 order-3 md:order-2'>
          <h4 className='text-lg text-white font-bold font-open-sans uppercase mb-6'>Links</h4>
          <ul>
            <li className='mb-6'>
              <a className='text-white text-sm font-medium font-open-sans' href='/#'>About us</a>
            </li>
            <li className='mb-6'>
              <a className='text-white text-sm font-medium font-open-sans' href='/#'>Nearshore software development</a>
            </li>
            <li className='mb-6'>
              <a className='text-white text-sm font-medium font-open-sans' href='/#'>Referral program</a>
            </li>
            <li className='mb-6'>
              <a className='text-white text-sm font-medium font-open-sans' href='/#'>Services</a>
            </li>
            <li className='mb-6'>
              <a className='text-white text-sm font-medium font-open-sans' href='/#'>Clients</a>
            </li>
            <li className='mb-6'>
              <a className='text-white text-sm font-medium font-open-sans' href='/#'>Home</a>
            </li>
            <li className='mb-6'>
              <a className='text-white text-sm font-medium font-open-sans' href='/#'>Portfolio</a>
            </li>
            <li className='mb-6'>
              <a className='text-white text-sm font-medium font-open-sans' href='/#'>Bootcamps</a>
            </li>
          </ul>
        </div>
        {/* Third column: connect */}
        <div className='flex flex-col items-start px-4 md:px-4 h-full md:w-5/12 gap-6 order-2 md:order-3 m-'>
          <p>a</p>
        </div>
      </div>
    </footer >
  )
}

export default Footer