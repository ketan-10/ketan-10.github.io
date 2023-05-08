import React from "react";
import FireWork from "./Fireworks";
import ScrollDown from "./ScrollDown";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="front">
          <h1>Ketan Chaudhari</h1>
          <p>Full stack developer</p>
        </div>
        <div className="back">
          <h1>Happy New Year</h1>
        </div>
        <FireWork />
        <ScrollDown/>
      </div>
    </div>
  );
};
export default Hero;
