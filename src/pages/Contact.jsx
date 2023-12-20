import React from "react";
import { GrMapLocation } from "react-icons/gr";
import { LuMail } from "react-icons/lu";

export default function Contact() {
  return (
    <div className="text-[#2d2e32] w-full pb-16 px-8 py-16 md:px-60 md:py-32  gap-20 font-poppins" id="contact">
      <div className="md:flex flex-col md:items-start md:justify-start flex justify-center items-center">
        <h2 className="uppercase text-xl font-extrabold text-yellow-500 pb-4">
          Contact
        </h2>
        <p className="font-poppins text-2xl font-extrabold text-[#2D2E32] pb-4">
          Don't be shy! Hit me up! 👇
        </p>
      </div>
      <div className="md:mt-16 mt-10 md:flex flex-col md:flex-row gap-40">
        <div className="md:flex md:flex-row flex-col gap-8 flex justify-center items-center">
          <button className="text-4xl rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-yellow-500 p-2">
            <GrMapLocation />
          </button>
          <div className="flex flex-col justify-center md:items-start items-center">
            <p className="font-semibold text-lg">Location</p>
            <a
              className="hover:text-yellow-500"
              href="https://www.google.com/maps/d/u/0/viewer?mid=1jjdOnB91E1dK8dHGVI3h8cHWE40&hl=en_US&ll=13.072006049550708%2C77.63024850000004&z=11" target="blank"
            >
              Bangalore, India
            </a>
          </div>
        </div>
        <div className="md:flex md:flex-row flex-col gap-8 flex justify-center items-center mt-10 md:mt-0">
          <button className="text-4xl rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] text-yellow-500 p-2">
            <LuMail />
          </button>
          <div className="flex flex-col justify-center md:items-start items-center cursor-pointer ">
            <p className="font-semibold text-lg">Mail</p>
            <a
              className="hover:text-yellow-500"
              href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqSvxwKNnBCHGFckrRPRcQKNvPblTBGpHbWrQQxHhHNdCjMbpSqDshPHWqZgBgtlHgcfNq"
              target="blank"
            >
              janaanup7872@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
