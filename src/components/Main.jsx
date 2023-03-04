import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import background from '../assets/background.avif'

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-bottom"
        src={background}
        alt="nature"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center  items-center">
          <h1 className="md:text-5xl text-2xl font-bold text-gray-800">
            Hey, I'm Martin Rodriguez
          </h1>
          <h2 className="flex md:text-3xl text-1xl text-gray-800 m-3">
            I'm a
            <TypeAnimation
              sequence={[
                "Front End developer", // Types 'One'
                2000, // Waits 1s
                "computer science student", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "8px" }}
            />
          </h2>
          <div className="flex justify-around items-center pt-6 max-w-[200px] w-full">
            <a href="https://www.linkedin.com/in/juan-martin-rodriguez-front-end/" target="_blank">
              <FaLinkedinIn
                className="cursor-pointer fill-gray-800 hover:scale-125 ease-in duration-100"
                size={20}
              />
            </a>
            <a href="https://github.com/JMRodriguez-work" target="_blank">
              <FaGithub
                className="cursor-pointer fill-gray-800 hover:scale-125 ease-in duration-100"
                size={20}
              />
            </a>
            <button className="flex justify-center items-center w-100 bg-gray-800  text-gray-300 text-sm p-1 rounded-md shadow-lg hover:scale-105 ease-in duration-100">
              Resume - CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Main };
