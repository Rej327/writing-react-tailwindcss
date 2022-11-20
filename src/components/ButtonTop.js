import React from "react";
import { useEffect, useState } from "react";

const ButtonTop = () => {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, []);

  // const [showButton, setShowButton] = useState(false);
  // // const go = window.pageYOffset;
  // // console.log(go);

  // const go = function () {
  //   let goes = window.addEventListener("scroll", function () {});
  //   console.log(goes);
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll, { passive: true });

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  console.log(scrollPosition);

  return (
    <div>
      <div>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className={`z-100 bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-[#00df9a] text-white text-3xl font-bold ${
            scrollPosition >= 700 ? "fixed" : "hidden"
          }`}
        >
          &uarr;
        </button>
      </div>
    </div>
  );
};

export default ButtonTop;
