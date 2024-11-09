"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page2() {
  const [selectedCard, setSelectedCard] = useState(null);
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(""); // For error handling

  useEffect(() => {
    // Fetch email from localStorage when component mounts
    const storedEmail = localStorage.getItem("emailAddress");
    if (storedEmail) {
      setEmail(storedEmail);
    } else {
      setError("Email not found. Please go back and enter your email.");
    }
  }, []);

  const handleCardClick = async (cardId) => {
    setSelectedCard(cardId);

    // Send POST request with the email and selected answer
    if (email) {
      try {
        const response = await fetch(
          "http://localhost:5000/api/submit-question",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: email,
              questionNumber: 1, // Since it's question 1
              answer: cardId === 1 ? "1" : "2", // 1 for Nike Orange, 2 for Nike Black
            }),
          }
        );

        if (response.ok) {
          console.log("Answer submitted successfully");
        } else {
          console.error("Error submitting answer");
        }
      } catch (error) {
        console.error("Error:", error);
      }
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
        <div className="text-center w-full">
          <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-4 w-full">
            {/* Card 1 */}
            <div
              className="w-full lg:w-[350px] h-[300px] lg:h-[350px] relative bg-[#6d6d6d] rounded-[35px] cursor-pointer"
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

            {/* Card 2 */}
            <div
              className="w-full lg:w-[350px] h-[300px] lg:h-[350px] relative bg-[#6d6d6d] rounded-[35px] cursor-pointer"
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

          <div className="text-[#f91c1c] text-xl lg:text-2xl font-normal font-['Signika'] mt-6">
            Please select one
          </div>

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
                  className="w-full h-full object-contain filter grayscale "
                />
              </div>
              <span className="text-black text-base sm:text-xl font-bold ml-3 sm:ml-3">
                Back
              </span>
            </Link>

            <Link
              href="/page3"
              passHref
              onClick={(e) => {
                // Prevent navigation if no card is selected
                if (!selectedCard) {
                  e.preventDefault();
                }
              }}
              className={`w-24 sm:w-42 md:w-40 h-12 sm:h-16 px-3 sm:px-6 bg-[#bbe94a] hover:bg-[#a1d26c] rounded-full flex items-center justify-center transition-colors ${
                !selectedCard ? "cursor-not-allowed opacity-50" : ""
              }`}
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
