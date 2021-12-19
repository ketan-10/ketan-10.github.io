import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>Hello! My name is Ketan and I ❤ to build things for web.</p>
      <div className="work-experience">
        <h5>Work Experience: </h5>
        <p>
          I am currently working in TCS since Aug. 2020, Some of my
          contributions in TCS:{" "}
        </p>
        <div className="work-experience-points">
          <div>
            <span>▹</span>
            Architected and Developed Containerized, Scalable Web Application in
            spring boot and deployed on AWS ECS.
          </div>
          <div>
            <span>▹</span>
            Experienced in DevOps building production grade CI/CD pipelines.
          </div>
          <div>
            <span>▹</span>
            Created and Deployed Automated Workflows and System Monitoring using
            AWS lambda.
          </div>
          <div>
            <span>▹</span>
            In Spring boot Created a secure single-sign-on system for client
            application using Azure Ad and SAML.
          </div>
        </div>
      </div>
      <div className="achievements">
        <h5>Achievements:</h5>
        <a
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="www.youtube.com"
        >
          Google Certified Associate Android Developer
        </a>
        <p>
          Contributed to open-source projects like{" "}
          <a
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/knadh/indexed-cache"
          >
            Indexed-cache by zerodha
          </a>
          ,{" "}
          <a
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/typescript-exercises/typescript-exercises"
          >
            Typescript-exercises
          </a>
        </p>
      </div>
    </div>
  );
};
export default About;
