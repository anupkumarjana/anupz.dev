import React from "react";
import image from "../assets/about.jpg";

export default function About() {
  return (
    <div className="text-[#2d2e32] font-poppins w-full pb-16 px-8 py-16 md:px-60 md:py-32">
      <div className="flex flex-col justify-center md:flex-row gap-16 ">
        <div className="md:w-[50%] w-full">
          <img
            src={image}
            alt="laptop in a table"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="md:w-[50%] md:flex md:justify-normal md:items-start flex flex-col justify-center items-center">
          <h2 className="uppercase  text-xl font-extrabold text-yellow-500 pb-4">
            About me
          </h2>
          <h3 className="font-poppins text-2xl font-extrabold text-[#2D2E32] pb-4">
            A dedicated Front-end Developer based in Bangalore, India 📍
          </h3>
          <p className="text-[#767676]">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and Bootstrap. I
            excel in designing and maintaining responsive websites that offer a
            smooth user experience. My expertise lies in crafting dynamic,
            engaging interfaces through writing clean and optimized code and
            utilizing cutting-edge development tools and techniques. I am also a
            team player who thrives in collaborating with cross-functional teams
            to produce outstanding web applications.
          </p>
        </div>
      </div>
    </div>
  );
}
