import React, { useRef } from "react";
import { GitHub, ExternalLink, Youtube, Play, Cloud } from "react-feather";
import useIsVisible from "../hooks/useIsVisible";
import {BASE_URL} from '../Constants'

const labelIcon = {
  GitHub: {
    icon: <GitHub />,
  },
  LiveDemo: {
    icon: <ExternalLink />,
  },
  Youtube: {
    icon: <Youtube />,
  },
  PlayStore: {
    icon: <Play />,
  },
  Cloud: {
    icon: <Cloud/>
  }
};
// No need to Memoized this component, As comparing props for equality is more expensive than just rendering.
const ProjectCard = ({ project }) => {
  const containerRef = useRef(null);
  const isVisible = useIsVisible(containerRef);
  return (
    <div className="project" ref={containerRef}>
      {isVisible && (
        <>
          <div
            className="project-content fadeInDownAnimation"
            style={{ "--animation-delay": "0.5s" }}
          >
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
                  href={BASE_URL + link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon"
                >
                  {labelIcon[link.label].icon}
                </a>
              ))}
            </div>
          </div>
          <div className="project-img fadeInDownAnimation">
            <img src={project.img} alt="" />
          </div>
        </>
      )}
    </div>
  );
};
export default ProjectCard;
