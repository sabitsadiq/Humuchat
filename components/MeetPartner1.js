import Image from "next/image";
import React from "react";

const MeetPartner1 = () => {
  return (
    <section>
      <div className="flex justify-around z-30 mt-8 2xl:my-16 w-[90%] mx-auto md:w-full">
        <div>
          <Image
            src="/images/love-1.png"
            className="hidden md:block w-14 h-14 xl:w-24 xl:h-24 2xl:w-[8.5rem] 2xl:h-[8.5rem]"
            width={56}
            height={56}
            alt="love-1s"
          />
          <Image
            src="/images/love-1.png"
            className="hidden md:block  w-20 h-20 xl:w-36 xl:h-36 -mt-8 2xl:w-[12rem] 2xl:h-[12rem]"
            width={80}
            height={80}
            alt="love-1"
          />
        </div>
        <div className="md:w-[60%]">
          <h1 className="mt-2 font-semibold text-4xl lg:text-5xl md:text-center text-[#000000] pb-4 xl:pb-2">
            Meet your dream partner
          </h1>
          <p className="text-center w-full lg:w-3/4 mx-auto font-normal lg:text-2xl 2xl:my-8">
            Lorem ipsum dolor sit amet consectetur. Sodales tellus lorem
            suspendisse rhoncus venenatis nisl magna scelerisque. Morbi
            tincidunt urna neque neque.
          </p>
          <button className=" flex px-14 py-2 md:z-30 mx-auto ring-[#042F88] ring-1 text-2xl font-semibold leading-[26.6px] rounded-[32px] items-center  align-center text-[#042F88] mt-6 xl:mt-[2.5rem] mb-8 2xl:px-28 2xl:py-7 hover:bg-[#042F88] hover:text-white">
            Find Now
          </button>
        </div>
        <div>
          <Image
            src="/images/love-2s.png"
            className="hidden md:block  w-14 h-14 xl:w-24 xl:h-24 2xl:w-[8.5rem] 2xl:h-[8.5rem]"
            width={56}
            height={56}
            alt="love-2s"
          />
          <Image
            src="/images/love-2.png"
            className="hidden md:block w-20 h-20 xl:w-36 xl:h-36 -mt-8 2xl:w-[12rem] 2xl:h-[12rem]"
            width={80}
            height={80}
            alt="love-2"
          />
        </div>
      </div>
      <div className="hidden md:flex w-full -mt-32 gap-[60%]">
        <div className="w-[20%] xl:w-[30%] mt-24 overflow-hidden">
          <Image
            src="/images/love-1.png"
            className="w-96 h-64 -ml-10"
            width={200}
            height={200}
          />
        </div>
        <div className="w-[20%] xl:w-[30%] mt-24 overflow-hidden">
          <Image
            src="/images/love-2.png"
            className="w-96 h-64 ml-10 text-gradient-to-r from-white to-[#042F88]"
            width={200}
            height={200}
          />
        </div>
      </div>
    </section>
  );
};

export default MeetPartner1;
