import React from "react";
import about from "../assests/img/about.png";
import "./about.scss";
const About = () => {
  return (
    <div className="about-container">
      <h1 className="about">About us</h1>
      <div className="about-wrapper">
        <div className="image">
          <img src={about} alt="" srcSet="" />
        </div>
        <div className="text-container">
          <h1>Expert Provider of Cutting-Edge Technology solutions.</h1>
          <p>
            At Evolab, we specialize in turning innovative concepts into
            tangible products and thriving businesses. Our expert teams possess
            a wealth of knowledge together with the necessary tools to guide
            your idea from concept to reality, no matter the level of complexity
            or development stage. This is achieved with several steps which can
            be summarize into three:
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
