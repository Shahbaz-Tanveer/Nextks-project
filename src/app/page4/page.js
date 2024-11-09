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
          <div className="flex justify-between gap-3 w-full mt-6">
            {/* Back Button */}
            <Link
              href="/page3"
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

            {/* Back to Home Button */}
            <Link
              href="/"
              className="w-40 sm:w-52 md:w-60 h-12 sm:h-16 px-3 sm:px-6 bg-white rounded-full flex items-center justify-center"
            >
              <span className="text-black text-base sm:text-xl font-bold mr-3 truncate">
                Back To Home
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
