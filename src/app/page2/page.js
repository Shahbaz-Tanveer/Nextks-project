"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page2() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Get email from local storage and fetch progress
    const storedEmail = localStorage.getItem("emailAddress");
    if (storedEmail) {
      setEmail(storedEmail);
      fetchProgress(storedEmail);
    } else {
      setError("Email not found. Please go back and enter your email.");
    }
  }, []);

  // Fetch progress for the current email
  const fetchProgress = async (email) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/progress/${email}`
      );
      if (response.status === 200 && response.data.success) {
        const { step, data } = response.data.data;
        if (step >= 1 && data.Q1) {
          // Set selected card based on previously answered question
          setSelectedCard(data.Q1 === "Nike Orange" ? 1 : 2);
        }
      }
    } catch (error) {
      console.error("Error fetching progress:", error);
      setError("Failed to fetch your progress. Please try again.");
    }
  };

  const handleCardClick = async (cardId) => {
    try {
      setIsSubmitting(true);
      setSelectedCard(cardId);

      const answerText = cardId === 1 ? "Nike Orange" : "Nike Black";

      if (!email) {
        console.error("No email found");
        setError("Email not found. Please go back and enter your email.");
        return;
      }

      const response = await axios.post(
        "http://localhost:5000/api/submit-question",
        {
          email: email,
          questionNumber: 1,
          answer: answerText,
        }
      );

      if (response.status === 200) {
        console.log("Answer submitted successfully:", answerText);
      }
    } catch (error) {
      console.error("Error submitting answer:", error);
      setError("Failed to submit your answer. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-l from-[#010101] to-[#4d4d4d] flex flex-col items-center p-4 lg:pt-4">
      <div className="w-full max-w-2xl mx-auto p-4 lg:p-6 flex flex-col items-center justify-center h-full">
        <h3 className="text-white font-bold text-center mb-4 lg:mb-8">
          Question 1
        </h3>
        <h1 className="text-white text-2xl lg:text-3xl font-bold text-center mb-6 lg:mb-8">
          What is your preferred choice?
        </h1>

        {error && <div className="text-[#f91c1c] text-sm mb-4">{error}</div>}

        <div className="text-center w-full">
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-4 w-full">
            {/* Card 1 - Nike Orange */}
            <div
              className={`w-full lg:w-[350px] h-[300px] lg:h-[350px] relative bg-[#6d6d6d] rounded-[35px] cursor-pointer ${
                isSubmitting ? "pointer-events-none opacity-50" : ""
              } ${selectedCard === 1 ? "border-4 border-[#bbe94a]" : ""}`}
              onClick={() => handleCardClick(1)}
            >
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white font-bold">
                <h3>Nike Orange</h3>
              </div>
              <img
                src="Rectangle1.PNG"
                alt="Nike Orange"
                className="absolute inset-0 max-w-[80%] max-h-[80%] object-contain rounded-[35px] top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2"
              />
              {selectedCard === 1 && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                  <div className="w-[30px] h-[30px] bg-white rounded-[25px] border-4 border-black" />
                </div>
              )}
            </div>

            {/* Card 2 - Nike Black */}
            <div
              className={`w-full lg:w-[350px] h-[300px] lg:h-[350px] relative bg-[#6d6d6d] rounded-[35px] cursor-pointer ${
                isSubmitting ? "pointer-events-none opacity-50" : ""
              } ${selectedCard === 2 ? "border-4 border-[#bbe94a]" : ""}`}
              onClick={() => handleCardClick(2)}
            >
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 text-white font-bold">
                <h3>Nike Black</h3>
              </div>
              <img
                src="Rectangle2.PNG"
                alt="Nike Black"
                className="absolute inset-0 max-w-[80%] max-h-[80%] object-contain rounded-[35px] top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2"
              />
              {selectedCard === 2 && (
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2">
                  <div className="w-[30px] h-[30px] bg-white rounded-[25px] border-4 border-black" />
                </div>
              )}
            </div>
          </div>

          {!selectedCard && (
            <div className="text-[#f91c1c] text-xl lg:text-2xl font-normal font-['Signika'] mt-6">
              Please select one
            </div>
          )}

          <div className="flex justify-between gap-3 w-full mt-6">
            {/* Back Button */}
            <Link
              href="/"
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
              href={selectedCard ? "/page3" : "#"}
              className={`w-24 sm:w-42 md:w-40 h-12 sm:h-16 px-3 sm:px-6 ${
                selectedCard ? "bg-[#bbe94a] hover:bg-[#a1d26c]" : "bg-gray-400"
              } rounded-full flex items-center justify-center transition-colors ${
                !selectedCard || isSubmitting
                  ? "cursor-not-allowed opacity-50"
                  : ""
              }`}
              onClick={(e) => {
                if (!selectedCard || isSubmitting) {
                  e.preventDefault();
                }
              }}
            >
              <span className="text-black text-base sm:text-xl font-bold mr-3 truncate">
                {isSubmitting ? "Saving..." : "Next"}
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
