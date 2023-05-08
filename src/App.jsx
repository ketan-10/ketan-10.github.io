import React, { lazy, Suspense } from "react";
import Hero from "./components/Hero";
import "./App.scss";
import Socials from "./components/Socials";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import useSWR from 'swr';
import FamilyTreeLoader from "./components/loaders/FamilyTreeLoader";
import { BASE_URL } from "./Constants";

const FamilyTree = lazy(() => import("./components/FamilyTree"));

function App() {
  const { data: projects } = useSWR(
    `${BASE_URL}/projects.json`,
    (link) => fetch(link).then((res) => res.json()), // we can generate uniques 'key' here and append it to the data.
    {
      revalidateOnMount: true,
      // suspense: true, // fallback to top-most suspense till load
      // also as suspense data will never be null -> https://swr.vercel.app/docs/suspense
    }
  );
  return (
    
      <div className="app">
        
        <div className="hero-about-container">
          <div className="info-header">
            <Hero />
            <hr />
            <Socials />
            <hr />
          </div>
          <About />
        </div>

        <Suspense fallback={<FamilyTreeLoader/>}>
          <FamilyTree />
        </Suspense>
        {projects &&(

        <div className="projects" id="projects"> 
          <h1>Some of my Projects</h1>

          {projects.sort((a, b) => a.order - b.order).map((project) => (
            <ProjectCard project={project} key={project.header} />
          ))}
        </div>
        )}
      </div>
    
  );
}

export default App;
