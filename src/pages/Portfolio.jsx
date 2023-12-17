import React from "react";
import Card from "../components/Card";
import image1 from "../assets/Screenshot from 2023-12-16 22-17-58.png";

export default function Portfolio() {
  return (
    <div className="bg-[#f9f9f9] text-[#2d2e32] w-full pb-16 px-8 py-16 md:px-60 md:py-32  gap-20 font-poppins">
      <div className="md:flex md:justify-normal md:items-start flex flex-col justify-center items-center">
        <h2 className="uppercase  text-xl font-extrabold text-yellow-500 pb-4">
          Portfolio
        </h2>
        <h3 className="font-poppins text-2xl font-extrabold text-[#2D2E32] pb-4">
          Each project is a unique piece of development 🧩
        </h3>
        <div className="flex justify-center items-center">
          <Card
            src={image1}
            title="Dietitian Website"
            span="(November 2023) 🥗"
            content="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
            tech="React"
            css="Tailwind"
          />
        </div>
      </div>
    </div>
  );
}
