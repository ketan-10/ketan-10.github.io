import React, { useState } from "react";
import Snowfall from "react-snowfall";
import Hero from "./components/Hero";
import "./App.scss";
import Socials from "./components/Socials";
import About from "./components/About";
import ProjectCard from "./components/ProjectCard";
import FamilyTree from "./components/FamilyTree";

const projects = [
  {
    header: "Covid-19 India",
    description: [
      "A clone of covid19india.org in Typescript.",
      "Learn how covid19india.org is architected. and how to implement common patterns like dark-mode, multi-language support, data-fetching and lazy-loading etc.",
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
        label: "LiveDemo",
        url: "https://covid19india.org/",
      },
    ],
    img: "/portfolio/img/covid-19-india.png",
  },
  {
    header: "Emoji Rain",
    description: [
      "Interactive Emoji rain with WebSockets in react and AWS lambda",
      "Created backend with Infrastructure as a code using AWS CDK",
      "Used this project as a example to host a hands-on session on getting started with AWS",
    ],
    techStack: [
      "AWS CDK",
      "Github Actions",
      "AWS Lambda",
      "API Gateway",
      "DynamoDB",
      "WebSocket",
    ],
    links: [
      {
        label: "GitHub",
        url: "",
      },
      {
        label: "LiveDemo",
        url: "https://covid19india.org/",
      },
      {
        label: "Youtube",
        url: "https://covid19india.org/",
      },
    ],
    img: "/portfolio/img/emoji-rain.gif",
  },
  {
    header: "ytLiveChatBot",
    description: [
      "Youtube live-stream chat-bot",
      "ytLiveChatBot is a golang library for cli base applications that makes it easy to read and write live-chat on/from one or more youtube live streams simultaneously using youtube api and Google Oauth",
      
    ],
    techStack: [
      "Oauth",
      "Golang",
      "Go-routines",
      "Youtube API",
    ],
    links: [
      {
        label: "GitHub",
        url: "",
      },
      {
        label: "LiveDemo",
        url: "https://covid19india.org/",
      },
      {
        label: "Youtube",
        url: "https://covid19india.org/",
      },
    ],
    img: "/portfolio/img/ytchatbot.png",
  },
  {
    header: "jwt-auth-server",
    description: [
      "A simple JWT auth server",
      "Created a JWT auth server template using recommended best practices and design patterns, to get started with your project quickly",
      "The template features secure access-token and refresh-token generation and validation, TypeORM with postgres, Apollo GraphQL and TypeGraphQL for schema entity mapping",
    ],
    techStack: [
      "TypeScript",
      "JWT",
      "Apollo-GraphQL",
      "TypeORM",
      "Postgres",
      "Type-graphql",
    ],
    links: [
      {
        label: "GitHub",
        url: "",
      },
      {
        label: "LiveDemo",
        url: "https://covid19india.org/",
      },
      {
        label: "Youtube",
        url: "https://covid19india.org/",
      },
    ],
    img: "/portfolio/img/jwt-auth.png",
  },
  {
    header: "Tic Tac Toe",
    description: [
      "A Android App of Single Player/Multiplayer Tic Tac Toe using min-max algorithm",
      "Created an unbeatable Single player Tic-Tac-Toe game as a college project and deployed it on PlayStore",
    ],
    techStack: [
      "Java",
      "Min-max algorithm",
      "Android Studio",
      "PlayStore",
    ],
    links: [
      {
        label: "GitHub",
        url: "",
      },
      {
        label: "PlayStore",
        url: "https://covid19india.org/",
      },
    ],
    img: "/portfolio/img/tic-tac-toe.png",
  },
  {
    header: "Butterfly: Way Through Sky",
    description: [
      "A 2D Android Game in Java using Game Loop",
      "Created a 2D Android Game like 'flappy bird' as a College project and deployed it on Google Play Store.",
    ],
    techStack: [
      "Java",
      "Game loop",
      "Android Studio",
      "PlayStore",
      "Graphics Design",
    ],
    links: [
      {
        label: "GitHub",
        url: "",
      },
      {
        label: "LiveDemo",
        url: "https://covid19india.org/",
      },
      {
        label: "Youtube",
        url: "https://covid19india.org/",
      },
    ],
    img: "/portfolio/img/butterfly.png",
  },
  {
    header: "Chrome Extension: Remove DOM Events",
    description: [
      "Created A Chrome Extension that removes DOM events from the page",
      "Some websites have DOM events that can be used to track user activity and track user behavior, for example a site might track if you change the tab or click on a link. This extension removes these events from the page.",
    ],
    techStack: [
      "Javascript",
      "Chrome Extension",
    ],
    links: [
      {
        label: "GitHub",
        url: "",
      },
    ],
    img: "/portfolio/img/remove-dom-events.png",
  },
];

function App() {
  return (
    <>
      <Snowfall snowflakeCount={50} style={{ height: "300vh", zIndex: 1000 }} />
      <div className="app">
        
        <div className="hero-about-container">
          <div className="hero-container">
            <Hero />
            <hr />
          </div>
          <About />
        </div>
        <FamilyTree />
        {/* https://ketan-10.github.io/portfolio/#projects */}
        <div className="projects" id="projects"> 
          <h1>Some of my Projects</h1>

          {projects.reverse().map((project) => (
            <ProjectCard project={project} key={project.header} />
          ))}
        </div>
        <Socials />
      </div>
    </>
  );
}

export default App;
