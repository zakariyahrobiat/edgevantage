import React from "react";
import "./Home.sass";
import Header from "../Components/header";
import Hero from "../Components/hero";
import About from "../Components/about";
import WhatWeDo from "../Components/whatWeDo";
import Service from "../Components/service";
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <WhatWeDo />
      <Service />
    </div>
  );
};

export default Home;
