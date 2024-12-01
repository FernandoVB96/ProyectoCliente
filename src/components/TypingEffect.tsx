import { useState, useEffect } from 'react';

// Definimos la interfaz para las props que recibirá el componente
interface TypingEffectProps {
  text: string;  // El texto que se mostrará con el efecto de escritura
  speed?: number; // Velocidad opcional del efecto (en milisegundos)
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => {
        const newIndex = prevIndex + 1;
        if (newIndex <= text.length) {
          setDisplayedText(text.substring(0, newIndex));
        } else {
          clearInterval(timer);
        }
        return newIndex;
      });
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <p className="text-4xl text-[#F4F4F4] leading-relaxed">
      {displayedText}
    </p>
  );
};

export default TypingEffect;
