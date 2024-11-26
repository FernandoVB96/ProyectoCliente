import React from "react";

const Icon = ({ imagenNormal, imagenHover, alt, size = "w-24 h-24" }) => {
  return (
    <button
      className={`relative ${size} cursor-pointer focus:outline-none`}
      aria-label={alt}
    >
      {/* Imagen normal */}
      <img
        src={imagenNormal}
        alt={alt}
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 hover:opacity-0"
      />
      {/* Imagen al hacer hover */}
      <img
        src={imagenHover}
        alt={`${alt} Hover`}
        className="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100"
      />
    </button>
  );
};

export default Icon;
