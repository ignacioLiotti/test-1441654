import React, { useState, useRef, useCallback } from "react";

function ContactForm() {
  const [message, setMessage] = useState("");

  const messageInput = useRef(null);

  const handleMessageInput = () => {
    setMessage(messageInput.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // TODO: add font "Aleo" for the inputs text
  // TODO: validate form
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
      <input
        type="text"
        placeholder="Name*"
        className="w-full h-9 mb-4 px-2 text-base text-gray-placeholder bg-white bg-clip-padding border border-gray-border rounded-xl"
      />
      <input
        type="email"
        placeholder="E-mail*"
        className="w-full h-9 mb-4 px-2 text-base text-gray-placeholder bg-white bg-clip-padding border border-gray-border rounded-xl"
      />
      <textarea
        value={message}
        ref={messageInput}
        onChange={handleMessageInput}
        placeholder="Message*"
        className="w-full h-56 mb-4 px-2 pt-2 pb-1 text-base text-gray-placeholder 
        bg-white bg-clip-padding border border-gray-border rounded-xl
        overflow-auto resize-none"
      />
      <button
        className="inline-block self-start action-button-gradient py-2 px-6 sm:py-3 sm:px-12
    rounded-full cursor-pointer font-open-sans text-white text-xs sm:text-sm
    transition-all duration-300 ease-in-out"
        type="submit"
      >
        Send Message
      </button>
    </form>
  );
}

export default ContactForm;
