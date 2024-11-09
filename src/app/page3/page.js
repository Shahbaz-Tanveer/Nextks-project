"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function QuestionPage() {
  const email = localStorage.getItem("emailAddress");

  const [answers, setAnswers] = useState({
    comfort: null,
    looks: null,
    price: null,
  });
  const [error, setError] = useState({
    comfort: false,
    looks: false,
    price: false,
  });

  // Check if all parts are answered to enable the "Next" button
  const isAllAnswered = Object.values(answers).every((value) => value !== null);

  // Handle dot click and submit the answer for the part
  const handleDotClick = async (key, value) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [key]: value,
    }));
    setError((prevError) => ({
      ...prevError,
      [key]: false,
    }));

    try {
      // Define the part number based on the key
      const partNumber = key === "comfort" ? 1 : key === "looks" ? 2 : 3;

      // Send the answer to the API
      await axios.post("http://localhost:5000/api/submit-question", {
        email,
        questionNumber: 2,
        part: partNumber,
        answer: value,
      });
      console.log(`Successfully submitted ${key} with value ${value}`);
    } catch (err) {
      console.error(`Error submitting ${key}:`, err);
      setError((prevError) => ({
        ...prevError,
        [key]: true,
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-l from-[#010101] to-[#4d4d4d] flex flex-col items-center justify-center lg:pt-4">
      <div className="block sm:hidden sm:ml-2 ">
        <img
          src="Union.PNG"
          alt="Your Image"
          className="w-1/2 h-auto mx-auto top-0 left-0 ml-2 z-10 opacity-65"
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

          {/* Rating Section for each part of Q2 */}
          {[
            { key: "comfort", label: "Comfort (Part 1)" },
            { key: "looks", label: "Looks (Part 2)" },
            { key: "price", label: "Price (Part 3)" },
          ].map(({ key, label }) => (
            <div key={key} className="w-full mb-6 mt-4 sm:mt-4 lg:mt-4">
              <div className="flex justify-between items-center bg-white rounded-[40px] p-4 sm:p-3 sm:h-14 sm:h-12 lg:p-4">
                <span className="text-lg font-semibold text-gray-800">
                  {label}
                </span>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((dot) => (
                    <span
                      key={dot}
                      onClick={() => handleDotClick(key, dot)}
                      className={`w-4 h-4 rounded-full cursor-pointer transition-colors ${
                        answers[key] >= dot ? "bg-black" : "bg-gray-300"
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
              {error[key] && (
                <div className="text-[#f91c1c] text-sm mt-1 sm:mt-2 lg:mt-2">
                  An error occurred while submitting. Please try again.
                </div>
              )}
            </div>
          ))}

          {/* Back and Next Buttons */}
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
                  className="w-full h-full object-contain filter grayscale"
                />
              </div>
              <span className="text-black text-base sm:text-xl font-bold ml-3 sm:ml-3">
                Back
              </span>
            </Link>

            {/* Next Button */}
            <Link
              href={isAllAnswered ? "/page4" : "#"}
              className={`w-24 sm:w-42 md:w-40 h-12 sm:h-16 px-3 sm:px-6 ${
                isAllAnswered
                  ? "bg-[#ffffff] hover:bg-[#e1e0e0]"
                  : "bg-gray-300 cursor-not-allowed"
              } rounded-full flex items-center justify-center transition-colors`}
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
