import React from "react";
import pro from "../assets/Pro.png";

const About = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12" id="about">
      <div className="md:grid md:grid-cols-2 sm:py-16">
        <div className="mt-4 md:mt-0 text-left flex">
          <div className="my-auto mx-6">
            <h2 className="text-4xl font-bold mb-4 primary-color">About Me</h2>
            <p className="text-base lg:text-lg">
            Undergraduate student with 2 years learning mobile development at BINUS University. Skilled with apps development technique such as Figma, Flutter, Kotlin, Data Base and web development . Detail oriented and passionate about contributing in a dynamic environment.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 md:mt-0">
          <img
            className="rounded-3xl"
            src={pro}
            alt="About Me"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
