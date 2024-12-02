import { useState, useEffect } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
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
