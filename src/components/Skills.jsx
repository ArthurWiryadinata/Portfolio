import React from "react";
import htmlPng from '../assets/html5.png';
import cssPng from '../assets/css.png';
import cPng from '../assets/c++.png';
import flutterPng from '../assets/flutter.png';
import kotlinPng from '../assets/kotlin.png';
import reactPng from '../assets/react.png';
import tailPng from '../assets/tailwind.png';

const Skills = () => {
  return (
    <div className="bg-black text-gray-400 md:h-[150px] max-w-[1200px] mx-auto grid grid-cols-4 place-items-center md:flex md:justify-between md:items-center">
      <h2 className="text-gray-700 text-2xl md:text-4xl font-bold m-4">
        My <br /> Tech <br />
      </h2>

      {/* CSS */}
      <div className="flex flex-col items-center m-4 w-[80px] md:w-[100px]">
        <img src={cssPng} alt="CSS" className="w-[60px] h-[60px] object-contain" />
        <p className="mt-2">CSS</p>
      </div>

      {/* HTML */}
      <div className="flex flex-col items-center m-4 w-[80px] md:w-[100px]">
        <img src={htmlPng} alt="HTML" className="w-[60px] h-[60px] object-contain" />
        <p className="mt-2">HTML</p>
      </div>

      {/* C++ */}
      <div className="flex flex-col items-center m-4 w-[80px] md:w-[100px]">
        <img src={cPng} alt="C++" className="w-[60px] h-[60px] object-contain" />
        <p className="mt-2">C++</p>
      </div>

      {/* Flutter */}
      <div className="flex flex-col items-center m-4 w-[80px] md:w-[100px]">
        <img src={flutterPng} alt="Flutter" className="w-[60px] h-[60px] object-contain" />
        <p className="mt-2">Flutter</p>
      </div>

      {/* Kotlin */}
      <div className="flex flex-col items-center m-4 w-[80px] md:w-[100px]">
        <img src={kotlinPng} alt="Kotlin" className="w-[60px] h-[60px] object-contain" />
        <p className="mt-2">Kotlin</p>
      </div>

      {/* React JS */}
      <div className="flex flex-col items-center m-4 w-[80px] md:w-[100px]">
        <img src={reactPng} alt="React JS" className="w-[60px] h-[60px] object-contain" />
        <p className="mt-2">React JS</p>
      </div>

      {/* Tailwind */}
      <div className="flex flex-col items-center m-4 w-[80px] md:w-[100px]">
        <img src={tailPng} alt="Tailwind" className="w-[60px] h-[60px] object-contain" />
        <p className="mt-2">Tailwind</p>
      </div>
    </div>
  );
};

export default Skills;
