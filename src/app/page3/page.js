"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page2() {
  // State to track selected scores for each aspect
  const [scores, setScores] = useState({
    comfort: null,
    looks: null,
    price: null,
  });

  const handleDotClick = (aspect, score) => {
    setScores((prevScores) => ({
      ...prevScores,
      [aspect]: score,
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-l from-[#010101] to-[#4d4d4d] flex flex-col items-center justify-center lg:pt-4 ">
      <div className="block sm:hidden sm:ml-2 ">
        <img
          src="Union.PNG"
          alt="Your Image"
          className="w-1/2 h-auto mx-auto  top-0 left-0 ml-2 z-10 opacity-65"
        />

        <img
          src="1stshoe.PNG"
          alt="Your Image"
          className="w-3/4 h-auto mx-auto absolute top-5 left-12 filter mix-blend-overlay"
        />
      </div>
      <div className="sm:mt-1 lg:mt-8 z-10">
        <div className="max-w-2xl w-full mx-auto p-6 flex flex-col items-center justify-center z-30 sm:mt-3">
          <h3 className="text font-bold text-center mt-4 lg:mt-4">
            Question 2
          </h3>
          <h1 className="text-3xl font-bold text-center mb-6 mt-2 sm:mt-4 lg:mt-4">
            <span className="hidden sm:block">
              How important are these aspects for you?
            </span>

            <span className="block sm:hidden">
              Which attributes make the difference for you?
            </span>
          </h1>

          {/* Rating Section */}
          {["comfort", "looks", "price"].map((aspect, idx) => (
            <div key={aspect} className="w-full mb-6 mt-4 sm:mt-4 lg:mt-4 ">
              <div className="flex justify-between items-center bg-white rounded-[40px] p-4 sm:p-3 sm:h-14 sm:h-12 lg:p-4">
                <span className="text-lg font-semibold text-gray-800 capitalize">
                  {aspect}
                </span>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <span
                      key={dot}
                      onClick={() => handleDotClick(aspect, dot)}
                      className={`w-4 h-4 rounded-full cursor-pointer transition-colors ${
                        scores[aspect] >= dot ? "bg-black" : "bg-gray-300"
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
              {scores[aspect] === null && (
                <div className="text-[#f91c1c] text-sm mt-1 sm:mt-2 lg:mt-2">
                  Please select a score
                </div>
              )}
            </div>
          ))}
          <div className="flex justify-between gap-3 w-full mt-6">
            {/* Back Button */}
            <Link
              href="/page2"
              className="w-24 sm:w-42 md:w-40 h-12 sm:h-16 px-3 sm:px-6 bg-[#edb6d2] hover:bg-[#d79c9e] rounded-full flex items-center justify-center transition-colors"
            >
              <div className="w-3 sm:w-4 h-3 sm:h-4 mr-1">
                <img
                  src="Union3.PNG"
                  alt="Back"
                  className="w-full h-full object-contain filter grayscale "
                />
              </div>
              <span className="text-black text-base sm:text-xl font-bold ml-3 sm:ml-3">
                Back
              </span>
            </Link>

            {/* Back to Home Button */}
            <Link
              href="/page4"
              className="w-24 sm:w-42 md:w-40 h-12 sm:h-16 px-3 sm:px-6 bg-[#ffffff] hover:bg-[#e1e0e0] rounded-full flex items-center justify-center transition-colors"
            >
              <span className="text-black text-base sm:text-xl font-bold mr-3 truncate">
                Next
              </span>
              <div className="w-3 sm:w-4 h-3 sm:h-4 ml-1 sm:ml-2 flex-shrink-0">
                <img
                  src="Union2.PNG"
                  alt="Home"
                  className="w-full h-full object-contain filter grayscale"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
