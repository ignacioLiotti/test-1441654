import React, { useState, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import emailjs from "emailjs-com";

function ContactForm() {
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
      setNameValid(true);
    } else {
      setNameValid(false);
    }
    setName(nameInput.current.value);
  };
  const handleEmailInput = () => {
    const regex = /\S+@\S+\.\S+/;
    if (
      emailInput.current.value.length >= 10 &&
      regex.test(emailInput.current.value)
    ) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
    setEmail(emailInput.current.value);
  };
  const handleMessageInput = () => {
    if (messageInput.current.value.length >= 10) {
      setMessageValid(true);
    } else {
      setMessageValid(false);
    }
    setMessage(messageInput.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_qrzwecp", "template_ktzwn8v", { name, message, email }, 'SjD8eSGLl3REEhHW7')
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );

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
      }, 1500);
      return;
    }
    setValidForm(false);
  };

  const handleBackToHome = () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
    setName("");
    setNameValid(false);
    setEmail("");
    setEmailValid("");
    setMessage("");
    setMessageValid("");
    setErrorSendingMessage(false);
    setMessageSent(false);
  };

  return (
    <>
      {messageSent && (
        <div className="w-full h-full flex flex-col items-center">
          <span className="text-4xl text-white font-bold font-open-sans my-24">
            Message sent!
          </span>
          <span className="text-lg text-white font-bold font-open-sans mb-6">
            We will contact you soon
          </span>
          <button
            className="inline-block action-button-gradient py-2 px-6 sm:py-3 sm:px-12
              rounded-full cursor-pointer font-open-sans text-white text-xs sm:text-sm
              transition-all duration-300 ease-in-out"
            onClick={handleBackToHome}
          >
            Back to Home
          </button>
        </div>
      )}
      {!messageSent && (
        <div className="px-5 mt-8 md:mt-0">
          <h4 className="text-[1.2rem] md:text-lg mb-[1.6rem] text-white font-bold font-open-sans">
            Connect with us
          </h4>
          <form
            action="#"
            onSubmit={handleSubmit}
            className="flex flex-col w-full"
          >
            <div className="relative">
              <div className={`${name.length > 0 ? "block" : "hidden"}`}>
                <FontAwesomeIcon
                  icon={nameValid ? faCheck : faXmark}
                  className={`${
                    nameValid ? "text-green-600" : "text-red-700"
                  }  text-xl absolute right-2 top-2`}
                />
              </div>
              <input
                value={name}
                ref={nameInput}
                onChange={handleNameInput}
                type="text"
                placeholder="Name*"
                className={`w-full h-12 px-4 text-base text-gray-placeholder bg-white bg-clip-padding
                 rounded-xl focus:ring focus:ring-icon-blue outline-none font-aleo
                ${
                  nameValid || name.length === 0
                    ? "focus:ring-icon-blue"
                    : "focus:ring-red-700 border-2 border-red-700"
                }
                ${nameValid ? "border-2 border-green-600" : ""}`}
              />
              <div
                className={`${
                  nameValid || name.length === 0 ? "opacity-0" : "opacity-100"
                } text-white text-sm pl-2 pt-1`}
              >
                Name must be at least 5 characters long.
              </div>
            </div>
            <div className="relative">
              <div className={`${email.length > 0 ? "block" : "hidden"}`}>
                <FontAwesomeIcon
                  icon={emailValid ? faCheck : faXmark}
                  className={`${
                    emailValid ? "text-green-600" : "text-red-700"
                  }  text-xl absolute right-2 top-2`}
                />
              </div>
              <input
                value={email}
                ref={emailInput}
                onChange={handleEmailInput}
                type="email"
                placeholder="E-mail*"
                className={`w-full h-12  px-4 text-base text-gray-placeholder bg-white bg-clip-padding
                 rounded-xl focus:ring focus:ring-icon-blue outline-none font-aleo
                ${
                  emailValid || email.length === 0
                    ? "focus:ring-icon-blue"
                    : "focus:ring-red-700 border-2 border-red-700"
                }
                ${emailValid ? "border-2 border-green-600" : ""}`}
              />
              <div
                className={`${
                  emailValid || email.length === 0 ? "opacity-0" : "opacity-100"
                } text-white text-sm pl-2 pt-1`}
              >
                Please enter a valid email with at least 10 characters long.
              </div>
            </div>
            <div className="relative mb-4">
              <div className={`${message.length > 0 ? "block" : "hidden"}`}>
                <FontAwesomeIcon
                  icon={messageValid ? faCheck : faXmark}
                  className={`${
                    messageValid ? "text-green-600" : "text-red-700"
                  }  text-xl absolute right-2 top-2`}
                />
              </div>
              <textarea
                value={message}
                ref={messageInput}
                onChange={handleMessageInput}
                placeholder="Message*"
                className={`w-full h-[8rem] px-4 pt-4 pb-1 text-base text-gray-placeholder
              bg-white bg-clip-padding rounded-xl
                overflow-auto resize-none focus:ring focus:ring-icon-blue outline-none font-aleo
                ${
                  messageValid || message.length === 0
                    ? "focus:ring-icon-blue"
                    : "focus:ring-red-700 border-2 border-red-700"
                }
                ${messageValid ? "border-2 border-green-600" : ""}`}
              />
              <div
                className={`${
                  messageValid || message.length === 0
                    ? "opacity-0"
                    : "opacity-100"
                } text-white text-sm pl-2 pt-1`}
              >
                Message must be at least 10 characters long.
              </div>
              {!validForm && (
                <div
                  className={`${
                    validForm ? "opacity-0" : "opacity-100"
                  } text-white text-sm pl-2 pt-1`}
                >
                  Please check all the fields are complete and try again.
                </div>
              )}
            </div>
            <button
              className="inline-block self-start action-button-gradient py-3 px-8 sm:py-3 sm:px-12
              rounded-full cursor-pointer font-poppins text-white text-[1rem] font-bold sm:text-sm
              transition-all duration-300 ease-in-out"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default ContactForm;
