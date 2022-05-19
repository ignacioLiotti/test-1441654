import React from 'react'

function NoJobsFound({title}) {
  return (
    <div className='flex flex-col items-start justify-center w-[30rem] pr-10'>
        <h2 className="font-aleo text-back text-[2.3rem] font-semibold leading-[1.2]">{title}</h2>
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