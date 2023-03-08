import React, { useRef } from "react";
import logo from "../assests/img/logo.png";
import menu from "../assests/img/menu.png";
import close from "../assests/img/close.png";
import country from "../assests/img/country.png";

import "./header.scss";
const Header = () => {
  const refContainer = useRef();
  const showNav = () => {
    refContainer.current.classList.add("active");
  };
  const closeNav = () => {
    refContainer.current.classList.remove("active");
  };
  return (
    <div className="home-container">
      <div className="header">
        <div className="logo-container">
          <div className="logo">
            <img src={logo} alt="" srcSet="" />
            <h1>Edgevantage</h1>
          </div>
          <div onClick={showNav} className="hamburger">
            <img src={menu} alt="" srcSet="" />
          </div>
        </div>
        <div className="side-container" ref={refContainer}>
          <div className="sidebar-container">
            <div className="sidebar">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/Services">Services</a>
                </li>
                <li>
                  <a href="/Works">Works</a>
                </li>
                <li>
                  <a href="/Training">Training</a>
                </li>
                <li>
                  <a href="/Contact">Contact us</a>
                </li>
                <p>EN</p>
              </ul>
            </div>
            <div className="close" onClick={closeNav}>
              <img src={close} alt="" srcset="" />
            </div>
          </div>

          <button className="hire-button">Hire us</button>
          <button className="sign-button">Sign in</button>
        </div>
        <div className="navlist">
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/Services">Services</a>
            </li>
            <li>
              <a href="/Works">Works</a>
            </li>
            <li>
              <a href="/Training">Training</a>
            </li>
            <li>
              <a href="/Contact">Contact us</a>
            </li>
          </ul>
        </div>
        <div className="button-container">
          <div className="country">
            <img src={country} alt="" srcSet="" />
            <p>En</p>
          </div>
          <button className="hire-button">Hire us</button>
          <button className="sign-button">Sign in</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
