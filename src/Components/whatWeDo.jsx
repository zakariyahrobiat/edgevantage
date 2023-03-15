import React from "react";
import brief from "../assests/img/brief.png";
import process from "../assests/img/process.png";
import solution from "../assests/img/solution.png";
import "./whatWeDo.scss";
const WhatWeDo = () => {
  return (
    <div className="whatWeDo-container">
      <div className="box">
        <div className="image">
          <img src={brief} alt="" srcSet="" />
        </div>
        <div className="text-container">
          <h1>Get the brief</h1>
          <p>
            Gathering necessary information to understand and fulfill your
            requirements.
          </p>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src={process} alt="" srcSet="" />
        </div>
        <div className="text-container">
          <h1>Start the process</h1>
          <p>
            Initiating the journey towards achieving your goals with a
            structured and systematic process.
          </p>
        </div>
      </div>
      <div className="box">
        <div className="image">
          <img src={solution} alt="" srcSet="" />
        </div>
        <div className="text-container">
          <h1>Provide the solution</h1>
          <p>
            Presenting customized solutions to resolve your issues and meet your
            objectives.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
