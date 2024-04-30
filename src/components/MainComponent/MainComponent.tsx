import Image from "next/image";
import { useEffect, useState } from "react";

const MainComponent = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="h-4/5  relative">
      {isLargeScreen && (
        <div className="h-[650px] w-[630px] rounded-full bg-[#F8F8F8] absolute -top-80 -left-32 -z-50 "></div>
      )}
      <div>
        <div className={`w-full h-full z-50 font-bold px-2 flex flex-col items-center md:flex-row  md:justify-center ${isLargeScreen ? 'relative' : ''} `}>
          <div
            className={`w-full md:w-1/2 flex flex-col  ${
              !isLargeScreen ? "items-center" : "absolute top-5 left-16 pl-8"
            }`}
          >
            <p className="text-4xl md:text-5xl pb-2 ">Empowering Ideas</p>
            <div className="w-full md:w-full h-full flex flex-col items-center md:items-start">
              <div className="flex flex-row ">
                <p className="text-4xl md:text-5xl mr-2 text-[#3063E6]">
                  Transforming
                </p>
                <p className="text-4xl md:text-5xl">Businesses </p>
              </div>
              <div className="font-light text-xl px-4  pt-4 w-full text-[#777676] text-center md:text-3xl md:px-0 md:text-start">
                We excel at delivering top-tier IT solutions, establishing trust
                with each and every project, and fostering lasting relationships
                that grow with your organisation.
              </div>
              <div className="my-4">
                <button className="bg-[#18004C] text-white mt-2 font-normal px-4 py-2 rounded-3xl">
                  Book a free consultation
                </button>
              </div>
            </div>
          </div>
          {isLargeScreen ? (
            <div className="w-full md:w-1/2 h-72 md:h-full">
              <div className="absolute top-10 right-0 ">
                <Image
                  src={"/circle.svg"}
                  width={467}
                  height={462}
                  alt=""
                  className=""
                />
              </div>
            </div>
          ) : (
            <div className="w-full h-72 pr-2 pt-2 md:h-full flex flex-row justify-center">
              <div className="relative">
                <Image
                  src={"/circle.svg"}
                  width={320}
                  height={320}
                  alt=""
                  className=""
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
