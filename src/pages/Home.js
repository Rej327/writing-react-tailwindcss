import React from "react";
import Analytics from "../components/Analytics";
import Cards from "../components/Cards";
import Newsletter from "../components/Newsletter";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <Analytics />
      <Newsletter />
      <Cards />
    </div>
  );
};

export default Home;
