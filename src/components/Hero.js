import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] my-[30px] md:mt-[1px] w-full md:h-fit mx-auto text-center felx flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">PROGRESS IN PROGRAMMING</p>
        <h2 className="text-4xl font-bold sm:text-6xl sm:py-4 md:text-7xl md:py-6">
          From seed to bloom
        </h2>
        <div>
          <p className="text-xl font-bold p-4 sm:text-2xl md:text-4xl">
            Start with the Fundamentals of{" "}
          </p>
          <Typed
            className="text-gray-500 font-mono text-3xl font-bold pl-2 sm:text-4xl md:text-5xl md:pl-4"
            strings={["HTML", "CSS", "JAVASCRIPT"]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </div>
        <div>
          <p className="text-xl font-bold py-4 sm:text-2xl md:text-4xl">
            Improving by using{" "}
          </p>
          <Typed
            className="text-gray-500 font-mono text-3xl font-bold pl-2 sm:text-4xl md:text-5xl md:pl-4"
            strings={["REACT", "TAILWIND-CSS"]}
            typeSpeed={60}
            backSpeed={40}
            loop
          />
        </div>
        <p className="text-gray-500 text-1xl font-bold p-4 md:text-3xl sm:text-2xl">
          I currently studying programming in almost 2 months
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-2 mx-auto py-3 text-black font-2xl hover:text-white duration-500">
          Info
        </button>
      </div>
    </div>
  );
};

export default Hero;
