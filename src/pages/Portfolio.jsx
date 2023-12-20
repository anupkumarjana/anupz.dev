import React from "react";
import Card from "../components/Card";
// import ReversedCard from "../components/ReversedCard"
import image1 from "../assets/project1.jpeg";

export default function Portfolio() {
  return (
    <div
      className="bg-[#f9f9f9] text-[#2d2e32] w-full pb-16 px-8 py-16 md:px-60 md:py-32  gap-20 font-poppins"
      id="projects"
    >
      <div className="md:flex md:justify-normal md:items-start flex flex-col justify-center items-center">
        <h2 className="uppercase  text-xl font-extrabold text-yellow-500 pb-4 text-center md:text-start">
          Portfolio
        </h2>
        <h3 className="font-poppins text-2xl font-extrabold text-[#2D2E32] pb-4 text-center md:text-start">
          Each project is a unique piece of development 🧩
        </h3>
        <div className="flex md:flex-col justify-center items-center">
          <Card
            src={image1}
            title="Dietitian Website"
            span="(November 2023) 🥗"
            content="A dietitian's site facilitates appointments and dietary services, offering a user-friendly interface for scheduling personalized consultations to meet individual health needs."
            tech="React"
            css="Tailwind"
          />
          {/* <ReversedCard
            src={image1}
            title="Dietitian Website"
            span="(November 2023) 🥗"
            content="A dietitian's site facilitates appointments and dietary services, offering a user-friendly interface for scheduling personalized consultations to meet individual health needs."
            tech="React"
            css="Tailwind"
          /> */}
        </div>
      </div>
    </div>
  );
}
