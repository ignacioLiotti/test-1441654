import React, {useRef, useEffect} from "react";
import Image from "next/image";
import { Time, Prize, Puzzle, LineChart } from "../components/IconsComp";

function WhySection({ strings }) {
  const myRef = useRef();

  useEffect(() => {
    if (!myRef.current) return
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
    })
    observer.observe(myRef.current);
    console.log(observer);

  }, [myRef.current]);

  return (
    <section ref={myRef} id="why" className="my-[40px] w-full flex justify-center items-center "> 
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1440px] gap-0 sm:mx-[clamp(40px,0%,100%)] mx-[clamp(20px,0%,100%)] flex-wrap ">
        <div className="why-image max-w-[680px] lg:max-w-[600px] md:min-w-[540px] flex-1 relative z-2">
          <img src="/images/our-team.webp" className="rounded-[12px] max-w-[auto]" alt="Our team on a camping day including their kids, in black and white" />
        </div>
        <div className="why-content flex justify-center items-center bg-primary-sky-blue gap-[60px] md:gap-[clamp(20px,10%,60px)] max-w-[600px] h-[clamp(250px,80vh,500px)] px-[min(3%,70px)] py-8 rounded-[12px] md:min-w-[580px] flex-1 lg:-ml-4 flex-wrap">
          <div className="flex flex-col justify-start items-start gap-[40px] md:gap-[80px] flex-1 ">
            <div className="flex flex-col items-start gap-3 md:max-w-[230px] min-w-[170px] sm:min-w-[230px]">
              <Time color="#003BBC" />
              <h2 className="text-sm text-primary-dark-blue font-semibold">
                {strings.timeZone}
              </h2>
              <p className="text-xs text-neutral-dark-gray font-open-sans leading-8">
                {strings.timeZoneDesc}
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:max-w-[230px] min-w-[170px] sm:min-w-[230px]">
              <Puzzle color="#003BBC" />
              <h2 className="text-sm text-primary-dark-blue font-semibold">
                {strings.cost}
              </h2>
              <p className="text-xs text-neutral-dark-gray font-open-sans leading-8">
                {strings.costDesc}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start gap-[40px] md:gap-[80px] flex-1">
            <div className="flex flex-col items-start gap-3 md:max-w-[350px] min-w-[170px] sm:min-w-[270px] md:min-w-[100px]">
              <Prize color="#003BBC" />
              <h2 className="text-sm text-primary-dark-blue font-semibold">
                {strings.talent}
              </h2>
              <p className="text-xs text-neutral-dark-gray font-open-sans leading-8">
                {strings.talentDesc}
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 md:max-w-[350px] min-w-[170px] sm:min-w-[270px] md:min-w-[100px]">
              <LineChart color="#003BBC" />
              <h2 className="text-sm text-primary-dark-blue font-semibold">
                {strings.english}
              </h2>
              <p className="text-xs text-neutral-dark-gray font-open-sans leading-8">
                {strings.englishDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySection;
