import React, { useState, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import Boop from "./Boop";

function ContactForm({translation}) {
  const [validForm, setValidForm] = useState(true);
  const [errorSendingMessage, setErrorSendingMessage] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  // TODO: add spinner when making the request with axios
  const [sendingMessage, setSendingMessage] = useState(false);

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

    if (nameValid && emailValid && messageValid) {
      setValidForm(true);
      // TODO: use PHP to send email or create backend and make request for email
      // axios({
      //   method: "post",
      //   url: `${process.env.REACT_APP_API}`,
      //   headers: { "content-type": "application/json" },
      //   data: { name, email, message }
      // })
      setTimeout(() => {
        setMessageSent(true);
      }, 1500)
      return
    }
    setValidForm(false);
  };

  const handleBackToHome = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    setName('');
    setNameValid(false);
    setEmail('');
    setEmailValid('');
    setMessage('');
    setMessageValid('');
    setErrorSendingMessage(false);
    setMessageSent(false);
  }

  return (
    <>
      {messageSent && (
        <div className="w-full h-full flex flex-col items-center">
          <span className="text-4xl text-white font-bold font-open-sans my-24">{translation.form_sent}</span>
          <span className="text-lg text-white font-bold font-open-sans mb-6">{translation.form_contact}</span>
          <button
            className="inline-block action-button-gradient py-2 px-6 sm:py-3 sm:px-12
              rounded-full cursor-pointer font-open-sans text-white text-xs sm:text-sm
              transition-all duration-300 ease-in-out"
            onClick={handleBackToHome}
          >
            {translation.form_back}
          </button>
        </div>
      )}
      {!messageSent && (
        <>
          <h2 className="font-aleo text-black text-center text-[2.6rem] font-semibold leading-[1.4] tracking-normal mt-4 mb-8 ">{translation.form_title}</h2>
          <form action="#" onSubmit={handleSubmit} className="flex flex-col w-full gap-[1rem]">
            <div className="relative mb-4">
              <div className={`${(name.length > 0) ? 'block' : 'hidden'}`}>
                <FontAwesomeIcon
                  icon={nameValid ? faCheck : faXmark}
                  className={`${(nameValid) ? 'text-green-600' : 'text-red-700'}  text-xl absolute right-4 top-2`}
                />
              </div>
              <input
                value={name}
                ref={nameInput}
                onChange={handleNameInput}
                type="text"
                placeholder={translation.form_name}
                className={`w-full h-9  px-3 text-base text-gray-placeholder bg-white bg-clip-padding
                border border-gray-border rounded-3xl focus:ring focus:ring-icon-blue outline-none font-aleo contact-shadow
                ${(nameValid || name.length === 0) ? 'focus:ring-icon-blue' : 'focus:ring-red-700 border-2 border-red-700'}
                ${(nameValid) ? 'border-2 border-green-600' : ''}`}
              />
              {(nameValid || name.length === 0) ? '' : (
              <div className={`text-black text-sm pl-2 pt-1`}>
                {translation.form_name_error}
              </div>)}
            </div>
            <div className="relative mb-4">
              <div className={`${(email.length > 0) ? 'block' : 'hidden'}`}>
                <FontAwesomeIcon
                  icon={emailValid ? faCheck : faXmark}
                  className={`${(emailValid) ? 'text-green-600' : 'text-red-700'}  text-xl absolute right-4 top-2`}
                />
              </div>
              <input
                value={email}
                ref={emailInput}
                onChange={handleEmailInput}
                type="email"
                placeholder={translation.form_email}
                className={`w-full h-9  px-3 text-base text-gray-placeholder bg-white bg-clip-padding contact-shadow
                border border-gray-border rounded-3xl focus:ring focus:ring-icon-blue outline-none font-aleo
                ${(emailValid || email.length === 0) ? 'focus:ring-icon-blue' : 'focus:ring-red-700 border-2 border-red-700'}
                ${(emailValid) ? 'border-2 border-green-600' : ''}`}
              />
              {(emailValid || email.length === 0) ? '' : (
                <div className={`text-black text-sm pl-2 pt-1`}>
                  {translation.form_email_error}
                </div>
              )}
            </div>
            <div className="relative mb-4">
              <div className={`${(message.length > 0) ? 'block' : 'hidden'}`}>
                <FontAwesomeIcon
                  icon={messageValid ? faCheck : faXmark}
                  className={`${(messageValid) ? 'text-green-600' : 'text-red-700'}  text-xl absolute right-4 top-2`}
                />
              </div>
              <textarea
                value={message}
                ref={messageInput}
                onChange={handleMessageInput}
                placeholder={translation.form_message}
                className={`w-full h-40 px-3 pt-2 pb-1 text-base text-gray-placeholder contact-shadow
              bg-white bg-clip-padding border border-gray-border rounded-xl
                overflow-auto resize-none focus:ring focus:ring-icon-blue outline-none font-aleo
                ${(messageValid || message.length === 0) ? 'focus:ring-icon-blue' : 'focus:ring-red-700 border-2 border-red-700'}
                ${(messageValid) ? 'border-2 border-green-600' : ''}`}
              />
              <div className={`${(messageValid || message.length === 0) ? 'opacity-0' : 'opacity-100  text-black'} text-white text-sm pl-2 pt-1`}>
                {translation.form_message_error}
              </div>
              {!validForm && (<div className={`${(validForm) ? 'opacity-0' : 'opacity-100 text-black'} text-white text-sm pl-2 pt-1`}>
              {translation.form_error}
              </div>)}
            </div>
            <div className="flex justify-center items-center">
              <Boop scale='1.05' >
                <button
                  className="inline self-start action-button-gradient py-3 px-8 sm:py-3 sm:px-12
                  rounded-full cursor-pointer font-poppins text-white text-[1rem] font-bold sm:text-sm
                  transition-all duration-300 ease-in-out gold-gradient button-active"
                  type="submit"
                >
                  {translation.form_btn}
                </button>
              </Boop>
            </div>
          </form>
        </>
      )}
    </>
  );
}

export default ContactForm;
