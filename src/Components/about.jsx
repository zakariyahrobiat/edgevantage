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
            <span>Edgevantage</span> specializes in transforming innovative
            concepts into successful businesses by guiding ideas from conception
            to reality. Our expert teams possess the necessary tools and
            knowledge to handle ideas of any complexity or development stage.
            Their problem-solving process can be summarized in three steps:
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
