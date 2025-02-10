/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaRedo } from 'react-icons/fa';

// Componente do botão de navegação
const NavButton = ({ direction, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`
      fixed bottom-8 
      ${direction === 'left' ? 'left-8' : 'right-8'}
      bg-[#f43257]/80 hover:bg-[#f43257] 
      disabled:opacity-30 disabled:hover:bg-[#f43257]/80
      text-white rounded-full p-2 
      transition-all duration-300 ease-in-out
      shadow-lg hover:shadow-xl
      focus:outline-none focus:ring-2 focus:ring-[#f43257]/50
    `}
  >
    {direction === 'left' ? (
      <FaChevronLeft size={24} />
    ) : direction === 'right' ? (
      <FaChevronRight size={24} />
    ) : (
      <FaRedo size={24} />
    )}
  </button>
);

// Slide de texto simples
const TextSlide = ({ children, color }) => (
  <div
    className={`flex items-center justify-center min-h-[60vh] px-16 text-center
    ${color === 'blue' ? 'text-[#1d8dc5]' : 'text-[#f43257]'}
  `}
  >
    <p className="text-2xl font-medium leading-relaxed animate-fade-in">
      {children}
    </p>
  </div>
);

const ImageSlide = ({ path }) => (
  <div className="flex items-center justify-center min-h-[60vh] px-4">
    <div className="relative w-full max-w-sm animate-fade-in">
      <img
        src={`/images/${path}`}
        alt="Slide"
        className="w-full h-auto rounded-lg shadow-lg bg-[#ff9b9b]
                   object-cover animate-scale-in
                   hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
  </div>
);

const PetalSlide = () => (
  <div className="relative flex items-center justify-center min-h-[60vh]">
    <div
      className="w-32 h-32 bg-[#f43257]/80 absolute 
              animate-float
              shadow-lg opacity-80
              rounded-tl-full rounded-br-full"
    >
      <div
        className="w-28 h-28 bg-[#f5bcbc] opacity-40
                    absolute top-0 left-4 rounded-tl-full rounded-br-full
                    "
      ></div>
    </div>
  </div>
);

// Slide da lua
const MoonSlide = () => (
  <div className="relative flex items-center justify-center min-h-[60vh]">
    <div
      className="w-32 h-32 rounded-full bg-gradient-to-t from-[#d05a83] to-[#f48d32] absolute 
                    animate-float opacity-80
                    shadow-[0_0_50px_#f43257]"
    >
      <div
        className="rotate-12 rounded-full w-32 h-32 bg-gradient-to-t from-[#32adf4] to-[#a646ff] 
                      absolute top-20 left-4 opacity-70
                      animate-moon-phase"
      ></div>
    </div>
  </div>
);

// Slide da constelação de Orion
const OrionSlide = () => (
  <div className="relative flex items-center justify-center min-h-[60vh] overflow-hidden">
    <div className="relative w-64 h-64">
      {/* Estrelas principais de Orion */}
      {[
        { top: '10%', left: '80%' },
        { top: '44%', left: '37%' },
        { top: '52%', left: '47%' },
        { top: '60%', left: '58%' },
        { top: '90%', left: '17%' },
      ].map((pos, i) => (
        <div
          key={i}
          style={pos}
          className="absolute w-2 h-2 bg-[#f43257] rounded-full 
                     animate-twinkle
                     shadow-[0_0_10px_#f43257]"
        ></div>
      ))}
    </div>
  </div>
);
// Slide da constelação de Orion
const OrionBeltSlide = () => (
  <div className="relative flex items-center justify-center min-h-[60vh] overflow-hidden">
    <div className="relative w-64 h-64">
      {/* Estrelas principais de Orion */}
      {[
        { top: '44%', left: '37%' },
        { top: '52%', left: '47%' },
        { top: '60%', left: '58%' },
      ].map((pos, i) => (
        <div
          key={i}
          style={pos}
          className="absolute w-2 h-2 bg-[#f43257] rounded-full 
                     animate-twinkle
                     shadow-[0_0_10px_#f43257]"
        ></div>
      ))}
    </div>
  </div>
);

// Componente principal
const CompoundPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    <TextSlide key={0}>Hi Love. </TextSlide>,
    <TextSlide key={1}>
      I really had forgotten about foreign Valentine's day. Thanks for reminding
      me 😛✨
    </TextSlide>,
    <TextSlide key={2}>So...</TextSlide>,
    <TextSlide key={3}>
      On the day you arrived, I was at the mechanic for car wheel rotation.
    </TextSlide>,
    <ImageSlide key={4} path="crestani.jpg" />,
    <TextSlide key={5}>It was a cold day, and life felt a bit gray.</TextSlide>,
    <TextSlide key={6}>
      But then, someone named Elle reached out, and I thought she was a bored
      european.
    </TextSlide>,
    <TextSlide key={7}>
      It was like a friendly petal fell in front of my eyes.
    </TextSlide>,
    <PetalSlide key={8} />,
    <TextSlide key={9}>
      From the start I felt like I could say anything to her.
    </TextSlide>,
    <TextSlide key={10}>And a completely novel feeling arose,</TextSlide>,
    <TextSlide key={11}>swaying inside of me just like the petal.</TextSlide>,
    <MoonSlide key={12} />,
    <TextSlide key={13}>
      As we kept talking, I grew sure my prayers were answered,
    </TextSlide>,
    <OrionBeltSlide key={14} />,
    <TextSlide key={15}>
      because I saw the shining of another person longing for true love, on the
      other side.
    </TextSlide>,
    <TextSlide key={16}>Like Rigel to Betelgeuse.</TextSlide>,
    <OrionSlide key={17} />,
    <TextSlide key={18}>And now...</TextSlide>,
    <TextSlide key={19}>
      Nothing is more important than crossing the space between.
    </TextSlide>,
    <TextSlide key={20} color="blue">
      So I can feel Rigel's warmth 💙
    </TextSlide>,
    <ImageSlide key={21} path="sham.jpg" />,
    <TextSlide key={22}>Sham</TextSlide>,
    <TextSlide key={23} color="blue">
      My Godsent
    </TextSlide>,
    <TextSlide key={24}>Happy Valentine's 🌹</TextSlide>,
  ];

  const goToNextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide((curr) => curr + 1);
    }
  };

  const goToPrevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((curr) => curr - 1);
    }
  };

  const goToFirstSlide = () => {
    setCurrentSlide(0);
  };

  return (
    <div className="relative w-full">
      <div className="min-h-screen flex items-center justify-center">
        {slides[currentSlide]}
      </div>

      <NavButton
        direction="left"
        onClick={goToPrevSlide}
        disabled={currentSlide === 0}
      />
      {currentSlide !== slides.length - 1 ? (
        <NavButton direction="right" onClick={goToNextSlide} />
      ) : (
        <NavButton direction="redo" onClick={goToFirstSlide} />
      )}
    </div>
  );
};

export default CompoundPresentation;
