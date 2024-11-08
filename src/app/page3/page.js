"use client";

import Link from "next/link";
import { useState } from "react";
export default function Page2() {
  // State to track selected card
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardId) => {
    setSelectedCard(cardId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-l from-[#010101] to-[#4d4d4d] flex flex-col items-center p-4 lg:pt-4 ">
      <div className="max-w-2xl mx-auto p-6 flex flex-col items-center justify-center h-full">
        <h3 className="text font-bold text-center mb-8">Question 2</h3>
        <h1 className="text-3xl font-bold text-center mb-8">
          How important are those aspects are for you?
        </h1>

        <div className="text-[#f91c1c] text-2xl font-normal font-['Signika'] mt-6">
          Please select one
        </div>

        <div className="flex justify-between mt-6 gap-4">
          {/* Back Button */}
          <Link
            href="/page2"
            className="w-full sm:w-40 h-20 px-[35px] py-2 bg-[#edb6d2] hover:bg-[#d79c9e] text-black font-semibold text-2xl font-['Signika'] rounded-[35px] flex justify-center items-center gap-2"
          >
            <div className="w-4 h-4">
              <img
                src="Union3.PNG"
                alt="Union Icon"
                className="w-full h-full object-contain filter grayscale"
              />
            </div>
            <div className="text-black text-2xl font-bold ml-2 font-['Signika']">
              Back
            </div>
          </Link>

          {/* Next Button */}
          <Link
            href="/page4"
            className="w-full sm:w-40 h-20 px-[35px] py-2 bg-[#bbe94a] hover:bg-[#a1d26c] text-black font-semibold text-2xl font-['Signika'] rounded-[35px] flex justify-center items-center gap-2"
          >
            <div className="text-black text-2xl font-bold mr-2 font-['Signika']">
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
