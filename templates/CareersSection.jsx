import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import GoldActionButton from "../components/GoldActionButton";
import JobsCard from "../components/JobsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
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
    <section id="careers" className="h-[90vh] w-full flex justify-center items-center bg-neutral-silver">
      <div className="flex items-center justify-center w-full max-w-[1440px] gap-0 md:gap-[150px] mx-[clamp(40px,0%,100%)] ">
        <div className="flex flex-col items-center justify-end md:max-w-[700px] pt-0 md:ml-[6rem] md:items-start  ">
          <h2 className="font-bold text-center xs:text-left text-neutral-black text-xl leading-tight mb-5 mt-[2rem]">
            {strings.title}
          </h2>
          <h4 className="text-center xs:text-left text-neutral-dark-grey text-base  mb-2">
            {strings.subtitleText1}
          </h4>
          <p className="text-center xs:text-left text-neutral-dark-grey text-base mb-2 mt-5">
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
        <div className="flex-1 max-w-[500px] mr-4 mt-6 ">
          <div data-aos="fade-up" data-aos-duration={1000} data-aos-once>
            {jobs.length > 0 ? (
              jobs.slice(-4).map((job) => {
                return (
                  <div
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
