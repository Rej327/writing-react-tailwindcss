import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full px-4 py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="text-2xl font-bold py-4 sm:text-3xl md:text-4xl">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col items-center justify-between w-full sm:flex-row">
            <input
              type="email"
              name="email"
              placeholder="Type your email"
              className="p-3 flex w-full rounded-md text-black focus:ring focus:ring-[#00df9a] focus:outline-none"
            />
            <button className="bg-[#00df9a] text-black w-[200px] rounded-md font-medium ml-4 my-4 px-6 py-3 hover:bg-[#03faac] hover:scale-105 duration-300">
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{" "}
            <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
