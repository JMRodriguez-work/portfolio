import React, { useState, useLayoutEffect } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineMail,
} from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { MdWorkOutline } from 'react-icons/md'

const Sidenav = () => {
  const [burgerMenu, setBurgerMenu] = useState(false);
  const handleNav = () => {
    setBurgerMenu(!burgerMenu);
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= 500) {
        setBurgerMenu(false);
      }
    });
  });

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] cursor-pointer md:hidden"
      />
      {!!burgerMenu && (
        <div className="flex flex-col fixed w-full h-screen bg-white/90 justify-center items-center z-20">
          <a
            className="flex justify-center w-[65%] items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#main"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            className="flex justify-center w-[65%] items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#projects"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            className="flex justify-center w-[65%] items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#work"
          >
            <MdWorkOutline size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            className="flex justify-center w-[65%] items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#resume"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            className="flex justify-center w-[65%] items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
            href="#contact"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineHome size={20}/>
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineProject size={20}/>
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <MdWorkOutline size={20}/>
          </a>
          <a
            href="#resume"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <BsPerson size={20}/>
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <AiOutlineMail size={20}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export { Sidenav };
