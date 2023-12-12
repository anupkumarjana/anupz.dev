import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Transition } from "@headlessui/react";
import { BiHomeAlt2 } from "react-icons/bi";
import { GoPerson } from "react-icons/go";
import { CgWebsite } from "react-icons/cg";
import { GrContactInfo } from "react-icons/gr";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  let Links = [
    {
      name: "Home",
      link: "/",
      icon: <BiHomeAlt2 />,
    },
    {
      name: "About",
      link: "/about",
      icon: <GoPerson />,
    },
    {
      name: "Projects",
      link: "/projects",
      icon: <CgWebsite />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: <GrContactInfo />,
    },
  ];

  return (
    <header className="text-[#2d2e32] w-full border-b-2 font-poppins">
      <nav className="flex justify-between items-center px-6 md:px-24 py-5">
        <a href="/">
          <h3 className="text-2xl font-semibold">
            anupz<span className="text-yellow-500">.dev</span>
          </h3>
        </a>
        <ul className="hidden md:flex gap-8 font-semibold">
          {Links.map((link) => (
            <li key={link.name}>
              <a href={link.link} className="hover:text-yellow-500 flex items-center gap-2">
                {link.icon}
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden text-slate-700 font-semibold text-2xl cursor-pointer hover:text-yellow-500"
        >
          {isMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>
      <Transition
        show={isMenuOpen}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {(ref) => (
          <div
            ref={ref}
            className="w-full fixed top-[72px] right-0 p-14 rounded-b-lg bg-yellow-500 shadow-md md:hidden text-center"
          >
            <ul className="flex flex-col gap-4">
              {Links.map((link) => (
                <li
                  key={link.name}
                  className="p-2 rounded-lg bg-black w-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200"
                >
                  <a
                    href={link.link}
                    className="hover:text-yellow-100 block py-2 flex justify-center items-center gap-2"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Transition>
    </header>
  );
}
