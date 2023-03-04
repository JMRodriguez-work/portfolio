import React from "react";
import { ProjectItem } from "./index";
import mrRobot from "../assets/mr-robot-landing.png";
import netflix from "../assets/netflix-landing.png";
import rickmorty from "../assets/rickmorty.png";
import toDo from "../assets/to-do.png";
import weather from "../assets/weatherapp.png";
import yardSale from "../assets/yard-sale.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-gray-800">Projects</h1>
      <p className="text-center py-8 text-stone-400">
        Mainly using HTML, CSS, JavaScript, Tailwind and React
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={mrRobot}
          title="Mr Robot Landing"
          utils="HTML-CSS-JS"
          website="https://jmrodriguez-work.github.io/mr-robot-landing/"
          repo="https://github.com/JMRodriguez-work/mr-robot-landing"
        />

        <ProjectItem
          img={rickmorty}
          title="Rick and Morty API"
          utils="REACT"
          website="https://jmartinrodriguez-work-rick-morty.netlify.app/"
          repo="https://github.com/JMRodriguez-work/rick-morty-api"
        />
        <ProjectItem
          img={netflix}
          title="Netflix Landing"
          utils="HTML-CSS"
          website="https://jmrodriguez-work.github.io/netflix-landing-page/"
          repo="https://github.com/JMRodriguez-work/netflix-landing-page"
        />
        <ProjectItem
          img={toDo}
          title="To Do App"
          utils="REACT"
          website="https://jmrodriguez-work.github.io/to-do-app/"
          repo="https://github.com/JMRodriguez-work/to-do-app"
        />
        <ProjectItem
          img={weather}
          title="Weather App"
          utils="HTML-CSS-JS"
          website="https://jmrodriguez-work.github.io/weather-app/"
          repo="https://github.com/JMRodriguez-work/weather-app"
        />
        <ProjectItem
          img={yardSale}
          title="E-Commerce"
          utils="HTML-CSS-JS"
          website="https://jmrodriguez-work.github.io/curso-frontend-developer-practico-withJS/"
          repo="https://github.com/JMRodriguez-work/curso-frontend-developer-practico-withJS"
        />
      </div>
    </div>
  );
};

export { Projects };
