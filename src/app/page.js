import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen bg-gradient-to-l from-[#010101] to-[#4d4d4d] flex flex-col justify-center items-center gap-4 md:gap-[7.12px] p-4 md:p-0">
      {" "}
      <div className="w-full md:w-[1100px] h-auto md:h-[714.42px] relative">
        {" "}
        <div className="w-full md:w-[689px] h-auto md:h-[584.29px] absolute left-0 md:left-[-102px] top-[152.21px]" />{" "}
        <div className="absolute h-auto md:h-[542.02px] left-0 md:left-[396px] top-[86.21px] flex flex-col justify-start items-start md:items-end gap-3.5">
          {" "}
          <div className="self-stretch text-center md:text-right text-white text-[45px] md:text-[85.35px] font-bold font-['Signika']">
            {" "}
            Questionnaire{" "}
          </div>{" "}
          <div className="h-auto md:h-[423.02px] flex flex-col justify-start items-start gap-6">
            {" "}
            <div className="self-stretch p-6 md:p-8 bg-[#edb6d2] rounded-[34.92px] flex flex-col justify-center items-center gap-[7.28px]">
              {" "}
              <div className="w-full md:w-[376.12px]">
                {" "}
                <span className="text-black text-xl md:text-2xl font-normal font-['Source Sans Pro']">
                  {" "}
                  Welcome! <br />{" "}
                </span>{" "}
                <span className="text-black text-base font-normal font-['Source Sans Pro']">
                  {" "}
                  <br />{" "}
                </span>{" "}
                <span className="text-black text-base md:text-lg font-normal font-['Source Sans Pro']">
                  {" "}
                  We're excited to hear your thoughts, ideas, and insights.
                  Don't worry about right or wrong answers—just speak from the
                  heart. <br /> Your genuine feedback is invaluable to us!{" "}
                </span>{" "}
              </div>{" "}
            </div>{" "}
            <div className="self-stretch h-auto md:h-[90px] flex flex-col justify-start items-start gap-[30px]">
              {" "}
              <div className="self-stretch h-auto md:h-[90px] flex flex-col justify-center items-start gap-[9px]">
                {" "}
                <div className="text-white text-xl font-medium font-['Signika']">
                  {" "}
                  Email{" "}
                </div>{" "}
                <div className="self-stretch h-14 px-4 py-3 bg-white rounded-[28px] border border-[#cdcdcd] flex justify-start items-center gap-2.5">
                  {" "}
                  <div className="grow shrink basis-0 text-[#a2a2a2] text-sm font-normal font-['Signika']">
                    {" "}
                    Enter email address{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <Link href="/page2#startSurvey">
              <div className="self-stretch h-20 px-[35px] py-2 bg-[#bbe94a] rounded-[35px] flex justify-between items-center">
                <div className="text-black text-2xl font-bold font-['Signika']">
                  Start Survey
                </div>
              </div>
            </Link>{" "}
          </div>{" "}
        </div>{" "}
        <img className="mt-11" src="Union.png" alt="Placeholder" />{" "}
        <img
          className="w-full md:w-[564px] h-auto md:h-[466px] absolute left-0 md:left-[-86px] top-[120.21px] mix-blend-overlay"
          src="1stshoe.png"
          alt="Placeholder"
        />{" "}
        <img
          className="w-full md:w-[500px] h-[200px] md:h-[60px] absolute left-0 md:left-[-26px] top-[600.21px] mix-blend-overlay"
          src="Ellipse.png"
          alt="Placeholder"
        />{" "}
      </div>{" "}
    </div>
  );
}
