import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <p>Hello! My name is Ketan and I ❤ to build things for web.</p>
      <div className="work-experience">
        <h5>Work Experience: </h5>
        <p>
          I am currently working in NCS india, with 3 years of experience in with I have:
        </p>
        <div className="work-experience-points">
          <div>
            <span>▹</span>
            Architected and Developed Containerized, Scalable Web Application in
            spring boot and deployed on AWS ECS.
          </div>
          <div>
            <span>▹</span>
            Created a from scratch production grade reactJs application with performance and scalability in mind.
          </div>
          <div>
            <span>▹</span>
            Created and Deployed Automated Workflows and System Monitoring.
          </div>
          <div>
            <span>▹</span>
            Worked in technologies like AWS serverless, Golang, GraphQL to provide solution for different complex business scenarios.
          </div>
        </div>
      </div>
      <div className="achievements">
        <h5>Achievements:</h5>
        <a
          className="underline"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.credly.com/badges/93940c38-799a-42ae-bc79-14854e9078ad/public_url"
        >
          Certified Kubernetes Application Developer
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
