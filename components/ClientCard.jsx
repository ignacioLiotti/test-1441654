import React from "react";

function ClientCard({ clientId }) {
  return (
    <div
      className="group h-32 w-64 bg-white p-4 m-3 shadow-generic-card rounded-[20px]
      hover:scale-110 transition-all duration-300 ease-in-out"
    >
      <div
        className="group-hover:scale-110 transition-all duration-300 ease-in-out
      transition-all duration-200 ease-linear"
      >
        <img
          src={`/images/clients/client-${clientId}.png`}
          className="w-full h-full rounded-lg object-cover"
          alt="client image"
        />
      </div>
    </div>
  );
}

export default ClientCard;
