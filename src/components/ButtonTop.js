import React from "react";
import { useEffect, useState } from "react";

const ButtonTop = () => {
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
          className={`z-100 fixed bottom-8 right-8 border-0 w-16 h-16 rounded-full drop-shadow-md bg-[#00df9a] text-white text-3xl font-bold ease-in-out hover:shadow-xl hover:-translate-y-2 duration-500 ${
            scrollPosition >= 700 ? "right-8" : "right-[-50%]"
          }`}
        >
          &uarr;
        </button>
      </div>
    </div>
  );
};

export default ButtonTop;
