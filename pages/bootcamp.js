import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/dist/client/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

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

  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Head>
        <title>Devlights - Bootcamp</title>
        <meta
          name="description"
          content="¿Querés convertirte en un desarrollador fullstack en cuatro meses?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="w-full flex items-center justify-between h-14 md:w-[70rem]">
        <p className="font-poppins">
          <strong>Email: </strong>contact@devlights.com
        </p>

        <div className="flex items-center gap-4 justify-around">
          <p className="font-poppins">Seguinos en:</p>
          <a href="https://www.linkedin.com/company/devlights-us">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-gray-600 text-3xl"
            />
          </a>
          <a href="https://www.instagram.com/devlights_arg/">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className="text-gray-600 text-3xl"
            />
          </a>
          <a href="https://www.facebook.com/devlightsok/">
            <FontAwesomeIcon
              icon={faFacebookSquare}
              className="text-gray-600 text-3xl"
            />
          </a>
        </div>
      </header>
      <section className="w-full flex h-[70px] justify-center items-center bg-gray-bootcamp">
        <nav className="w-full flex items-center justify-between h-14 md:w-[70rem]">
          <img
            src={`/images/bootcamp/logobootcamp.svg`}
            className="w-[100px] md:w-[150px] my-8 object-contain"
            alt="Bootcamp logo"
          />
          <ul className="flex gap-3">
            <Link href="#inicio" className="cursor-pointer">
              <a className="text-gold-bootcamp font-poppins">Inicio</a>
            </Link>
            <Link href="#por_que_bootcamp" className="cursor-pointer">
              <a className="text-white font-poppins hover:text-gold-bootcamp">
                ¿Por qué Bootcamp?
              </a>
            </Link>
            <Link href="#cursos" className="cursor-pointer">
              <a className="text-white font-poppins hover:text-gold-bootcamp">
                Cursos
              </a>
            </Link>
            <Link href="#inscripcion" className="cursor-pointer">
              <a className="text-white font-poppins hover:text-gold-bootcamp">
                Inscripción
              </a>
            </Link>
          </ul>
        </nav>
      </section>
      <section
        id="inicio"
        className="w-full flex  justify-center items-center bg-gray-bootcamp"
      >
        <div className="w-full flex items-center md:w-[70rem]">
          <div>
            <h2 className="text-white text-3xl font-normal font-poppins ">
              Devlights te invita a sus
            </h2>
            <h1 className="text-7xl font-medium font-poppins bootcamp-text-gradient text-transparent bg-clip-text">
              Bootcamps
            </h1>
            <div className="flex gap-5 my-6">
              <button className="w-52 h-[50px] bg-orange-bootcamp-btn rounded-full text-white font-semibold font-poppins text-lg">
                Inscripción
              </button>
              <button className="w-52 h-[50px] border border-orange-bootcamp-btn rounded-full text-white font-semibold font-poppins text-lg">
                Información
              </button>
            </div>
            <p className="text-2xl font-semibold font-poppins bootcamp-text-gradient text-transparent bg-clip-text">
              ¿Querés convertirte en un desarrollador fullstack en cuatro meses?
            </p>
            <p className="text-xl font-medium font-poppins text-white my-2">
              {" "}
              ¡Sólo necesitás conocimientos mínimos en programación y nosotros
              te ayudamos a lograrlo!
            </p>
            <p className="text-xl font-normal font-poppins text-white mt-8">
              ¡Las Bootcamps Devlights <strong>son gratuitas!</strong>
            </p>
          </div>
          <img
            src={`/images/bootcamp/muchacha.png`}
            className="w-[100px] md:w-[40rem] md:mt-8 object-contain"
            alt="Bootcamp logo"
          />
        </div>
      </section>
      <section
        id="por_que_bootcamp"
        className="w-full flex flex-col justify-center items-center md-[70rem]"
      >
        <h2 className="text-center text-4xl font-bold font-poppins text-gray-700 my-12">
          ¿Por qué Bootcamp Devlights?
        </h2>
        <p className="w-full text-center text-xl text-gray-600 md:w-[58rem] font-poppins">
          Vas a tener un entrenamiento intensivo donde aprenderás a programar en
          una de las tecnologías más utilizadas actualmente:{" "}
          <span className="text-orange-bootcamp-btn font-bold">
            ReactJS ó .Net+Angular.
          </span>
        </p>
        <div className="w-full flex justify-between gap-38 mt-12 md:w-[70rem] ">
          <div className=" w-[23rem] flex flex-col items-center">
            <img
              src={`/images/bootcamp/classes.svg`}
              className="w-[60px] md:w-[80px] md:mt-8 object-contain"
              alt="Bootcamp logo"
            />
            <h3 className="text-center text-[1.6rem] font-poppins font-medium text-gray-600 my-4">
              Clases y asistencia
            </h3>
            <p className="text-center text-[1.4rem]  font-poppins text-gray-400 leading-8">
              3 meses: Clases de<br></br>tecnología<br></br>1 mes: Realización
              de<br></br>trabajo final
            </p>
          </div>
          <div className=" w-[23rem] flex flex-col items-center">
            <img
              src={`/images/bootcamp/benefits.svg`}
              className="w-[60px] md:w-[80px] md:mt-8 object-contain"
              alt="Bootcamp logo"
            />
            <h3 className="text-center text-[1.6rem] font-poppins font-medium text-gray-600 my-4">
              Beneficios de nuestros programas
            </h3>
            <p className="text-center text-[1.4rem]  font-poppins text-gray-400 leading-8">
              Aprenderás a programar<br></br>en una de las tecnologías<br></br>
              más utilizadas actualmente:<br></br>
              <span className="text-orange-bootcamp-btn font-bold">
                ReactJS ó .Net+Angular.
              </span>
            </p>
          </div>
          <div className=" w-[23rem] flex flex-col items-center">
            <img
              src={`/images/bootcamp/time.svg`}
              className="w-[60px] md:w-[80px] md:mt-8 object-contain"
              alt="Bootcamp logo"
            />
            <h3 className="text-center text-[1.6rem] font-poppins font-medium text-gray-600 my-4">
              Duración de las clases
            </h3>
            <p className="text-center text-[1.4rem]  font-poppins text-gray-400 leading-8">
              3 veces por semana<br></br>(2 horas cada clase)<br></br>96 hs en
              total
            </p>
          </div>
        </div>
        <div className="w-full flex items-center md:w-[70rem] gap-10 mt-20">
          <img
            src={`/images/bootcamp/computerGuy.png`}
            className="w-[60px] md:w-[30rem] md:mt-8 object-contain"
            alt="Bootcamp logo"
          />
          <div className="mt-16">
            <h2 className="text-4xl font-bold font-poppins text-gray-700 my-12">
              ¿A quien está dirigido?
            </h2>
            <p className="text-[1.4rem]  font-poppins text-gray-700 leading-9">
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
      <section className="w-full flex justify-center bg-gray-bootcamp mt-32 py-16">
        <div className="flex flex-col items-center w-[50rem]">
          <h2 className="text-[2.5rem] text-cyan-bootcamp font-poppins font-medium mb-8">
            Lo que vas a aprender
          </h2>
          <div className=" w-[34rem] flex flex-wrap gap-10">
            <div>
              <img
                src={`/images/bootcamp/angular.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="Angular"
              />
              <p className="text-white text-center font-poppins">Angular</p>
            </div>
            <div>
              <img
                src={`/images/bootcamp/netcore.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt=".Net core"
              />
              <p className="text-white text-center font-poppins">.Net core</p>
            </div>
            <div>
              <img
                src={`/images/bootcamp/react.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="React"
              />
              <p className="text-white text-center font-poppins">ReactJS</p>
            </div>
            <div>
              <img
                src={`/images/bootcamp/trello.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="Trello"
              />
              <p className="text-white text-center font-poppins">Trello</p>
            </div>
            <div>
              <img
                src={`/images/bootcamp/css.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="CSS"
              />
              <p className="text-white text-center font-poppins">CSS</p>
            </div>
            <div>
              <img
                src={`/images/bootcamp/html5.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="HTML5"
              />
              <p className="text-white text-center font-poppins">HTML5</p>
            </div>
            <div>
              <img
                src={`/images/bootcamp/js.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="Javascript"
              />
              <p className="text-white text-center font-poppins">Javascript</p>
            </div>
            <div>
              <img
                src={`/images/bootcamp/git.svg`}
                className="w-[60px] md:w-[100px] md:mt-8 object-contain"
                alt="Git"
              />
              <p className="text-white text-center font-poppins">Git</p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="cursos"
        className="w-full flex flex-col items-center md:w-[72rem] md:py-20 "
      >
        <h2 className="text-[2.5rem] text-gray-700 font-poppins font-medium mb-8">
          Nuestros cursos
        </h2>
        <div className="flex justify-center gap-10">
          <div className="w-[480px] h-full rounded-3xl overflow-hidden shadow-white-action-btn relative">
            <div className="w-full h-[350px] bg-react-course bg-center-top bg-size-100-100 bg-no-repeat opacity-60 hover:opacity-100 transition-all "></div>
            <div className="px-6 pt-4 pb-28">
              <h2 className="text-[1.8rem] text-gray-700 font-poppins font-medium mb-4">
                React
              </h2>
              <p className="text-gray-600 font-poppins text-[1.1rem]">
                React es una biblioteca escrita en JavaScript, desarrollada en
                Facebook para facilitar la creación de componentes interactivos,
                reutilizables, para interfaces de usuario.
              </p>
              <p
                className={`text-gray-600 font-poppins text-[1.1rem] ${
                  !reactClass ? "truncate" : ""
                } `}
              >
                Se utiliza en Facebook para la producción de componentes, e
                Instagram está escrito enteramente en React. Uno de sus puntos
                más destacados, es que no sólo se utiliza en el lado del
                cliente, sino que también se puede representar en el servidor, y
                trabajar juntos.
              </p>
            </div>
            <button
              className="w-52 h-[50px] bg-orange-bootcamp-btn rounded-full text-white font-semibold font-poppins text-lg absolute left-[5%] top-[90%]"
              onClick={handleReactClick}
            >
              {!reactBtn ? "Leer más" : "Leer menos"}
            </button>
          </div>
          <div className="w-[500px] h-full rounded-3xl overflow-hidden shadow-white-action-btn relative">
            <div className="w-full h-[350px] bg-angular-course bg-center-top bg-size-100-100 bg-no-repeat opacity-60 hover:opacity-100 transition-all  "></div>
            <div className="px-6 pt-4 pb-28">
              <h2 className="text-[1.8rem] text-gray-700 font-poppins font-medium mb-4">
                .Net + Angular
              </h2>
              <p className="text-gray-600 font-poppins text-[1.1rem]">
                NET Core es un nuevo framework (Basado en el anterior .Net)
                desarrollado por Microsoft, de código abierto y multiplataforma
                para la creación de aplicaciones modernas conectadas a Internet,
              </p>
              <p
                className={`text-gray-600 font-poppins text-[1.1rem] ${
                  !angularClass ? "truncate" : ""
                }`}
              >
                como aplicaciones web y APIs Web. Se diseñó para proporcionar un
                framework de desarrollo optimizado para las aplicaciones que se
                implementan tanto en la nube como en servidores dedicados en las
                instalaciones del cliente. Permite desarrollar y ejecutar
                aplicaciones ASP.NET Core en Windows, Mac y Linux.
              </p>
            </div>
            <button
              className="w-52 h-[50px] bg-orange-bootcamp-btn rounded-full text-white font-semibold font-poppins text-lg absolute left-[5%] top-[90%]"
              onClick={handleAngularClick}
            >
              {!angularBtn ? "Leer más" : "Leer menos"}
            </button>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-center items-center bg-gray-bootcamp mt-10 py-16">
        <h2 className=" w-[340px] text-[2.5rem] text-center text-gold-bootcamp font-poppins font-bold">
          Te presentamos a los coaches
        </h2>
        <div className=" flex items-center justify-around w-[1000px] h-[280px] bg-gold-bootcamp rounded-3xl py-[50px] px-[30px] mt-10">
          <div className="w-[200px] h-[200px] border-[10px] border-white  rounded-full bg-fede-coach bg-right-center bg-working-cover  bg-no-repeat "></div>
          <div className="w-[200px]">
            <h3 className=" text-[1.1rem] font-bold font-poppins">
              Federico Leobarth
            </h3>
            <p className=" text-[1.1rem] font-normal font-poppins">
              Senior Fullstack Developer
            </p>
          </div>
          <p className="w-[470px]  font-normal font-poppins ">
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
        className="w-full flex flex-col justify-center items-center p-20"
      >
        <h2 className="text-center text-[2.5rem] text-gray-800 font-poppins font-medium">
          ¿Listo para comenzar?
        </h2>
        <p className="text-center text-[1.4rem] text-gray-800 font-poppins">
          completá el formulario
        </p>
        <img
          src={`/images/bootcamp/form-arrow.svg`}
          className="w-[60px] md:w-[70px] md:mt-4 object-contain"
          alt="From arrow"
        />
        <div className="flex flex-col items-center justify-center w-[1180px] h-[320px] rounded-3xl shadow-white-action-btn mt-10">
          <h3 className="text-center text-[1.8rem] text-gray-700 font-poppins font-medium">
            El periodo de inscripción al bootcamp ha finalizado.
          </h3>
          <p className="text-center text-[1.1rem] text-gray-700 font-poppins ">
            Los inscriptos estarán recibiendo un correo sobre el challenge a
            realizar en los próximos días.
          </p>
          <p className="text-center text-[1.1rem] text-gray-700 font-poppins ">
            11/03/2022
          </p>
        </div>
      </section>
      <footer className="w-full flex flex-col items-center bg-gray-bootcamp pt-10">
        <div className="flex w-[74rem] justify-between">
          <img
            src={`/images/bootcamp/logobootcamp-big.png`}
            className="w-[60px] md:w-[240px] md:mt-4 object-contain"
            alt="From arrow"
          />
          <div className="flex flex-col">
            <p className="text-white text-[1.1rem] font-poppins mt-2">Cursos</p>
            <Link href="#cursos" className="cursor-pointer">
              <a className="text-white text-[0.9rem] font-poppins mt-2">
                React
              </a>
            </Link>
            <Link href="#cursos" className="cursor-pointer">
              <a className="text-white text-[0.9rem] font-poppins mt-2">
                Net.core + Angular
              </a>
            </Link>
          </div>

          <div>
            <p className="text-white text-[1.1rem] font-poppins mt-2">
              Trabajá con nosotros
            </p>
            <button
              className="text-white text-[0.9rem] font-poppins mt-2"
              onClick={() => (window.location = "mailto:rrhh@devlights.com")}
            >
              rrhh@devlights.com
            </button>
          </div>
        </div>
        <div className="w-full border-t-[1px] border-cyan-bootcamp mt-10 p-8">
          <p className="text-center text-white font-poppins">Copyright 2022</p>
          <div className="flex justify-end -mt-6 mr-20">
            <ul className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/devlights-us"
                className="cursor-pointer"
              >
                <a className="text-white font-poppins">LinkedIn</a>
              </Link>
              <Link
                href="https://www.instagram.com/devlights_arg/"
                className="cursor-pointer"
              >
                <a className="text-white font-poppins">Instagram</a>
              </Link>
              <Link
                href="https://www.facebook.com/devlightsok/"
                className="cursor-pointer"
              >
                <a className="text-white font-poppins">Facebook</a>
              </Link>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Bootcamp;
