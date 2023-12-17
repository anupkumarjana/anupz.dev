import React from "react";
import { FiGithub } from "react-icons/fi";
import { IoMdOpen } from "react-icons/io";

export default function Card(props) {
  return (
    <div className="flex flex-col md:flex-row gap-10 md:gap-20 my-10 bg-white p-6 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div>
        <img
          className="h-full w-full object-cover rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-2 ease-in-out duration-200"
          src={props.src}
          alt=""
        />
      </div>
      <div className=" md:w-[90%] flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-[#2d2e32] text-lg my-6 font-bold uppercase">
            {props.title} <span className="text-sm">{props.span}</span>
          </h3>
          <p className=" mx-6 text-lg text-[#767676] font-normal text-center">
            {props.content}
          </p>
        </div>

        <div className="flex gap-8 my-4">
          <p className="border shadow-md rounded-lg py-2 px-4 text-lg font-semibold">
            {props.tech}
          </p>
          <p className="border shadow-md rounded-lg py-2 px-4 text-lg font-semibold">
            {props.css}
          </p>
        </div>
        <div className="flex gap-20 text-lg font-semibold mt-8">
          <a
            href="https://github.com/anupkumarjana"
            target="blank"
            className="flex gap-4 ietms-center cursor-pointer hover:text-yellow-500"
          >
            <p>Code</p>
            <button>
              <FiGithub />
            </button>
          </a>
          <a
            href="https://dietgo.in"
            target="blank"
            className="flex gap-4 ietms-center cursor-pointer hover:text-yellow-500"
          >
            <p>Live Demo </p>
            <button>
              <IoMdOpen />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
