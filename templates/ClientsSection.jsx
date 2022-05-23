import React, { useState } from "react";
import ClientCard from "../components/ClientCard";
import ActionButton from "../components/ActionButton";

function ClientsSection({ strings }) {
  const [show, setShow] = useState(false);

  return (
    <section id="clients" 
      className="py-14">
      <div className="container-width flex flex-col items-center justify-center w-full">
        <h3 className="font-aleo font-bold text-4xl text-center text-gray-third mb-2">
          {strings.title}
        </h3>
        <div className="w-14 h-4 rounded-full bg-orange-pill my-5"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(show ? 30 : 20)].map((pos, index) => (
            <ClientCard clientId={index + 1} key={index} />
          ))}
        </div>
        {!show && (
          <div className="mt-11">
            <ActionButton
              text={strings.btnMore}
              onClickAction={() => setShow(true)}
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default ClientsSection;
