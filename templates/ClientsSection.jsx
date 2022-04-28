import React from "react";
import ClientCard from "../components/ClientCard";
import ActionButton from "../components/ActionButton";

function ClientsSection({ strings }) {
  return (
    <section className="py-14">
      <div className="container-width flex flex-col items-center justify-center w-full">
        <h3 className="font-aleo font-bold text-4xl text-center text-gray-third mb-2">
          {strings.title}
        </h3>
        <div className="w-14 h-4 rounded-full bg-orange-pill my-5"></div>
        {/* TODO: Agregar responsive, cambiar cantidad de columnas del grid */}
        <div className="grid grid-cols-4">
          {[...Array(26)].map((pos, index) => (
            <ClientCard clientId={index + 1} />
          ))}
        </div>
        {/* TODO: Agregar estado para mostrar más al presionar el botón, 
        cambiar altura del container de tarjetas */}
        <div className="mt-11">
          <ActionButton text={strings.btnMore} />
        </div>
      </div>
    </section>
  );
}

export default ClientsSection;
