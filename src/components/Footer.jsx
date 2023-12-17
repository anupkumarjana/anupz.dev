import React from "react";
import { FiGithub } from "react-icons/fi";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  return (
    <div className="w-full bg-[#2d2e32] py-14 font-poppins text-white">
      <div className="md:flex justify-center md:flex-row flex flex-col items-center gap-10 md:justify-between px-8 md:px-60">
        <p className="text-lg font-semibold">Copyright © {new Date().getFullYear()}. All rights are reserved</p>
        <div className="flex gap-6">
          <a
            href="https://github.com/anupkumarjana"
            className="text-2xl hover:-translate-y-2 ease-in-out duration-300"
          >
            <FiGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/anupkumarjana/"
            className="text-2xl hover:-translate-y-2 ease-in-out duration-300"
          >
            <CiLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
}
