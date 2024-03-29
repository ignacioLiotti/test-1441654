import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
import Link from "next/dist/client/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

import { Navigation, Pagination, Autoplay, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Bootcamp() {
  const [reactClass, setReactClass] = useState(false);
  const [angularClass, setAngularClass] = useState(false);

  const [reactBtn, setReactBtn] = useState(false);
  const [angularBtn, setAngularBtn] = useState(false);

  const handleReactClick = () => {
    setReactClass(!reactClass);
    setReactBtn(!reactBtn);
  };

  const handleAngularClick = () => {
    setAngularClass(!angularClass);
    setAngularBtn(!angularBtn);
  };

  const [openMenu, setOpenMenu] = useState(false);

  const onMenuPress = () => {
    setOpenMenu((prevState) => !prevState);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className={`w-full  flex flex-col items-center justify-center ${
      !openMenu ? "overflow-y-auto" : "overflow-y-hidden h-[100%]"
    }`}>
      <Head>
        <title>Devlights - Bootcamp</title>
        <meta
          name="description"
          content="¿Querés convertirte en un desarrollador fullstack en cuatro meses?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="w-full flex items-center justify-between h-14 pl-8 md:pl-0">
        <p className="mx-auto">
          <strong>Email: </strong>contact@devlights.com
        </p>

        <div className="hidden md:flex items-center gap-4 justify-center md:justify-around mx-auto">
          <p className="">Seguinos en:</p>
          <a href="https://www.linkedin.com/company/devlights-us" 
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-gray-600 text-3xl"
            />
          </a>
          <a href="https://www.instagram.com/devlights_arg/"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className="text-gray-600 text-3xl"
            />
          </a>
          <a href="https://www.facebook.com/devlightsok/"
            target="_blank"
            rel="noreferrer">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="text-gray-600 text-3xl"
            />
          </a>
        </div>
      </header>
      <section className="w-full flex h-[70px] justify-center items-center bg-gray-bootcamp">
        <nav className="w-full flex items-center justify-between h-14 md:w-[70rem] px-8 md:px-8">
          <img
            src={`/images/bootcamp/logobootcamp.svg`}
            className="w-[150px] md:w-[150px] my-8 object-contain"
            alt="Bootcamp logo"
          />
          <ul className="hidden md:flex gap-3">
            <Link href="#inicio" className="cursor-pointer">
              <a className="text-gold-bootcamp ">Inicio</a>
            </Link>
            <Link href="#por_que_bootcamp" className="cursor-pointer">
              <a className="text-white  hover:text-gold-bootcamp">
                ¿Por qué Bootcamp?
              </a>
            </Link>
            <Link href="#cursos" className="cursor-pointer">
              <a className="text-white  hover:text-gold-bootcamp">
                Cursos
              </a>
            </Link>
            <Link href="#inscripcion" className="cursor-pointer">
              <a className="text-white  hover:text-gold-bootcamp">
                Inscripción
              </a>
            </Link>
          </ul>
          
          <button className="md:hidden z-[100]" onClick={onMenuPress}>
            <FontAwesomeIcon
              icon={openMenu ? faXmark : faBars}
              className="h-8 w-8 m-4 text-white"
            />
          </button>

        </nav>
      </section>
      <section className="relative w-full">
      <ul className={`overflow-hidden fixed flex flex-col justify-start items-center bg-gray-bootcamp w-[100vw] h-[100vh] gap-8 z-[100] transition-all ease-in-out duration-500 animate-slideLeft
          ${
            !openMenu ? "h-[0vh]" : ""
          }`}
          >
            <Link href="#inicio" className="cursor-pointer">
              <a className="text-gold-bootcamp ">Inicio</a>
            </Link>
            <Link href="#por_que_bootcamp" className="cursor-pointer">
              <a className="text-white  hover:text-gold-bootcamp">
                ¿Por qué Bootcamp?
              </a>
            </Link>
            <Link href="#cursos" className="cursor-pointer">
              <a className="text-white  hover:text-gold-bootcamp">
                Cursos
              </a>
            </Link>
            <Link href="#inscripcion" className="cursor-pointer">
              <a className="text-white  hover:text-gold-bootcamp">
                Inscripción
              </a>
            </Link>
            <div className="flex gap-[1rem] ">
              <a href="https://www.linkedin.com/company/devlights-us" 
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white text-3xl"
                />
              </a>
              <a href="https://www.instagram.com/devlights_arg/"
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon
                  icon={faInstagramSquare}
                  className="text-white text-3xl"
                />
              </a>
              <a href="https://www.facebook.com/devlightsok/"
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon
                  icon={faFacebookSquare}
                  className="text-white text-3xl"
                />
              </a>
            </div>
          </ul>
          
      </section>
      <section
        id="inicio"
        className="w-full flex  justify-center items-center bg-gray-bootcamp overflow-hidden"
      >
        <div className="w-full flex flex-col-reverse md:flex-row justify-center items-center max-w-[75rem]">
          <div className="">
            <div className=" flex-[1_10_0px] max-w-[35rem] p-[1.2rem] lg:p-0">
              <h2 className="text-white text-base lg:text-lg text-center md:text-left font-normal  ">
                Devlights te invita a sus
              </h2>
              <h1 className="text-[2.5rem] lg:text-[5rem] text-center md:text-left font-semibold leading-[5rem] bootcamp-text-gradient text-transparent bg-clip-text">
                Bootcamps
              </h1>
              <div className="flex flex-col items-center md:flex-row gap-5 my-6">
                <Link href='#inscripcion'>
                  <a className="w-52 h-[50px] flex items-center justify-center bg-orange-bootcamp-btn rounded-full text-white font-semibold  text-xs lg:text-sm text-center md:text-left">
                    Inscripción
                  </a>
                </Link>
                <Link href='#por_que_bootcamp'>
                  <a className="w-52 h-[50px] flex items-center justify-center border border-orange-bootcamp-btn rounded-full text-white font-semibold  text-xs lg:text-sm text-center md:text-left">
                    Información
                  </a>
                </Link>
              </div>
              <p className="text-sm lg:text-base text-center md:text-left font-bold  bootcamp-text-gradient text-transparent bg-clip-text">
                ¿Querés convertirte en un desarrollador fullstack en cuatro meses?
              </p>
              <p className="text-xs lg:text-sm text-center md:text-left font-medium  text-white my-2">
                {" "}
                ¡Sólo necesitás conocimientos mínimos en programación y nosotros
                te ayudamos a lograrlo!
              </p>
              <p className="text-xs lg:text-sm text-center md:text-left font-normal  text-white mt-8">
                ¡Las Bootcamps Devlights <strong>son gratuitas!</strong>
              </p>
            </div>
          </div>


          <div className="hidden lg:flex w-1/2 relative ">
            <img
              src={`/images/bootcamp/girl-bootcamp.webp`}
              className="max-w-[500px] md:mt-8 object-contain z-10"
              alt="Bootcamp logo"
              data-aos="fade-left"
              data-aos-duration={1000}
              data-aos-once
            />
            <span className="absolute top-0 right-0 w-[10rem] h-[10rem] md:top-20 md:right-10 md:w-[27rem] md:h-[27rem] rounded-[2rem] bg-[linear-gradient(to_bottom_right,#6ae2cd,#afe287)]"
            data-aos="zoom-in"
            data-aos-duration={1000}
            data-aos-once>
            </span>

            <span className="absolute top-80 right-0 w-[15rem] h-[15rem] rounded-[2rem] bg-[linear-gradient(to_top_right,#fbd03a,#fc9922)]"
            data-aos="zoom-in"
            data-aos-duration={1000}
            data-aos-delay="300"
            data-aos-once></span>

            <span className="absolute top-52 -right-6 w-[6rem] h-[6rem] rounded-xl bg-[#fccb1f]"
            data-aos="zoom-in"
            data-aos-duration={1000}
            data-aos-delay="500"
            data-aos-once></span>

            <span className="absolute top-44 left-28 w-[4rem] h-[4rem] rounded-xl bg-[#cfe165]"
            data-aos="zoom-in"
            data-aos-duration={1000}
            data-aos-delay="700"
            data-aos-once></span>
            <span></span>
          </div>
          <div className="flex lg:hidden flex-[1_0_200px] max-w-[350px] mt-10">
            <img
                src={`/images/bootcamp/muchacha.png`}
                className="md:mt-8 object-contain z-10"
                alt="Bootcamp logo"
                data-aos="fade-left"
                data-aos-duration={1000}
                data-aos-once
              />
          </div>
          
        </div>
      </section>
      <section
        id="por_que_bootcamp"
        className="w-full flex flex-col justify-center items-center lg-[70rem] p-[1.2rem] lg:p-0"
      >
        <div className="w-full flex flex-col items-center justify-center"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-once
        >
          <h2 className="text-center text-base md:text-lg font-bold  text-gray-700 my-12">
            ¿Por qué Bootcamp Devlights?
          </h2>
          <p className="w-full text-center text-xs md:text-sm text-gray-600">
            Vas a tener un entrenamiento intensivo donde aprenderás a programar en
            una de las tecnologías más utilizadas actualmente:{" "}
            <span className="text-orange-bootcamp-btn font-bold">
              ReactJS ó .Net+Angular.
            </span>
          </p>
          <div className="w-full flex flex-col lg:flex-row justify-between mt-12 lg:w-[70rem] ">
            <div className=" lg:w-[23rem] flex flex-col items-center">
              <img
                src={`/images/bootcamp/classes.svg`}
                className="w-[60px] md:w-[80px] md:mt-8 object-contain"
                alt="Bootcamp logo"
              />
              <h3 className="text-center text-base font-medium text-gray-600 mt-4 md:my-4">
                Clases y asistencia
              </h3>
              <p className="text-center text-sm text-gray-400 ">
                3 meses: Clases de tecnología
              </p>
              <p className="text-center text-sm text-gray-400 ">
                1 mes: Realización de trabajo final
              </p>
            </div>
            <div className=" lg:w-[23rem] flex flex-col items-center mt-12 md:mt-0">
              <img
                src={`/images/bootcamp/benefits.svg`}
                className="w-[60px] md:w-[80px] md:mt-8 object-contain"
                alt="Bootcamp logo"
              />
              <h3 className="text-center text-base font-medium text-gray-600 my-4">
                Beneficios de nuestros programas
              </h3>
              <p className="text-center text-sm text-gray-400 leading-8">
                Aprenderás a programar<br></br>en una de las tecnologías<br></br>
                más utilizadas actualmente:<br></br>
                <span className="text-orange-bootcamp-btn font-bold">
                  ReactJS ó .Net+Angular.
                </span>
              </p>
            </div>
            <div className=" lg:w-[23rem] flex flex-col items-center mt-12 md:mt-0">
              <img
                src={`/images/bootcamp/time.svg`}
                className="w-[60px] md:w-[80px] md:mt-8 object-contain"
                alt="Bootcamp logo"
              />
              <h3 className="text-center text-base font-medium text-gray-600 my-4">
                Duración de las clases
              </h3>
              <p className="text-center text-sm text-gray-400 ">
                3 veces por semana
              </p>
              <p className="text-center text-sm text-gray-400 ">
                (2 horas cada clase)
              </p>
              <p className="text-center text-sm text-gray-400 ">
                 96 hs en total
              </p>
            </div>
          </div>
        </div> 
        <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10 my-20"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-once>
          <img
            src={`/images/bootcamp/computerGuy.png`}
            className="flex-[0_10_50%] min-w-[200px] max-w-[500px] md:mt-8 object-contain "
            alt="Bootcamp logo"
          />
          <div className="md:mt-16 flex-[0_1_500px] min-w-[300px] ">
            <h2 className="text-base md:text-lg text-center md:text-left font-bold  text-gray-700 md:my-12">
              ¿A quien está dirigido?
            </h2>
            <p className="text-xs md:text-base text-center md:text-left  text-gray-700 md:leading-9">
              Ya sea que quieras trabajar en Front End, Back End, Full Stack,
              haciendo desarrollos web o construyendo aplicaciones móviles, este
              programa es para vos. Solo necesitas tener conocimiento básico en
              programación, actitud de querer aprender y ganas de trabajar en
              equipo. Esta es tu oportunidad de introducirte al mundo IT. En
              Devlights lo podés lograr.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row justify-center bg-gray-bootcamp md:mt-32 py-16 ">
        <div className="flex flex-col items-center md:w-[50rem]">
          <h2 className="text-base md:text-xl text-cyan-bootcamp  font-medium mb-8"
          data-aos="fade"
          data-aos-duration={1000}
          data-aos-once
          >
            Lo que vas a aprender
          </h2>
          <div className="hidden w-[34rem] md:flex flex-wrap gap-10"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-once>
            <div>
              <img
                src={`/images/bootcamp/angular.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="Angular"
              />
              <p className="text-white text-center ">Angular</p>
            </div>
            <div>
              <img
                src={`/images/bootcamp/netcore.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt=".Net core"
              />
              <p className="text-white text-center ">.Net core</p>
            </div>
            <div>
              <img
                src={`/images/bootcamp/react.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="React"
              />
              <p className="text-white text-center ">ReactJS</p>
            </div>
            <div>
              <img
                src={`/images/bootcamp/trello.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="Trello"
              />
              <p className="text-white text-center ">Trello</p>
            </div>
            <div>
              <img
                src={`/images/bootcamp/css.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="CSS"
              />
              <p className="text-white text-center ">CSS</p>
            </div>
            <div>
              <img
                src={`/images/bootcamp/html5.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="HTML5"
              />
              <p className="text-white text-center ">HTML5</p>
            </div>
            <div>
              <img
                src={`/images/bootcamp/js.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="Javascript"
              />
              <p className="text-white text-center ">Javascript</p>
            </div>
            <div>
              <img
                src={`/images/bootcamp/git.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="Git"
              />
              <p className="text-white text-center ">Git</p>
            </div>
          </div>
        </div>
        <div className="md:hidden w-full flex justify-center items-center overflow-hidden">
          <Swiper
                  modules={[Autoplay, Pagination, Navigation]}
                  slidesPerView={3}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  className=""
          >
            <SwiperSlide className="flex flex-col justify-center items-center">
              <img
                  src={`/images/bootcamp/angular.svg`}
                  className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                  alt="Angular"
                />
              <p className="text-white text-center ">Angular</p>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center items-center">
              <img
                  src={`/images/bootcamp/netcore.svg`}
                  className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                  alt=".Net core"
                />
              <p className="text-white text-center ">.Net core</p>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center items-center">
              <img
                  src={`/images/bootcamp/react.svg`}
                  className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                  alt="React"
                />
              <p className="text-white text-center ">ReactJS</p>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center items-center">
            < img
                src={`/images/bootcamp/trello.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="Trello"
              />
              <p className="text-white text-center ">Trello</p>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center items-center">
            <img
                src={`/images/bootcamp/css.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="CSS"
              />
              <p className="text-white text-center ">CSS</p>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center items-center">
              <img
                src={`/images/bootcamp/html5.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="HTML5"
              />
              <p className="text-white text-center ">HTML5</p>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center items-center">
              <img
                src={`/images/bootcamp/js.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="Javascript"
              />
              <p className="text-white text-center ">Javascript</p>
            </SwiperSlide>
            <SwiperSlide className="flex flex-col justify-center items-center">
              <img
                src={`/images/bootcamp/git.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="Git"
              />
              <p className="text-white text-center ">Git</p>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section
        id="cursos"
        className="w-full flex flex-col items-center justify-center md:py-20 "
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-once
      >
        <h2 className="text-lg md:text-xl text-gray-700 font-medium my-8">
          Nuestros cursos
        </h2>
        <div className="flex flex-col md:flex-row  justify-center gap-10 mb-12 px-12">
          <div className="mx-4 md:mx-0 flex flex-col flex-[1_1_500px] max-w-[500px] h-full rounded-3xl overflow-hidden shadow-white-action-btn relative">
            <div className="w-full h-[200px] md:h-[350px] bg-react-course bg-left-top bg-working-cover md:bg-center-top md:bg-size-100-100 bg-no-repeat opacity-60 hover:opacity-100 transition-all "></div>
              <div className="px-6 pt-4 pb-8 ">
                <h2 className="text-lg text-gray-700  font-medium mb-4">
                  React
                </h2>
                <p className="text-gray-600  text-xs md:text-sm whitespace-pre-wrap">
                  React es una biblioteca escrita en JavaScript, desarrollada en
                  Facebook para facilitar la creación de componentes interactivos,
                  reutilizables, para interfaces de usuario.
                </p>
                <p
                  className={`text-gray-600  text-xs md:text-sm whitespace-pre-wrap ${
                    !reactClass ? "hidden" : ""
                  } `}
                >
                  Se utiliza en Facebook para la producción de componentes, e
                  Instagram está escrito enteramente en React. Uno de sus puntos
                  más destacados, es que no sólo se utiliza en el lado del
                  cliente, sino que también se puede representar en el servidor, y
                  trabajar juntos.
                </p>
                <button
                  className="w-52 h-[50px] bg-orange-bootcamp-btn rounded-full text-white font-semibold  text-base mt-6"
                  onClick={handleReactClick}
                >
                {!reactBtn ? "Leer más" : "Leer menos"}
                </button>
              </div>
          </div>
          <div className="mx-4 md:mx-0 flex flex-col flex-[1_1_500px] max-w-[500px] h-full rounded-3xl overflow-hidden shadow-white-action-btn relative">
            <div className="w-full h-[200px] md:h-[350px] bg-angular-course bg-left-top bg-working-cover md:bg-center-top md:bg-size-100-100 bg-no-repeat opacity-60 hover:opacity-100 transition-all  "></div>
            <div className="px-6 pt-4 pb-8 ">
              <h2 className="text-lg text-gray-700  font-medium mb-4">
                .Net + Angular
              </h2>
              <p className="text-gray-600  text-xs md:text-sm whitespace-pre-wrap">
                NET Core es un nuevo framework (Basado en el anterior .Net)
                desarrollado por Microsoft, de código abierto y multiplataforma
                para la creación de aplicaciones modernas conectadas a Internet,
              </p>
              <p
                className={`text-gray-600  text-xs md:text-sm whitespace-pre-wrap ${
                  !angularClass ? "hidden" : ""
                }`}
              >
                como aplicaciones web y APIs Web. Se diseñó para proporcionar un
                framework de desarrollo optimizado para las aplicaciones que se
                implementan tanto en la nube como en servidores dedicados en las
                instalaciones del cliente. Permite desarrollar y ejecutar
                aplicaciones ASP.NET Core en Windows, Mac y Linux.
              </p>
              <button
                className="w-52 h-[50px] bg-orange-bootcamp-btn rounded-full text-white font-semibold  text-base mt-6"
                onClick={handleAngularClick}
              >
                {!angularBtn ? "Leer más" : "Leer menos"}
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center bg-gray-bootcamp mt-10 py-16"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-once
          >
        <h2 className=" w-[340px] text-lg text-center text-gold-bootcamp  font-bold">
          Te presentamos a los coaches
        </h2>
        <div className="flex flex-col flex-[1_1_0] max-w-[1000px] md:flex-row items-center justify-around md:h-[280px] bg-gold-bootcamp rounded-3xl mx-[1rem] py-[50px] px-[30px] mt-10">
          <div className="w-[150px] md:min-w-[200px] h-[150px] md:h-[200px] border-[10px] flex-[0_0_150px] border-white  rounded-full bg-fede-coach bg-right-center bg-working-cover  bg-no-repeat "></div>
          <div className="md:ml-6 md:w-[200px] flex-[0_0_0px]">
            <h3 className="text-center md:text-left text-sm font-bold   mt-4 md:mt-0">
              Federico Leobarth
            </h3>
            <p className=" text-sm font-normal ">
              Senior Fullstack Developer
            </p>
          </div>
          <p className="lg:w-[470px] text-xs font-normal  whitespace-pre-wrap mt-4 md:mt-0">
            Trabajo desde el año 2017 como desarrollador fullstack web y mobile.
            En el año 2019 ingresé a trabajar a Devlights en diversos proyectos
            utilizando tecnologías front como React y Angular, Mobile como Java
            y React native y backend Nodejs y Python. Actualmente en Devlights
            cumplo el rol de líder técnico y acompañamiento a los trainee.
          </p>
        </div>
      </section>
      <section
        id="inscripcion"
        className="w-full flex flex-col justify-center items-center p-8 md:p-20 mb-8"
        data-aos="fade-up"
        data-aos-duration={1000}
        data-aos-once
      >
        <h2 className="text-center text-lg md:text-xl text-gray-800  font-medium">
          ¿Listo para comenzar?
        </h2>
        <p className="text-center text-base text-gray-800 ">
          completá el formulario
        </p>
        <img
          src={`/images/bootcamp/form-arrow.svg`}
          className="w-[60px] md:w-[70px] md:mt-4 object-contain"
          alt="From arrow"
        />
        <div className="flex flex-col items-center justify-center flex-[1_1_320px] md:max-w-[1180px] h-[320px] rounded-3xl shadow-white-action-btn p-12  mt-10">
          <h3 className="text-center text-sm md:text-base text-gray-700  font-medium">
            El periodo de inscripción al bootcamp ha finalizado.
          </h3>
          <p className="text-center text-xs md:text-sm text-gray-700 mt-4 md:mt-0 ">
            Los inscriptos estarán recibiendo un correo sobre el challenge a
            realizar en los próximos días.
          </p>
          <p className="text-center text-sm text-gray-700 mt-8 md:mt-0 ">
            11/03/2022
          </p>
        </div>
      </section>
      <footer className="w-full flex flex-col items-center bg-gray-bootcamp pt-10">
        <div className="flex flex-col md:flex-row md:w-[74rem] justify-between">
          <img
            src={`/images/bootcamp/logobootcamp-big.png`}
            className="w-[240px] md:mt-4 object-contain"
            alt="From arrow"
          />
          <div className="flex flex-col">
            <p className="text-white text-center md:text-left text-sm mt-2">Cursos</p>
            <Link href="#cursos" className="cursor-pointer">
              <a className="text-white text-center md:text-left text-xs  mt-2">
                React
              </a>
            </Link>
            <Link href="#cursos" className="cursor-pointer">
              <a className="text-white text-center md:text-left text-xs  mt-2">
                Net.core + Angular
              </a>
            </Link>
          </div>

          <div className="flex flex-col">
            <p className="text-white text-center md:text-left text-sm  mt-6 md:mt-2">
              Trabajá con nosotros
            </p>
            <button
              className="text-white text-center md:text-left text-xs  mt-2"
              onClick={() => (window.location = "mailto:rrhh@devlights.com")}
            >
              rrhh@devlights.com
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-around items-center w-full border-t-[1px] border-cyan-bootcamp mt-10 p-8">
          <p className="text-center text-white ">Copyright 2022</p>
          <div className="flex justify-center md:justify-end mt-6 md:-mt-6 md:mr-20">
            <ul className="flex flex-col md:flex-row gap-4">
              <Link
                href="https://www.linkedin.com/company/devlights-us"
                className="cursor-pointer"
              >
                <a className="text-white text-center md:text-left ">LinkedIn</a>
              </Link>
              <Link
                href="https://www.instagram.com/devlights_arg/"
                className="cursor-pointer"
              >
                <a className="text-white text-center md:text-left ">Instagram</a>
              </Link>
              <Link
                href="https://www.facebook.com/devlightsok/"
                className="cursor-pointer"
              >
                <a className="text-white text-center md:text-left ">Facebook</a>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Bootcamp;
