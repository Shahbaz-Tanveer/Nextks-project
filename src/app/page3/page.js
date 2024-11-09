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
    <div className="min-h-screen bg-gradient-to-l from-[#010101] to-[#4d4d4d] flex flex-col items-center justify-center p-4 lg:pt-4">
      <div className="max-w-2xl w-full mx-auto p-6 flex flex-col items-center justify-center">
        {/* Adjusted top margins for both mobile and larger screens */}
        <h3 className="text font-bold text-center mb-4 mt-4 sm:mt-2 lg:mt-4">
          Question 2
        </h3>
        <h1 className="text-3xl font-bold text-center mb-6 mt-2 sm:mt-4 lg:mt-4">
          How important are these aspects for you?
        </h1>

        {/* Rating Section */}
        {["comfort", "looks", "price"].map((aspect, idx) => (
          <div key={aspect} className="w-full mb-6 mt-4 sm:mt-4 lg:mt-4">
            <div className="flex justify-between items-center bg-white rounded-[40px] p-4">
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

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6 gap-4 w-full">
          {/* Back Button */}
          <Link
            href="/page2"
            className="w-full sm:w-40 h-16 px-[35px] py-2 bg-[#edb6d2] hover:bg-[#d79c9e] text-black font-semibold text-xl font-['Signika'] rounded-[35px] flex justify-center items-center gap-2 mt-4 sm:mt-6 lg:mt-4"
          >
            <div className="w-4 h-4">
              <img
                src="Union3.PNG"
                alt="Union Icon"
                className="w-full h-full object-contain filter grayscale"
              />
            </div>
            <div className="text-black text-xl font-bold ml-2 font-['Signika']">
              Back
            </div>
          </Link>

          {/* Next Button */}
          <Link
            href="/page4"
            className="w-full sm:w-40 h-16 px-[35px] py-2 bg-[#bbe94a] hover:bg-[#a1d26c] text-black font-semibold text-xl font-['Signika'] rounded-[35px] flex justify-center items-center gap-2 mt-4 sm:mt-6 lg:mt-4"
          >
            <div className="text-black text-xl font-bold mr-2 font-['Signika']">
              Next
            </div>
            <div className="w-4 h-4">
              <img
                src="Union2.PNG"
                alt="Union Icon"
                className="w-full h-full object-contain filter grayscale"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
