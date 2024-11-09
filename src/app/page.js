"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SurveyComponent() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  // Check if email is already saved in localStorage
  useEffect(() => {
    const savedEmail = localStorage.getItem("emailAddress");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setError(null);
  };

  const handleStartSurvey = async (e) => {
    if (!email) {
      e.preventDefault();
      setError("Please enter an email address");
      return;
    }

    try {
      // First submit the email
      const response = await axios.post(
        "http://localhost:5000/api/submit-email",
        {
          email: email,
        }
      );

      if (response.data.success) {
        console.log("Email submitted successfully");
        localStorage.setItem("emailAddress", email);
        // Don't prevent default here to allow navigation
      } else {
        e.preventDefault();
        setError("Failed to submit email. Please try again.");
      }
    } catch (error) {
      e.preventDefault();
      console.error("Error submitting email:", error);
      setError("Failed to submit email. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-l from-[rgb(1,1,1)] to-[#4d4d4d] flex flex-col items-center  lg:p-0">
      <div className="w-full max-w-6xl relative flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:h-screen">
        <div className="relative w-full lg:w-1/2 aspect-square lg:aspect-auto lg:h-full">
          {/* Image placeholders */}
          <div>
            <div>
              <img
                src="Union.PNG"
                alt="Placeholder"
                className="w-[50%] md:w-[55%] h-auto object-contain mix-blend-overlay opacity-90 brightness-200 contrast-125 sm:top-10 xl:mt-[5%]  xl:ml-[15%] pl-6"
              />
            </div>
          </div>

          <div className="absolute w-full" style={{ bottom: "5vh" }}>
            <div className="relative lg:-top-40 lg:-left-9 w-full">
              <img
                src="1stshoe.png"
                alt="Placeholder"
                className="w-full h-auto object-contain mix-blend-overlay"
              />
            </div>

            <div className="relative -mt-16 lg:-mt-24">
              <img
                src="Ellipse.PNG"
                alt="Placeholder"
                className="w-full h-auto object-contain mix-blend-overlay"
              />
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6 z-10 lg:h-full justify-start lg:justify-center -mt-8 p-4">
          <h1 className="text-4xl lg:text-7xl text-white font-bold text-center lg:text-left lg:pr-2">
            Questionnaire
          </h1>
          <div className="lg:ml-10">
            <div className="bg-[#edb6d2] rounded-3xl p-4 lg:p-8">
              <div className="space-y-2 lg:space-y-4 text-black">
                <span className="text-xl lg:text-2xl block font-extrabold">
                  Welcome!
                </span>
                <p className="text-base lg:text-lg ">
                  We're excited to hear your thoughts, ideas, and insights.
                  Don't worry about right or wrong answers—just speak from the
                  heart. Your genuine feedback is invaluable to us!
                </p>
              </div>
            </div>
          </div>

          <div className="lg:ml-10">
            <div className="space-y-2">
              <label className="text-white text-xl font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter email address"
                className="w-full h-12 lg:h-14 px-4 py-3 bg-white rounded-3xl border border-[#cdcdcd] text-sm font-bold text-[#a2a2a2]"
                value={email}
                onChange={handleEmailChange}
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
          </div>

          <div className="lg:ml-10">
            <Link
              href="/page2"
              passHref
              onClick={handleStartSurvey}
              className={`self-stretch h-16 lg:h-20 px-[35px] py-2 bg-[#bbe94a] rounded-[35px] flex justify-between items-center ${
                !email || error ? "cursor-not-allowed opacity-50" : ""
              }`}
            >
              <div className="text-black text-xl lg:text-2xl font-bold font-['Signika']">
                Start Survey
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
    </div>
  );
}
