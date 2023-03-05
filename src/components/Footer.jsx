import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-center gap-6 items-center pt-6 w-full mb-3">
      <a
        href="https://www.linkedin.com/in/juan-martin-rodriguez-front-end/"
        target="_blank"
      >
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
  );
};

export { Footer };
