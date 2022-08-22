import React from "react";
import GoldLinkButton from "./LinkButton";

function ServiceCard({ title, description, description2, list, image, button, link }) {
  
  const Icon = () => image

  return (
    <article
      data-aos="fade-up"
      data-aos-duration={1000}
      data-aos-once
      className="group flex flex-col items-center justify-center w-full h-full bg-white rounded-[12px] shadow-generic-card p-6
      hover:-translate-y-2 transition-all duration-300 ease-in-out select-none px-[clamp(20px,10%,90px)]"
    >
      <span className="flex flex-col items-center justify-center bg-primary-blue w-[115px] h-[115px] mt-2s mb-6 rounded-[12px]">
        <Icon/>
      </span>
      <h4
        className=" font-semibold text-neutral-black text-center text-lg leading-[51px] mb-6
          group-hover:text-icon-blue transition-all duration-300 ease-in-out
          "
      >
        {title}
      </h4>
      <p className="text-neutral-dark-grey text-xs text-center leading-[24px]">
        {description}
      </p>
      <p className="text-gray-service text-[0.938rem] leading-[24px]">
        {description2}
      </p>
      {list ? 
      <div className="flex justify-center items-center pt-2">
        <ul>
        {
          list.map((item,index)=>(
           <li key={index} className='flex justify-center items-center'><span className="mx-1 bg-gray-500 h-2 w-2 rounded-full"></span><p className="text-gray-service text-[0.938rem] leading-[1.8]">{item}</p></li>
          ))
        }
        </ul>
      </div>: '' }
      {button ? 
      <div className="flex justify-center items-center mt-8">
        <GoldLinkButton 
            text={button}
            resize={false}
            link={'/data-management'}/> 
      </div>: '' }
    </article>
  );
}

export default ServiceCard;
