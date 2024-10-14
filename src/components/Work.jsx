import React from "react";
import proa from "../assets/Jollycat.png";
import prob from "../assets/Willify.png";
import proc from "../assets/TheNightShift.png";
import prod from "../assets/Varchandise.png";
import proe from "../assets/website.png";

const Work = () => {
  return (
    <div className="max-w-[1200px] mx-auto p-5" id="work">
      <div className="pb-8">
        <p className="text-4x1 mb-3 font-bold primary-color">Work</p>
        <p className="text-gray-400">Check out some of my work</p>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

      <div
        className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                      shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                      h-[200px] bg-cover relative">
        <img src={proa} alt=""/>
        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
          <span className="text-2xl font-bold text-white tracking-wider">JollyCat</span>
          <div className="pt-8 text-center"></div>
            <a href="https://github.com/ArthurWiryadinata/JollyCatt">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                GitHub
              </button>
            </a>
        </div>
      </div>

      <div
        className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                      shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                      h-[200px] bg-cover relative">
        <img src={prob} alt=""/>
        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
          <span className="text-2xl font-bold text-white tracking-wider">Willify</span>
          <div className="pt-8 text-center"></div>
            <a href="https://github.com/ArthurWiryadinata/Willify">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                GitHub
              </button>
            </a>
        </div>
      </div>

      <div
        className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                      shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                      h-[200px] bg-cover relative">
        <img src={proc} alt=""/>
        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
          <span className="text-2xl font-bold text-white tracking-wider">The Night Shift</span>
          <div className="pt-8 text-center"></div>
            <a href="https://drive.google.com/drive/folders/1BoYGdEo9XCVtecRZtdqTRH9Hy6pp3szk?zx=g9mz613n33d">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                G-Drive
              </button>
            </a>
        </div>
      </div>

      <div
        className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                      shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                      h-[200px] bg-cover relative">
        <img src={prod} alt=""/>
        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
          <span className="text-2xl font-bold text-white tracking-wider">Varchandise</span>
          <div className="pt-8 text-center"></div>
            <a href="https://www.figma.com/design/SL7RYhHtnMQP6atUwpNpWV/VArchandise?node-id=0-1&node-type=canvas&t=Tc39zIOsK31o4g3X-0">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Figma
              </button>
            </a>
        </div>
      </div>

      <div
        className="transform transition-transform duration-300 hover:scale-105 overflow-hidden
                      shadow-lg shadow-[#040c16] group rounded-md flex justify-center items-center
                      h-[200px] bg-cover relative">
        <img src={proe} alt=""/>
        <div className="opacity-0 group-hover:opacity-90 bg-[gray]/70 absolute inset-0 flex flex-col justify-center items-center">
          <span className="text-2xl font-bold text-white tracking-wider">Website Portfolio</span>
          <div className="pt-8 text-center"></div>
            <a href="https://github.com/ArthurWiryadinata/Portfolio">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                GitHub
              </button>
            </a>
        </div>
      </div>


      </div>
    </div>
  );
};

export default Work;
