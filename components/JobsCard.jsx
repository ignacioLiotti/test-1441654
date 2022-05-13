import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

function JobsCard({ title, name }) {
  return (
    <div
      data-aos="fade-up"
      data-aos-once
      className="group h-28 w-full bg-white p-4 m-3 shadow-generic-card rounded-[20px]
      group-hover:scale-110 transition-all duration-300 ease-in-out"
    >
      <div
        className="flex justify-between pl-2 pr-2 items-center group-hover:scale-110 transition-all duration-300 ease-in-out
      transition-all duration-200 ease-linear w-full h-full "
      >
        <div>
          <p>
            <strong>{title}</strong>
          </p>

          <p>{name}</p>
        </div>
        <FontAwesomeIcon
          icon={faAngleRight}
          className="text-gray-devil text-4xl ml-6 pt-1 hover:text-almost-black"
        />
      </div>
    </div>
  );
}

export default JobsCard;
