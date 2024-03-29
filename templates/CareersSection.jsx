import React, { useEffect, useId, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import GoldActionButton from "../components/ActionButton";
import JobsCard from "../components/JobsCard";
import NoJobsFound from "../components/NoJobsFound";

function CareersSection({ strings }) {
  const router = useRouter();
  const { locale } = router;
  // const [jobs, setJobs] = useState([]);

  // const jobsRequest = async () => {
  //   try{
  //     const jobs = await axios.get(`https://jobs.devlights.com/jobs`);
  //     setJobs(jobs.data.data);
  //   } catch(err) {console.log(err)}
  // };

  // useEffect(() => {
  //   jobsRequest();
  // }, []);

  // if (jobs.length === 0) {
  //   return ;
  // }

  const jobs = [{title:'AngularJs Developer',typeOfJob:{name:'Frontend developer'}},{title:'Fullstack React Dev',typeOfJob:{name:'fullstack developer'}},{title:'AngularJs Developer',typeOfJob:{name:'Frontend developer'}},{title:'Adobe XD Designer',typeOfJob:{name:'UX/UI designer'}}]

  return (
    <section id="careers" className="py-[80px] w-full flex justify-center items-center bg-neutral-silver">
      <div className="flex lg:items-center justify-center lg:flex-row flex-col w-full max-w-[1440px] gap-[40px] lg:gap-[150px] mx-[clamp(40px,0%,100%)] ">
        <div className="flex flex-col items-start  justify-end md:max-w-[700px] pt-0 lg:ml-[6rem] md:items-start flex-[1_10_0px] ">
          <h2 className="font-bold text-center xs:text-left text-neutral-black md:text-xl text-lg leading-tight mb-8 md:mb-16">
            {strings.title}
          </h2>
          <h4 className=" xs:text-left text-neutral-dark-grey md:text-base text-xs  mb-2">
            {strings.subtitleText1}
          </h4>
          <p className=" xs:text-left text-neutral-dark-grey md:text-base text-xs mb-2 mt-5">
            {strings.subtitleText2}
          </p>
          <div className="flex flex-col items-center sm:items-start justify-center mt-8 sm:mt-11">
            <GoldActionButton
              text={strings.btnCareers}
              resize={false}
              onClickAction={() =>
                window.open("http://jobs.devlights.com", "_blank")
              }
            />
          </div>
        </div>
        <div className="flex-1 w-full lg:max-w-[500px] mr-4 flex-[1_1_0px]">
          <div data-aos="fade-up" data-aos-duration={1000} data-aos-once className="flex flex-col gap-[20px]">
            {jobs.length > 0 ? (
              jobs.slice(-4).map((job) => {
                return (
                  <div
                    key={useId()}
                    onClick={() =>
                      window.open(
                        `http://localhost:3000/jobs/${job.slug}`,
                        "_blank"
                      )
                    }
                  >
                    <JobsCard title={job.title} name={job.typeOfJob.name} />
                  </div>
                );
              })
            ) : (
              <NoJobsFound title={strings.noJobs} />
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

export default CareersSection;
