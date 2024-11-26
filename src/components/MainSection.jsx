import React from "react";
import Boton from "./Boton.jsx";
import Icon from "./Icon.jsx";

const MainSection = () => {
  return (
    <section className="w-full h-screen bg-blue-500 flex">
      {/* Barra lateral */}
      <nav className="sticky top-0 left-0 h-screen w-1/4 bg-[#01251F] flex flex-col items-center">
        
        {/* Contenedor del círculo con la imagen */}
        <div className="flex justify-center items-center mt-8">
          <div className="w-[25vw] h-[25vw] md:w-60 md:h-60 rounded-full bg-yellow-500 flex justify-center items-center overflow-hidden">
            <img
              src="/img/your-portrait.jpg" // Cambia esta ruta por la de tu retrato
              alt="Fernando Vaquero Buzon"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Título con el nombre */}
        <h1 className="text-[#a0cbb2] text-2xl font-bold mt-4">
          Fernando Vaquero Buzon
        </h1>

        {/* Contenedor de la frase */}
        <div className="Frase w-full relative mt-4 px-4">
          {/* Línea superior */}
          <div className="Line1 w-full h-px absolute top-0 left-0 border border-[#a0cbb2]"></div>

          {/* Texto de la frase */}
          <div className="StayHungryStayFoolishSteveJobs text-center relative mt-4">
            <span className="text-[#a0cbb2] text-xl font-normal font-['Inter']">
              Stay hungry, stay foolish.
            </span>
            <br />
            <span className="text-[#a0cbb2] text-base font-normal font-['Inter']">
              - Steve Jobs
            </span>
          </div>

          {/* Línea inferior */}
          <div className="Line2 w-full h-px absolute bottom-0 left-0 border border-[#a0cbb2]"></div>
        </div>

        {/* Contenedor de iconos y botones */}
        <div className="flex flex-col flex-grow w-full mt-4">
          {/* Iconos encima de los botones */}
          <div className="flex justify-center space-x-4 mb-8">
            <Icon
              imagenNormal="/img/linkedin_icon.png"
              imagenHover="/img/linkedin_icon_selected.png"
              alt="LinkedIn Icon"
              size="w-14 h-14"
            />
            <Icon
              imagenNormal="/img/github_icon.png"
              imagenHover="/img/github_icon_selected.png"
              alt="GitHub Icon"
              size="w-14 h-14"
            />
            <Icon
              imagenNormal="/img/facebook_icon.png"
              imagenHover="/img/facebook_icon_selected.png"
              alt="Facebook Icon"
              size="w-14 h-14"
            />
          </div>

          {/* Lista de botones */}
          <ul className="w-full">
            <li>
              <Boton text="ABOUT ME" link="#" />
            </li>
            <li>
              <Boton text="EDUCATION" link="#" />
            </li>
            <li>
              <Boton text="WORK EXPERIENCE" link="#" />
            </li>
            <li>
              <Boton text="PROJECTS" link="#" />
            </li>
            <li>
              <Boton text="MY SKILLS" link="#" />
            </li>
            <li>
              <Boton text="REFERENCES" link="#" />
            </li>
            <li>
              <Boton
                text="CONTACT ME"
                link="#"
                reverse
                isLastButton
                hoverBgColor="hover:bg-[#F9A825]"
              />
            </li>
          </ul>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="text-white text-4xl font-bold">
          Bienvenido a la Sección Principal
        </div>
      </div>
    </section>
  );
};

export default MainSection;
