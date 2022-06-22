import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import ActionButton from "../components/ActionButton";
import JobsCard from "../components/JobsCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import NoJobsFound from "../components/NoJobsFound";

function CareersSection({ strings }) {
  const router = useRouter();
  const { locale } = router;
  const [jobs, setJobs] = useState([]);

  const jobsRequest = async () => {
    try{
      const jobs = await axios.get(`https://jobs.devlights.com/jobs`);
      setJobs(jobs.data.data);
    } catch(err) {console.log('ACAAAA',err)}
  };

  useEffect(() => {
    jobsRequest();
  }, []);

  console.log(jobs);

  return (
    <section id="careers"
      className="w-full bg-technologies-section-mobile bg-size-100-50 md:bg-careers-section bg-working-cover bg-no-repeat bg-size-100 md:bg-size-100 xl:bg-size-100 relative md:pt-[6rem] md:pb-[6rem] md:mb-[4em]">
      <div className="container-width flex flex-col-reverse justify-center items-center pt-12 md:flex-row items-center justify-around px-4 ">
        <div className="w-80 mr-4 mt-6 md:w-96 md:mr-40">
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

        <div className="flex flex-col items-center justify-end md:max-w-[40%] pt-0 md:ml-[6rem] md:items-start  ">
          <h2 className="font-aleo font-bold text-center xs:text-left text-white text-3xl leading-tight mb-5 mt-[2rem]">
            {strings.title}
          </h2>
          <div className="w-14 h-4 rounded-full bg-orange-pill my-5"></div>
          <h4 className="font-open-sans font-bold text-center xs:text-left text-white text-base leading-7 mb-2">
            {strings.subtitleText1}
          </h4>
          <p className="font-open-sans text-center xs:text-left text-white text-[0.938rem] leading-[1.8] mb-2 mt-5">
            {strings.subtitleText2}
          </p>
          <div className="flex flex-col items-center sm:items-start justify-center mt-8 sm:mt-11">
            <ActionButton
              text={strings.btnCareers}
              resize={false}
              onClickAction={() =>
                window.open("http://jobs.devlights.com", "_blank")
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CareersSection;
