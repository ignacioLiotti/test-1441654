import React from "react";

function StatsCard({
  projects,
  numProjects,
  satisfaction,
  numSatisfaction,
  years,
  numYears,
}) {
  return (
    <div className="flex flex-col md:flex-row gap-7 md:gap-0 items-center bg-gray-stats rounded-[2rem] w-2/3 min-h-[7.375rem] px-4 pt-2 pb-5 text-white">
      <div className="flex flex-col items-center justify-start px-4 w-full md:w-1/3 h-full">
        <p className="font-montserrat text-center text-base tracking-widest">
          +
          <span className="inline-block font-aleo font-bold text-center text-[1.875rem] leading-loose">
            {numProjects}
          </span>
          <br></br>
          {projects}
        </p>
      </div>
      <div className="flex flex-col items-center justify-start px-4 w-full md:w-1/3 h-full">
        <p className="font-montserrat text-center text-base tracking-widest">
          <span className="inline-block font-aleo font-bold text-center text-[1.875rem] leading-loose">
            {numSatisfaction}
          </span>
          %<br></br>
          {satisfaction}
        </p>
      </div>
      <div className="flex flex-col items-center justify-start px-4 w-full md:w-1/3 h-full">
        <p className="font-montserrat text-center text-base tracking-widest">
          +
          <span className="inline-block font-aleo font-bold text-center text-[1.875rem] leading-loose">
            {numYears}
          </span>
          <br></br>
          {years}
        </p>
      </div>
    </div>
  );
}

export default StatsCard;
