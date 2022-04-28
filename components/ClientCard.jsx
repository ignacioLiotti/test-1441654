import React from "react";

function ClientCard({ clientId }) {
  return (
    <div className="h-32 w-64 bg-white p-4 m-3 shadow-generic-card rounded-[20px]">
      <div className="">
        <img
          src={`/images/clients/client-${clientId}.png`}
          className="w-full h-full rounded-lg object-cover group-hover:opacity-30 transition-all duration-200 ease-linear"
          alt="client image"
        />
      </div>
    </div>
  );
}

export default ClientCard;
