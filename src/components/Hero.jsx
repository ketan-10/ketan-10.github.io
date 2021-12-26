import React, { useRef } from "react";
import FireWork from "./Fireworks";
import Socials from "./Socials";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="front">
          <h1>Ketan Chaudhari</h1>
          <p>Full stack developer</p>
        </div>
        <div className="back">
          <h1>merry christmas </h1>
        </div>
        <FireWork />
      </div>
    </div>
  );
};
export default Hero;
