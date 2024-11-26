import React from 'react';

const Button = ({ text, link, reverse = false, isLastButton = false }) => {
  // Definir las clases de texto y fondo según el valor de reverse
  const textColor = reverse ? 'text-[#01251F]' : 'text-[#A0CBB2]';
  const bgColor = reverse ? 'bg-[#A0CBB2]' : 'bg-[#01251F]';
  const hoverTextColor = reverse ? 'hover:text-[#A0CBB2]' : 'hover:text-[#01251F]';
  const hoverBgColor = reverse ? 'hover:bg-[#01251F]' : 'hover:bg-[#A0CBB2]';

  // Si es el último botón, cambiar a amarillo y texto verde oscuro en el hover
  const lastButtonHoverTextColor = isLastButton ? 'hover:text-[#01251F]' : hoverTextColor;
  const lastButtonHoverBgColor = isLastButton ? 'hover:bg-[#F9A825]' : hoverBgColor;

  return (
    <a
      href={link}
      className={`block w-full ${textColor} ${bgColor} px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${lastButtonHoverTextColor} ${lastButtonHoverBgColor} flex items-center justify-center`}
    >
      {text}
    </a>
  );
};

export default Button;
