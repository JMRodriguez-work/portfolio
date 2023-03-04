import React, { useState, useLayoutEffect } from "react";

const ProjectItem = ({ img, title, utils, website, repo }) => {
  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-center h-auto w-100 shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-gray-800">
      <img
        src={img}
        alt={`Project preview of ${title}`}
        className="rounded-xl group-hover:opacity-10"
      />
      <div className="sm:hidden group-hover:block sm:absolute sm:top-[50%] sm:left-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%]">
        <h3 className="text-2xl font-bold sm:text-white text-gray-800 tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 sm:text-white text-stone-400 text-center">
          {utils}
        </p>
        <a href={website} target="_blank">
          <p className="text-center sm:p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm sm:m-2">Website</p>
        </a>
        <a href={repo} target="_blank">
          <p className="text-center sm:p-3 rounded-lg bg-white text-gray-700 font-bold cursor-pointer text-sm m-2">Repo</p>
        </a>
      </div>
    </div>
  );
};

export { ProjectItem };
