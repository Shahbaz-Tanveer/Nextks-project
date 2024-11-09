import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-l from-[rgb(1,1,1)] to-[#4d4d4d] flex flex-col items-center  ">
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
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-right pr-7 lg:pr-[15vw] xl:pr-[20vw]">
        <h1 className="text-white font-bold text-6xl lg:text-8xl xl:text-8xl">
          Thank you
        </h1>

        <h1 className="text-white font-bold text-2xl pt-5">
          For your feedback!
        </h1>
        <div className="flex justify-between gap-20 w-full mt-6 pt-5 xl:gap-4">
          {/* Back Button */}
          <Link
            href="/page3"
            className="w-24 sm:w-42 md:w-40 h-12 sm:h-16 px-3 sm:px-6 bg-[#edb6d2] hover:bg-[#d79c9e] rounded-full flex items-center justify-center transition-colors xl:-mr-15"
          >
            <div className="w-3 sm:w-4 h-3 sm:h-4 mr-1">
              <img
                src="Union3.PNG"
                alt="Back"
                className="w-full h-full object-contain filter grayscale "
              />
            </div>
            <span className="text-black text-base text-2xl font-bold ml-3 ">
              Back
            </span>
          </Link>

          {/* Back to Home Button */}
          <Link
            href="/"
            className="w-40 sm:w-52 md:w-60 xl:w-72 h-12 sm:h-16 px-3 sm:px-6 bg-white hover:bg-[#DAD8D8] rounded-full flex items-center justify-center"
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
  );
}
