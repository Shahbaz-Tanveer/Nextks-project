"use client";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function QuestionPage() {
  const [email, setEmail] = useState(null);
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
    if (typeof window !== "undefined") {
      const storedEmail = localStorage.getItem("emailAddress");
      setEmail(storedEmail);
    }
  }, []);

  useEffect(() => {
    const loadProgress = async () => {
      if (!email) {
        setIsLoading(false);
        return;
      }

      try {
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
      {/* Rest of your component code */}
    </div>
  );
}

