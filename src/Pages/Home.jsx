import React from "react";
import "./Home.sass";
import Header from "../Components/header";
import Hero from "../Components/hero";
import About from "../Components/about";
const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
    </div>
  );
};

export default Home;
