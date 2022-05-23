import React from 'react'

function NoJobsFound({title}) {
  return (
    <div className='flex flex-col items-center justify-center mt-8 md:items-start md:w-[30rem] md:pr-10 md:mt-1'>
        <h2 className="font-aleo text-back text-[1.5rem] text-center md:text-[2.3rem] md:text-left font-semibold md:leading-[1.2]">{title}</h2>
        <div className="w-14 h-4 rounded-full bg-orange-pill my-5"></div>
        <img
          src={`/images/no-jobs.png`}
          className="w-64 object-contain"
          alt="No Jobs Available"
        />

    </div>
  )
}

export default NoJobsFound