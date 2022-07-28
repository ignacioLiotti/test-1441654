import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function JobsCard({ title, name }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-once
      className=" h-28 w-full bg-white p-[45px] m-3 rounded-[20px]
      transition-all duration-300 ease-in-out"
    >
      <div
        className="flex justify-between pl-2 pr-2 items-center  transition-all duration-300 ease-in-out
      transition-all duration-200 ease-linear w-full h-full "
      >
        <div>
          <p>
            <strong className="text-primary-mid-blue text-semibold text-base ">{title}</strong>
          </p>

          <p className="text-neutral-dark-gray text-sm ">{name}</p>
        </div>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="text-primary-mid-blue text-lg ml-6 pt-1"
        />
      </div>
    </div>
  );
}

export default JobsCard;
