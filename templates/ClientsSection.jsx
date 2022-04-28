import React from "react";
import ClientCard from "../components/ClientCard";

function ClientsSection({ strings }) {
  return (
    <section className="">
      <div className="container-width flex flex-col items-center justify-center w-full">
        <h3 className="font-aleo font-bold text-4xl text-center text-gray-third mb-2">
          {strings.title}
        </h3>
        <div className="w-14 h-4 rounded-full bg-orange-pill my-5"></div>
        <div>
          <ClientCard clientId={1} />
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
