import React from "react";
import Image from "next/image";
const MeetPartner = () => {
  return (
    <section className="relative md:mt-4 md:-mb-12   2xl:mt-24 2xl:mb-16 pb-4 bg-cover bg-center">
      <Image
        src="/images/love-1.png"
        className="hidden md:block absolute left-10 lg:left-[6.5rem] xl:left-[12.5rem] top-[4rem] w-14 h-14 2xl:w-[8.5rem] 2xl:h-[8.5rem] 2xl:left-[21.5rem] bg-linear-gradient-custom-gradient"
        width={56}
        height={56}
        alt="love-1s"
      />
      <Image
        src="/images/love-1.png"
        className="hidden md:block absolute left-14 lg:left-[7.5rem] xl:left-[13.5rem] top-[7rem] w-20 h-20 xl:w-36 xl:h-36 2xl:w-[12rem] 2xl:h-[12rem] 2xl:left-[23.5rem] bg-linear-gradient-custom-gradient"
        width={80}
        height={80}
        alt="love-1"
      />
      <Image
        src="/images/love-2s.png"
        className="hidden md:block absolute right-14 top-[4rem] lg:right-[6.5rem] xl:right-[12.5rem] w-14 h-14 2xl:w-[8.5rem] 2xl:h-[8.5rem] 2xl:right-[21.5rem]"
        width={56}
        height={56}
        alt="love-2s"
      />
      <Image
        src="/images/love-2.png"
        className="hidden md:block absolute right-14 top-[7rem] lg:right-[7.5rem] xl:right-[13.5rem] w-20 h-20 2xl:w-[12rem] 2xl:h-[12rem] 2xl:right-[23.5rem]"
        width={80}
        height={80}
        alt="love-2"
      />
      <div className="hidden md:flex w-full absolute left-0 bottom-[-100%] lg:bottom-[-145%] xl:bottom-[-380%] gap-[60%] xl:gap-[60%]">
        <div className="w-[20%] xl:w-[30%] overflow-hidden">
          <Image
            src="/images/love-1.png"
            className="w-96 h-64 -ml-10"
            width={200}
            height={200}
          />
        </div>
        <div className="w-[20%] xl:w-[30%] overflow-hidden">
          <Image
            src="/images/love-2.png"
            className="w-96 h-64 ml-10 text-gradient-to-r from-white to-[#042F88]"
            width={200}
            height={200}
          />
        </div>
      </div>
      <div className="px-6   md:w-[60%] md:h-[200px] xl:h-[112px]  lg:w-[48%]  mx-auto lg:mt-8 lg:-mb-8 mb:pt-12 flex flex-col items-start md:center md:items-center">
        <h1 className="mt-2 font-bold text-[34px] lg:text-4xl xl:text-5xl text-[#000000] pb-4 xl:pb-2 2xl:text-7xl">
          Meet your dream partner
        </h1>
        <p className="sm:text-center xl:text-[20px] xl:w-[594px] 2xl:w-[743px] 2xl:text-4xl 2xl:my-8">
          Lorem ipsum dolor sit amet consectetur. Sodales tellus lorem
          suspendisse rhoncus venenatis nisl magna scelerisque. Morbi tincidunt
          urna neque neque.
        </p>
        <button className=" flex px-14 py-2 z-30 mx-auto ring-[#042F88] ring-1 text-2xl font-semibold leading-[26.6px] rounded-[32px] items-center  align-center text-[#042F88] mt-6 xl:mt-[2.5rem] mb-8 2xl:px-28 2xl:py-7 hover:bg-[#042F88] hover:text-white">
          Find Now
        </button>
      </div>
    </section>
  );
};

export default MeetPartner;
