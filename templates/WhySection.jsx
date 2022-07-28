import React from "react";
import Image from "next/image";

function WhySection({ strings }) {
  return (
    <section id="why" className="h-[90vh] w-full flex justify-center items-center">
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-[1224px] gap-0 md:gap-[20px] mx-[clamp(40px,0%,100%)] ">
        <div className="w-[600px]">
          <img src="/images/our-team.png" />
        </div>
        <div className="flex justify-center items-center flex-1 bg-primary-sky-blue gap-[70px] h-[clamp(250px,80vh,500px)] px-[70px]">
          <div className="flex flex-col justify-start items-center gap-[80px]">
            <div className="flex flex-col items-start gap-3 w-[230px]">
              <Image
                src={`/images/icons/${strings.timeZoneImg}.svg`}
                className="dark-blue-filter"
                alt=""
                width={35}
                height={35}
              />
              <h2 className="text-sm text-primary-dark-blue font-semibold">
                {strings.timeZone}
              </h2>
              <p className="text-xs text-neutral-dark-gray font-open-sans leading-8">
                {strings.timeZoneDesc}
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 w-[230px]">
              <Image
                src={`/images/icons/${strings.costImg}.png`}
                className="dark-blue-filter"
                alt=""
                width={35}
                height={35}
              />
              <h2 className="text-sm text-primary-dark-blue font-semibold">
                {strings.cost}
              </h2>
              <p className="text-xs text-neutral-dark-gray font-open-sans leading-8">
                {strings.costDesc}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center gap-[80px]">
            <div className="flex flex-col items-start gap-3 w-[350px]">
              <Image
                src={`/images/icons/${strings.talentImg}.svg`}
                className="dark-blue-filter"
                alt=""
                width={35}
                height={35}
              />
              <h2 className="text-sm text-primary-dark-blue font-semibold">
                {strings.talent}
              </h2>
              <p className="text-xs text-neutral-dark-gray font-open-sans leading-8">
                {strings.talentDesc}
              </p>
            </div>
            <div className="flex flex-col items-start gap-3 w-[350px]">
              <Image
                src={`/images/icons/${strings.englishImg}.svg`}
                className="dark-blue-filter"
                alt=""
                width={35}
                height={35}
              />
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
