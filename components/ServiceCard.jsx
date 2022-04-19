import React from "react";

function ServiceCard({ title, description, image }) {
  return (
    <div className="bg-white rounded-[2.5rem] shadow-lg min-h-[20rem] min-w-[10rem] p-6">
      <div className="container flex flex-col w-full">
        <span className="flex flex-col items-start justify-center w-full h-16 ml-5 mb-10">
          <img src="/images/icons/team.png" alt=""/>
        </span>
        <h4 className="font-aleo font-bold text-almost-black text-xl leading-[30px] mb-6">Staff augmentation</h4>
        <p className="text-gray-service text-[0.938rem] leading-[1.8]">
          Recruiting specialized members for your team is an exhausting and
          time-consuming process? Our outsourcing team can help you with that
          providing specialized human resources to satisfy your requirements. We
          count with a wide variety of qualified professional profiles in our
          records.
        </p>
      </div>
    </div>
  );
}

export default ServiceCard;
