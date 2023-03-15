import React from "react";
import "./service.scss";
import graphics from "../assests/img/graphics.png";
import web from "../assests/img/web.png";
import data from "../assests/img/data.png";
const Service = () => {
  return (
    <div className="service">
      <h1 className="title">Our Services</h1>
      <div className="service-container">
        <div className="box">
          <div className="image">
            <img src={graphics} alt="" srcSet="" />
          </div>
          <div className="text-container">
            <h1>UI/UX & Graphics Design</h1>
            <p>
              Evolab enhances customer interest through user-centered design.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={web} alt="" srcSet="" />
          </div>
          <div className="text-container">
            <h1>Web development</h1>
            <p>
              We build visually appealing and user-friendly websites and web
              applications.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={data} alt="" srcSet="" />
          </div>
          <div className="text-container">
            <h1>Database design</h1>
            <p>
              We provides efficient, secure databases to ensure optimal data
              management.{" "}
            </p>
          </div>
        </div>
        <div className="box">
          <div className="image"></div>
          <div className="text-container">
            <h1>WordPress/Web flow</h1>
            <p>
              We provides WordPress design, development, and maintenance
              services.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="image"></div>
          <div className="text-container">
            <h1>Machine learning & AI</h1>
            <p>
              Unlock the potential of AI and Machine Learning to drive business
              to success.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="image"></div>
          <div className="text-container">
            <h1>Data analysis</h1>
            <p>
              We transform data into actionable insights through expert data
              analysis.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="image"></div>
          <div className="text-container">
            <h1>Web 3.0</h1>
            <p>
              We build decentralized web solutions for a more open, secure &
              transparent internet.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="image"></div>
          <div className="text-container">
            <h1>Email marketing</h1>
            <p>
              We Craft targeted & effective email marketing campaigns to drive
              business growth
            </p>
          </div>
        </div>
        <div className="box">
          <div className="image"></div>
          <div className="text-container">
            <h1>Business analysis</h1>
            <p>
              Edgevantage team transform business through strategic analysis.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="image"></div>
          <div className="text-container">
            <h1>Project management</h1>
            <p>
              Creating visually impactful graphics that communicate your message
              effectively.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="image"></div>
          <div className="text-container">
            <h1>Book formating</h1>
            <p>
              We provide professional book formatting for a polished and
              finished product.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="image"></div>
          <div className="text-container">
            <h1>Data engineering</h1>
            <p>
              We design and build robust data infrastructure to support
              data-driven decision making
            </p>
          </div>
        </div>
        <div className="box">
          <div className="image"></div>
          <div className="text-container">
            <h1>Video animation & editing</h1>
            <p>
              Build robust data infrastructure to support data-driven decision
              making
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
