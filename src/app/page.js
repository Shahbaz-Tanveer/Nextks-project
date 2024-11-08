import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-l from-[rgb(1,1,1)] to-[#4d4d4d] flex flex-col items-center p-4 lg:p-0">
      <div className="w-full max-w-6xl relative flex flex-col lg:flex-row items-center lg:items-start gap-6 pt-4 lg:h-screen">
        {/* Image Container */}
        <div className="relative w-full lg:w-1/2 aspect-square lg:aspect-auto lg:h-full">
          {/* First image (Union.PNG) container */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative -top-32 -left-8 lg:-top-48 lg:-left-12 w-full">
              <img
                src="Union.PNG"
                alt="Placeholder"
                className="w-[50%] md:w-[55%] h-auto object-contain mix-blend-overlay opacity-90 brightness-200 contrast-125"
              />
            </div>
          </div>

          {/* Second image (1stshoe.png) container - Moved much higher */}
          <div className="absolute bottom-0 w-full">
            <div className="relative -top-32 lg:-top-64 right-0">
              <img
                src="1stshoe.png"
                alt="Placeholder"
                className="w-full h-auto object-contain mix-blend-overlay"
              />
            </div>
          </div>
          <div className="absolute w-full" style={{ bottom: "20vh" }}>
            <img
              src="Ellipse.PNG"
              alt="Placeholder"
              className="w-full h-auto object-contain mix-blend-overlay"
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6 z-10 lg:h-full justify-center">
          <h1 className="text-4xl lg:text-7xl text-white font-bold font-['Signika'] text-center lg:text-right">
            Questionnaire
          </h1>
          {/* Welcome Message */}
          <div className="bg-[#edb6d2] rounded-3xl p-6 lg:p-8">
            <div className="space-y-4 text-black">
              <span className="text-xl lg:text-2xl font-['Source Sans Pro'] block">
                Welcome!
              </span>
              <p className="text-base lg:text-lg font-['Source Sans Pro']">
                We're excited to hear your thoughts, ideas, and insights. Don't
                worry about right or wrong answers—just speak from the heart.
                Your genuine feedback is invaluable to us!
              </p>
            </div>
          </div>
          {/* Email Input */}
          <div className="space-y-2">
            <label className="text-white text-xl font-medium font-['Signika']">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter email address"
              className="w-full h-14 px-4 py-3 bg-white rounded-3xl border border-[#cdcdcd] text-sm font-['Signika'] text-[#a2a2a2]"
            />
          </div>
          {/* Start Survey Button */}
          <Link href="/page2#startSurvey">
            <div className="self-stretch h-20 px-[35px] py-2 bg-[#bbe94a] rounded-[35px] flex justify-between items-center">
              <div className="text-black text-2xl font-bold font-['Signika']">
                Start Survey
              </div>

              {/* Image icon on the right */}
              <div className="w-4 h-4">
                <img
                  src="Union2.PNG"
                  alt="Union Icon"
                  className="w-full h-full object-contain filter grayscale"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
