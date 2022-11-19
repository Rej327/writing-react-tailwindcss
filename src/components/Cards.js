import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="bg-white w-full py-[10rem] px-4 ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Single}
            alt="/"
            className="w-20 mx-auto my-[-3px] bg-white"
          />
          <h2 className="text-2xl py-8 font-bold text-center">Single User</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 border-b mt-8">500 GB Storage</p>
            <p className="py-2 mx-8 border-b ">1 User Allowed</p>
            <p className="py-2 mx-8 border-b ">Send up to 2GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#00df9a] hover:text-black hover:drop-shadow-xl duration-300">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Double}
            alt="/"
            className="w-20 mx-auto my-[-3px] bg-white"
          />
          <h2 className="text-2xl py-8 font-bold text-center">Partnership</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 border-b mt-8">1 TB Storage</p>
            <p className="py-2 mx-8 border-b ">3 User Allowed</p>
            <p className="py-2 mx-8 border-b ">Send up to 10GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#00df9a] hover:text-black hover:drop-shadow-xl duration-300">
            Start Trial
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={Triple}
            alt="/"
            className="w-20 mx-auto my-[-3px] bg-white"
          />
          <h2 className="text-2xl py-8 font-bold text-center">Group Account</h2>
          <p className="text-center font-bold text-4xl">$149</p>
          <div className="text-center font-medium">
            <p className="py-2 mx-8 border-b mt-8">5 TB Storage</p>
            <p className="py-2 mx-8 border-b ">10 User Allowed</p>
            <p className="py-2 mx-8 border-b ">Send up to 20GB</p>
          </div>
          <button className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 hover:bg-[#00df9a] hover:text-black hover:drop-shadow-xl duration-300">
            Start Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
