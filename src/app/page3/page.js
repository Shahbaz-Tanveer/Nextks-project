"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function QuestionPage() {
  const email = localStorage.getItem("emailAddress");
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    const loadProgress = async () => {
      try {
        if (!email) {
          setIsLoading(false);
          return;
        }

        const response = await axios.get(
          `http://localhost:5000/api/progress/${email}`
        );

        if (response.data.success && response.data.data) {
          const { Q2_part1, Q2_part2, Q2_part3 } = response.data.data;

          setAnswers({
            comfort: Q2_part1 || null,
            looks: Q2_part2 || null,
            price: Q2_part3 || null,
          });
        }
      } catch (error) {
        console.error("Error loading progress:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadProgress();
  }, [email]);

  const isAllAnswered = Object.values(answers).every((value) => value !== null);

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
      const partNumber = key === "comfort" ? 1 : key === "looks" ? 2 : 3;

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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-l from-[#010101] to-[#4d4d4d] flex flex-col items-center justify-center lg:pt-4">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-l from-[#010101] to-[#4d4d4d] flex flex-col items-center justify-center ">
      <div className="block sm:hidden absolute -top-0 left-2 w-full">
        <div className="">
          <img
            src="Union.PNG"
            alt="Your Image"
            className="w-[55%] h-auto mx-auto left-0 top-0 pl-10 absolute xl:w-[20%] xl:left-[8%] xl:top-[2%]"
          />

          <img
            src="1stshoe.PNG"
            alt="Your Image"
            className="w-3/4 h-auto mx-auto absolute top-4 left-12 filter mix-blend-overlay xl:w-1/3 xl:left-[3%] xl:mt-20"
          />

          <img
            src="Ellipse.PNG"
            alt="Your Image"
            className="w-3/4 h-auto mx-auto absolute left-12 filter mix-blend-overlay hidden lg:block xl:w-1/3 xl:left-[5%] xl:mt-[20%] xl:pt-[15%]"
          />
        </div>
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

          {[
            { key: "comfort", label: "Comfort " },
            { key: "looks", label: "Looks " },
            { key: "price", label: "Price " },
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
              <div className="text-[#f91c1c] text-sm mt-1 sm:mt-2 lg:mt-2">
                Please select a score
              </div>
              {error[key] && (
                <div className="text-[#f91c1c] text-sm mt-1 sm:mt-2 lg:mt-2">
                  An error occurred while submitting. Please try again.
                </div>
              )}
            </div>
          ))}

          <div className="flex justify-between gap-3 w-full mt-6">
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

            <Link
              href={isAllAnswered ? "/page4" : "#"}
              className={`w-24 sm:w-42 md:w-40 h-12 sm:h-16 px-3 sm:px-6 ${
                isAllAnswered
                  ? "bg-[#ffffff] hover:bg-[#DAD8D8]"
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
