import React from "react";
import Title from "./Title";
import Why from "./Why";
import Image from "next/image";
const WhyHumu = () => {
  return (
    <section className="z-20 md:-mt-[45%] lg:-mt-[35%]">
      <Why className=" overlow-hidden md:block" />
      <div className="md:mt-[-47rem] mb-8 lg:mt-[-90%] md:flex-row w-[90%] gap-[10%] lg:gap-14 xl:gap-32 mx-auto">
        <div className="md:w-2/5 xl:w-1/4 xl:-mt-24">
          <Title text="why Humu" />
          <h2 className="font-bold text-4xl text-[#000000] pb-4">
            Available features on the platform.
          </h2>
        </div>
        <div className="md:flex gap-8 xl:gap-16">
          <div className="mb-8 w-full md:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-3/5 grid md:grid-cols-2 gap-4  2xl:gap-8 md:self-center">
            <div className="rounded-[32px]  bg-[#BCD2FF] p-3.5 2xl:p-6 md:py-4 xl:text-center w-full h-full">
              <div className="flex gap-2 text-xl font-extrabold items-center md:mx-auto xl:justify-center 2xl:mb-4 xl:mt-4 2xl:mt-16">
                <Image
                  className="w-3.5 h-3.5 2xl:w-6 2xl:h-6"
                  src="/images/chat.png"
                  width={14}
                  height={14}
                  alt="chat"
                />
                <h4 className="text-2xl font-semibold ">Chat for free</h4>
              </div>
              <p className="text-xl font-normal w-full h-full 2xl:mx-auto">
                It&rsquo;s always FREE to see profiles, match, chat &amp; marry
                on Muzz.
              </p>
            </div>
            <div className="rounded-[32px] bg-[#BCD2FF] p-3.5 2xl:p-6 md:p-4 w-full h-full">
              <div className="flex gap-2 font-extrabold  text-2xl lg:text-[25px] xl:mx-auto 2xl:mb-4 w-fit items-center xl:mt-4 2xl:mt-16">
                <Image
                  className="w-3.5 h-3.5 2xl:w-6 2xl:h-6"
                  src="/images/videoCall.png"
                  width={14}
                  height={14}
                  alt="videoCall"
                />
                <h4 className="text-2xl font-semibold">Free video calling</h4>
              </div>
              <p className="2xl:pb-0 2xl:mx-auto text-xl font-normal 2xl:text-center">
                You decide who you can call and you never have to share your
                phone number.
              </p>
            </div>
            <div className="rounded-[32px] bg-[#BCD2FF] p-3.5 2xl:p-6 md:p-4 xl:text-center   w-full h-fit">
              <div className="flex gap-2 font-extrabold md:mx-auto lg:text-[21px] xl:justify-center 2xl:mb-4 2xl:w-fit items-center xl:mt-4 2xl:mt-16">
                <Image
                  className="w-3.5 h-3.5 2xl:w-6 2xl:h-6"
                  src="/images/privacy.png"
                  width={14}
                  height={14}
                  alt="privacy"
                />
                <h4 className="text-2xl font-semibold">Complete privacy</h4>
              </div>
              <p className="2xl:mx-auto  text-xl font-normal">
                Keep your photos hidden and use a nickname to remain anonymous
                to friends and family
              </p>
            </div>
            <div className="rounded-[32px] bg-[#BCD2FF] p-3.5 md:p-2 xl:text-center w-full h-full">
              {/* <div className=""> */}
              <div className="flex gap-[0.4rem] md:pt-2 font-extrabold xl:justify-center md:mx-auto 2xl:w-fit 2xl:mb-4 items-center xl:mt-4 2xl:mt-16">
                <Image
                  className="w-3.5 h-3.5 2xl:w-6 2xl:h-6"
                  width={14}
                  height={14}
                  src="/images/profile.png"
                  alt="profile"
                />
                <h4 className="text-2xl font-semibold">
                  Voice & video profile
                </h4>
              </div>
              <p className="2xl:mx-auto text-xl font-normal">
                Show off your personality and stand out from the cro by adding
                Voice & Video intros to your profile
              </p>
              {/* </div> */}
            </div>
          </div>
          <div className="w-1/2 mx-auto md:w-1/5 lg:w-2/5 xl:w-1/2 2xl:w-2/5">
            <Image
              className="w-full lg:w-10/12 xl:w-3/4 2xl:w-full"
              src="/images/phone.png"
              width={190}
              height={190}
              alt="phone"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHumu;
