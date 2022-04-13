import React, { useState, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEyeLowVision, faXmark } from "@fortawesome/free-solid-svg-icons";

function ContactForm() {
  const [name, setName] = useState("");
  const [nameValid, setNameValid] = useState(false);

  const [email, setEmail] = useState("");
  const [emailValid, setEmailValid] = useState(false);

  const [message, setMessage] = useState("");
  const [messageValid, setMessageValid] = useState(false);

  const nameInput = useRef(null);
  const emailInput = useRef(null);
  const messageInput = useRef(null);

  const handleNameInput = () => {
    if (nameInput.current.value.length >= 5) {
      setNameValid(true)
    } else {
      setNameValid(false)
    }
    setName(nameInput.current.value);
  };
  const handleEmailInput = () => {
    const regex = /\S+@\S+\.\S+/;
    if (emailInput.current.value.length >= 10 && regex.test(emailInput.current.value)) {

      setEmailValid(true)
    } else {
      setEmailValid(false)
    }
    setEmail(emailInput.current.value);
  };
  const handleMessageInput = () => {
    if (messageInput.current.value.length >= 10) {
      setMessageValid(true)
    } else {
      setMessageValid(false)
    }
    setMessage(messageInput.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // TODO: add font "Aleo" for the inputs text
  // TODO: validate form
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-1 w-full">

      <div className="relative mb-4">
        <div className={`${(name.length > 0) ? 'block' : 'hidden'}`}>
          <FontAwesomeIcon
            icon={nameValid ? faCheck : faXmark}
            className={`${(nameValid) ? 'text-green-600' : 'text-red-700'}  text-xl absolute right-2 top-2`}
          />
        </div>
        <input
          value={name}
          ref={nameInput}
          onChange={handleNameInput}
          type="text"
          placeholder="Name*"
          className={`w-full h-9  px-2 text-base text-gray-placeholder bg-white bg-clip-padding 
          border border-gray-border rounded-xl focus:ring focus:ring-icon-blue outline-none
          ${(nameValid || name.length === 0) ? 'focus:ring-icon-blue' : 'focus:ring-red-700 border-2 border-red-700'}
          ${(nameValid) ? 'border-2 border-green-600' : ''}`}
        />
        <div className={`${(nameValid || name.length === 0) ? 'opacity-0' : 'opacity-100'} text-white text-sm pl-2 pt-1`}>Name must be at least 5 characters long.</div>
      </div>

      <div className="relative mb-4">
        <div className={`${(email.length > 0) ? 'block' : 'hidden'}`}>
          <FontAwesomeIcon
            icon={emailValid ? faCheck : faXmark}
            className={`${(emailValid) ? 'text-green-600' : 'text-red-700'}  text-xl absolute right-2 top-2`}
          />
        </div>
        <input
          value={email}
          ref={emailInput}
          onChange={handleEmailInput}
          type="email"
          placeholder="E-mail*"
          className={`w-full h-9  px-2 text-base text-gray-placeholder bg-white bg-clip-padding 
          border border-gray-border rounded-xl focus:ring focus:ring-icon-blue outline-none
          ${(emailValid || email.length === 0) ? 'focus:ring-icon-blue' : 'focus:ring-red-700 border-2 border-red-700'}
          ${(emailValid) ? 'border-2 border-green-600' : ''}`}
        />
        <div className={`${(emailValid || email.length === 0) ? 'opacity-0' : 'opacity-100'} text-white text-sm pl-2 pt-1`}>Please enter a valid email with at least 10 characters long.</div>
      </div>

      <div className="relative mb-4">
        <div className={`${(message.length > 0) ? 'block' : 'hidden'}`}>
          <FontAwesomeIcon
            icon={messageValid ? faCheck : faXmark}
            className={`${(messageValid) ? 'text-green-600' : 'text-red-700'}  text-xl absolute right-2 top-2`}
          />
        </div>
        <textarea
          value={message}
          ref={messageInput}
          onChange={handleMessageInput}
          placeholder="Message*"
          className={`w-full h-56 px-2 pt-2 pb-1 text-base text-gray-placeholder
          bg-white bg-clip-padding border border-gray-border rounded-xl
          overflow-auto resize-none focus:ring focus:ring-icon-blue outline-none
          ${(messageValid || message.length === 0) ? 'focus:ring-icon-blue' : 'focus:ring-red-700 border-2 border-red-700'}
          ${(messageValid) ? 'border-2 border-green-600' : ''}`}
        />
        <div className={`${(messageValid || message.length === 0) ? 'opacity-0' : 'opacity-100'} text-white text-sm pl-2 pt-1`}>Message must be at least 10 characters long.</div>
      </div>
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
