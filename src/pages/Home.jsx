import React from "react";
import image from "../assets/anup.png";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

export default function Home() {
  return (
    <div
      className="bg-[#f9f9f9] text-[#2d2e32] w-full pb-16 md:px-60 pt-16 md:pt-20"
      id="home"
    >
      <div className=" flex flex-col-reverse md:flex md:flex-row justify-center items-center gap-10 md:gap-20 py-16 md:px-0 px-8">
        <div className=" md:flex md:flex-col flex flex-col justify-center text-center md:text-start items-center md:justify-start md:items-start leading-light gap-8">
          <h1 className="text-[3.5rem] font-poppins md:text-[3.5rem] font-extrabold leading-[60px]  md:leading-[70px]">
            Front-End React Developer
            <span className="text-[40px]">👋🏼</span>
          </h1>
          <p className="leading-normal font-Mulish flex-wrap text-lg text-[#555]">
            Hi, I'm Anup K Jana. A passionate Front-end React Developer based in
            Bangalore, India. 📍
          </p>
          <div className="flex gap-5 text-3xl">
            <a
              href="https://github.com/anupkumarjana"
              target="blank"
              className="hover:text-yellow-500 "
            >
              <FiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/anupkumarjana/"
              target="blank"
              className="hover:text-yellow-500"
            >
              <CiLinkedin />
            </a>
          </div>
        </div>
        <div className="w-72 md:w-[45%] rounded-lg animation">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="flex flex-col gap-10 md:gap-16 items-center md:mt-16 md:flex md:flex-row pb-16 px-8 md:px-0">
        <p className="text-lg text-[#2d2e32] border-b-[#555] border-b-2 md:border-r-2 md:border-r-[#b4b4b4] md:border-b-0 md:pr-10">
          Tech Stack
        </p>
        <div className="flex gap-8 flex-row justify-center items-center flex-wrap">
          <div className="flex gap-2 cursor-pointer hover:-translate-y-4 transition-all ease-in-out duration-300 w-20%">
            <img src="https://skillicons.dev/icons?i=html" alt="html" />
            <img src="https://skillicons.dev/icons?i=css" alt="css" />
          </div>
          <div className="flex gap-2 cursor-pointer hover:-translate-y-4 ransition-all ease-in-out duration-300">
            <img src="https://skillicons.dev/icons?i=js" alt="js" />
            <img src="https://skillicons.dev/icons?i=ts" alt="ts" />
          </div>

          <div className="flex  gap-2 cursor-pointer hover:-translate-y-4 ransition-all ease-in-out duration-300">
            <img src="https://skillicons.dev/icons?i=react" alt="react" />
            <img src="https://skillicons.dev/icons?i=nodejs" alt="node" />
          </div>
          <div className="flex  gap-2 cursor-pointer hover:-translate-y-4 ransition-all ease-in-out duration-300">
            <img src="https://skillicons.dev/icons?i=mongodb" alt="mongodb" />
            <img src="https://skillicons.dev/icons?i=mysql" alt="mysql" />
          </div>
          <div className="flex  gap-2 cursor-pointer hover:-translate-y-4 ransition-all ease-in-out duration-300">
            <img
              src="https://skillicons.dev/icons?i=bootstrap"
              alt="bootstrap"
            />
            <img src="https://skillicons.dev/icons?i=tailwind" alt="tailwind" />
          </div>
        </div>
      </div>
    </div>
  );
}
