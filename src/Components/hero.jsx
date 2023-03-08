import React from "react";
import hero from "../assests/img/hero.png";
import "./hero.scss";
const Hero = () => {
  return (
    <div className="hero-container">
      <div className="text-container">
        <h1 className="name">Edgevantage</h1>
        <h1 className="business">
          Innovative Business and Technology Development Center
        </h1>
        <p>
          Get furnished with the tools to launch your concept. Here are skilled
          software and business development experts for any of your requirement.
        </p>
        <button>Hire us</button>
        <img src={hero} alt="" srcSet="" />
      </div>
    </div>
  );
};

export default Hero;
