import React from "react";
import { GitHub, ExternalLink } from "react-feather";

const labelIcon = {
  GitHub: {
    icon: <GitHub />,
  },
  "Live Demo": {
    icon: <ExternalLink />,
  },
};
// No need to Memoized this component, As comparing props for equality is more expensive than just rendering.
const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <div className="project">
      <div className="project-content">
        <h2>{project.header}</h2>
        <div className="proj-description">
          {project.description.map((desc) => (
            <p key={desc}>{desc}</p>
          ))}
        </div>
        <ul className="proj-tech-stack">
          {project.techStack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="project-links">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              {labelIcon[link.label].icon}
            </a>
          ))}
        </div>
      </div>
      <div className="project-img">
        <img src={project.img} alt="" />
      </div>
    </div>
  );
};
export default ProjectCard;
