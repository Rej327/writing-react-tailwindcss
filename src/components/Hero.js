import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div>
        <p>Progress in Programming</p>
        <h1>From seed to bloom.</h1>
        <div>
          <p>Start with the Fundamentals of </p>
          <Typed
            strings={["HTML", "CSS", "JAVASCRIPT"]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </div>
        <div>
          <p>Improving by using </p>
          <Typed
            strings={["REACT", "TAILWIND-CSS"]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </div>
        <p>I currently studying programming in almost 2months</p>
        <button>Info</button>
      </div>
    </div>
  );
};

export default Hero;
