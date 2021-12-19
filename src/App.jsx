import React,{ useState } from "react";
import Snowfall from "react-snowfall";
import Hero from "./components/Hero";
import "./App.scss";
import Socials from "./components/Socials";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";


const projects = [
  {
    header: "Covid-19 India",
    description: [
      "A clone of covid19india.org in Typescript.",
      "Motivation behind this project is to learn how covid19india.org is architected.",
    ],
    techStack: [
      "ReactJs",
      "Typescript",
      "React-Spring",
      "i18next",
      "sass",
      "D3.js",
      "eslint",
      "esbuild",
      "Suspense",
    ],
    links: [
      {
        label: "GitHub",
        url: "",
      },
      {
        label: "Live Demo",
        url: "https://covid19india.org/",
      },
    ],
    img: "/portfolio/img/covid-19-india.png",
  },
];



function App() {
  return (
    <>
      <Snowfall snowflakeCount={50} style={{ height: "300vh", zIndex: 1000 }} />
      <div className="app">
        <Socials />
        <div className="hero-about-container">
          <div className="hero-container">
            <Hero />
            <hr />
          </div>
          <About />
        </div>
        <div className="projects">
          <h1>Some of my Projects</h1>

          {projects.map((project) => (
            <ProjectCard project={project} key={project.header}/>
          ))}
          
        </div>
      </div>
    </>
  );
}

export default App;
