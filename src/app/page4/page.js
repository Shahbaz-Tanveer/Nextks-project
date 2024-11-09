import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-l from-[rgb(1,1,1)] to-[#4d4d4d] flex flex-col items-center p-4 lg:p-0">
      <div className="w-full max-w-6xl relative flex flex-col lg:flex-row items-center lg:items-start gap-6 pt-4 lg:h-screen">
        {/* Image Container */}
        <div className="relative w-full lg:w-1/2 aspect-square lg:aspect-auto lg:h-full">
          {/* First image (Union.PNG) container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative  lg:-top-48 lg:-left-25 w-full">
              <img
                src="Union.PNG"
                alt="Placeholder"
                className="w-[50%] md:w-[55%] h-auto object-contain mix-blend-overlay opacity-90 brightness-200 contrast-125"
              />
            </div>
          </div>

          {/* Combined second and third image container */}
          <div className="absolute w-full" style={{ bottom: "5vh" }}>
            {/* Second image (1stshoe.png) */}
            <div className="relative  lg:-top-40 lg:-left-9 w-full">
              <img
                src="1stshoe.png"
                alt="Placeholder"
                className="w-full h-auto object-contain mix-blend-overlay"
              />
            </div>
            {/* Third image (Ellipse.PNG) */}
            <div className="relative -mt-16 lg:-mt-24">
              <img
                src="Ellipse.PNG"
                alt="Placeholder"
                className="w-full h-auto object-contain mix-blend-overlay"
              />
            </div>
          </div>
        </div>

        {/* Content Container - Adjusted for better mobile positioning */}
        <div className="w-full lg:w-1/2 flex flex-col gap-4 lg:gap-6 z-10 lg:h-full justify-start lg:justify-center -mt-8 lg:mt-0">
          <h1 className="text-4xl lg:text-7xl text-white font-bold font-['Signika'] text-center lg:text-right">
            Thank You
          </h1>

          <h1 className="text-2xl lg:text-3xl text-white font-bold font-['Signika'] text-center lg:text-right">
            for your feedback!
          </h1>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6 gap-4 w-full">
            {/* Back Button */}
            <Link
              href="/page3"
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
              href="/"
              className="w-full sm:w-40 lg:w-80 h-16 px-[35px] py-2 bg-[#ffffff]  text-black font-semibold text-xl font-['Signika'] rounded-[35px] flex justify-center items-center gap-2 mt-4 sm:mt-6 lg:mt-4"
            >
              <div className="text-black text-xl font-bold mr-2 font-['Signika']">
                Back To Home
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
