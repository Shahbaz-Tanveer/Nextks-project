"use client";

import Link from "next/link";
import { useState } from "react";

export default function Page2() {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
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
          {/* Changed to flex-col for mobile and maintained row for desktop */}
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

          <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4">
            {/* Back Button */}
            <Link
              href="/"
              className="w-full sm:w-40 h-16 lg:h-20 px-6 lg:px-[35px] py-2 bg-[#edb6d2] hover:bg-[#d79c9e] text-black font-semibold text-xl lg:text-2xl font-['Signika'] rounded-[35px] flex justify-center items-center gap-2"
            >
              <div className="w-4 h-4">
                <img
                  src="Union3.PNG"
                  alt="Union Icon"
                  className="w-full h-full object-contain filter grayscale"
                />
              </div>
              <div className="text-black font-bold font-['Signika']">Back</div>
            </Link>

            {/* Next Button */}
            <Link
              href="/page3"
              className="w-full sm:w-40 h-16 lg:h-20 px-6 lg:px-[35px] py-2 bg-[#bbe94a] hover:bg-[#a1d26c] text-black font-semibold text-xl lg:text-2xl font-['Signika'] rounded-[35px] flex justify-center items-center gap-2"
            >
              <div className="text-black font-bold font-['Signika']">Next</div>
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
