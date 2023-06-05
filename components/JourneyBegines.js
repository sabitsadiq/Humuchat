import React from "react";
import Title from "./Title";
import Heading from "./Heading";
import Image from "next/image";
const JourneyBegines = () => {
  return (
    <section className="relative bg-cover bg-center">
      <Image
        src="/images/Rectangle-10.png"
        className="hidden md:block w-full h-[670px] xl:h-[890px]  2xl:h-[1500px]"
        width={760}
        height={710}
        alt="rectangle-10"
      />
      <div className="hidden md:block absolute top-16 left-10 2xl:left-24 w-[90%] mx-auto  mb:pb-[12rem]">
        <div className="sm:pb-2">
          <Title text="Journey begins" />
          <h2 className="font-bold text-[34px] lg:text-4xl xl:text-5xl 2xl:text-6xl text-[#000000] pb-4 xl:p-2;">
            Meet your dream partner
          </h2>
        </div>
        <div className="grid grid-cols-2 xl:gap-20 md:gap-8 2xl:gap-40 mt-4 xl:mt-16">
          <div className="flex flex-nowrap relative w-full">
            <div className="flex w-full h-full z-10 flex-row gap-[4%] ">
              <div className="w-[48%]">
                <Image
                  className="w-full h-full"
                  src="/images/Rectangle-11.png"
                  width={180}
                  height={180}
                  alt="rectanlge-11"
                />
              </div>
              <div className="w-[48%]">
                <Image
                  className="w-full h-full"
                  src="/images/Rectangle-12.png"
                  width={180}
                  height={180}
                  alt="rectangle-12"
                />
              </div>
            </div>
            <Image
              className=" block absolute top-[18%] left-[10%] w-[calc(100%-10%)] h-[calc(100%-15%)]"
              src="/images/shadow.png"
              width={288}
              height={256}
              alt="shadow"
            />
          </div>
          <div className="flex flex-row">
            <div className="self-center md:self-start md:pt-4">
              <div className="xl:w-[65%] 2xl:w-9/12">
                <h1 className="font-bold text-[34px] lg:text-4xl xl:text-4xl 2xl:text-8xl text-[#000000] pb-8 xl:pb-2 2xl:mb-6">
                  Your perfect Match is just a dm away.
                </h1>
                <p className="xl:text-2xl 2xl:mb-6">
                  Lorem ipsum dolor sit amet consectetur. Sodales tellus lorem
                  suspendisse rhoncus venenatis nisl magna scelerisque. Morbi
                  tincidunt urna neque neque.
                </p>
              </div>

              <button className="flex px-12 py-2 2xl:px-24 2xl:py-6 border-none text-[20px] 2xl:text-3xl 2xl:mt-8 leading-[26.6px] rounded-[32px] items-center bg-[#042F88] text-[#fff] mt-6 mb-8 hover:bg-[#fff] hover:text-[#042F88] hover:ring-[#042F88] ring-1">
                Find Now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* content for mobile and tablet view start */}
      <div className="w-[90%] mx-auto md:hidden">
        <div className="sm:pb-2">
          <Title text="Journey begins" />
          <Heading text="Meet your dream partner" />
        </div>
        <div className="grid grid-cols-1  gap-4 mt-4">
          <div className="flex flex-col gap-8">
            <Image
              className="w-full h-full"
              src="/images/Rectangle-11.png"
              width={250}
              height={250}
              alt="rectangle-11"
            />
            <Image
              className="w-full h-full"
              src="/images/Rectangle-12.png"
              width={250}
              height={250}
              alt="rectangle-12"
            />
          </div>
          <div className="w-[90%]">
            <Heading text="Your perfect Match is just a dm away." />
            <p>
              Lorem ipsum dolor sit amet consectetur. Sodales tellus lorem
              suspendisse rhoncus venenatis nisl magna scelerisque. Morbi
              tincidunt urna neque neque.
            </p>
            <button className="flex px-12 py-2 border-none text-[20px] leading-[26.6px] rounded-[32px] items-center bg-[#042F88] text-[#fff] mt-6 mb-8 hover:bg-[#fff] hover:text-[black] hover:ring-[#042F88] ring-1">
              button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneyBegines;
