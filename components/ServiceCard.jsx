import React from "react";
import GoldLinkButton from "../components/GoldLinkButton";

function ServiceCard({ title, description, description2, list, image, button, link }) {
  
  return (
    <article
      data-aos="fade-up"
      data-aos-duration={1000}
      data-aos-once
      className="group flex flex-col w-full h-fit bg-white rounded-[2.5rem] shadow-generic-card p-6
      hover:-translate-y-2 transition-all duration-300 ease-in-out select-none pb-12
    "
    >
      <span className="flex flex-col items-start justify-center w-full h-16 mt-2s mb-6 blue-filter">
        <img
          src={`/images/icons/${image}.svg`}
          alt=""
          className="object-contain w-16 h-16"
        />
      </span>
      <h4
        className=" font-semibold text-almost-black text-sm leading-[30px] mb-6
          group-hover:text-icon-blue transition-all duration-300 ease-in-out
          "
      >
        {title}
      </h4>
      <p className="text-gray-service text-xs leading-[1.8]">
        {description}
      </p>
      <p className="text-gray-service text-[0.938rem] leading-[1.8]">
        {description2}
      </p>
      {list ? 
      <div className="flex justify-start items-center pt-2">
        <ul>
        {
          list.map((item,index)=>(
           <li key={index} className='flex justify-start items-center'><span className="mx-1 bg-gray-500 h-2 w-2 rounded-full"></span><p className="text-gray-service text-[0.938rem] leading-[1.8]">{item}</p></li>
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
