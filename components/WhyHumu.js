import React from "react";
import Title from "./Title";
import Why from "./Why";
import Image from "next/image";
const WhyHumu = () => {
  return (
    <section className="relative z-20">
      <Why className="hidden overlow-hidden lg:block" />
      <div className="absolute  left-[1.25rem] top-0 md:top-60 md:left-10 lg:top-72 xl:top-[30rem] 2xl:top-[42rem]   2xl:left-[5.5rem] flex flex-col md:flex-row w-[90%] gap-6 lg:gap-14 xl:gap-32 2xl:gap-96 mx-auto">
        <div className=" xl:-mt-24">
          <Title text="why Humu" />
          <h2 className="font-bold text-[34px] lg:w-[490px] lg:text-5xl text-[#000000] pb-4 xl:pb-2;">
            Available features on the platform.
          </h2>
          <div className="grid md:grid-cols-2 gap-2  2xl:gap-8 md:w-[425px] lg:w-[510px] xl:mt-40 xl:w-[500px] 2xl:w-[1064px]">
            <div className="rounded-[32px] flex   bg-[#BCD2FF] p-3.5 2xl:p-6 md:px-2 md:py-4 lg:text-center min-h-[140px] xl:min-h-[190px] 2xl:h-[390px]">
              <div className="items-start">
                <div className="flex gap-2 text-xl font-extrabold md:mx-auto w-fit items-center 2xl:mb-4 xl:mt-4 2xl:mt-16">
                  <Image
                    className="w-3.5 h-3.5 2xl:w-6 2xl:h-6"
                    src="/images/chat.png"
                    width={14}
                    height={14}
                    alt="chat"
                  />
                  <h4 className="2xl:w-[211px] font-extrabold 2xl:text-3xl">
                    Chat for free
                  </h4>
                </div>
                <p className="lg:text-[16px] 2xl:text-[28px] 2xl:w-fit 2xl:mx-auto">
                  It&rsquo;s always FREE to see profiles, match, chat &amp;
                  marry on Muzz.
                </p>
              </div>
            </div>
            <div className="rounded-[32px] flex bg-[#BCD2FF] p-3.5 2xl:p-6 md:p-4 min-h-[140px] lg:text-center">
              <div className="self-center">
                <div className="flex gap-2 font-extrabold md:mx-auto text-2xl lg:text-[25px]  2xl:mb-4 w-fit items-center xl:mt-4 2xl:mt-16">
                  <Image
                    className="w-3.5 h-3.5 2xl:w-6 2xl:h-6"
                    src="/images/videoCall.png"
                    width={14}
                    height={14}
                    alt="videoCall"
                  />
                  <h4 className="md:text-[19px] 2xl:w-[260px] 2xl:text-3xl">
                    Free video calling
                  </h4>
                </div>
                <p className="lg:pb-12 2xl:w-fit 2xl:mx-auto 2xl:text-[26px] ">
                  You decide who you can call and you never have to share your
                  phone number.
                </p>
              </div>
            </div>
            <div className="rounded-[32px] bg-[#BCD2FF] p-3.5 2xl:p-6 md:p-4 lg:text-center min-h-[140px] xl:min-h-[190px]">
              <div className="flex gap-2 font-extrabold md:mx-auto lg:text-[21px] 2xl:mb-4  w-[211px] 2xl:w-fit items-center xl:mt-4 2xl:mt-16">
                <Image
                  className="w-3.5 h-3.5 2xl:w-6 2xl:h-6"
                  src="/images/privacy.png"
                  width={14}
                  height={14}
                  alt="privacy"
                />
                <h4 className="xl:w-[260px] text-2xl md:text-xl 2xl:text-3xl ">
                  Complete privacy
                </h4>
              </div>
              <p className="lg:text-[16px] 2xl:w-fit 2xl:mx-auto md:text-xl 2xl:text-[26px]">
                Keep your photos hidden and use a nickname to remain anonymous
                to friends and family
              </p>
            </div>
            <div className="rounded-[32px] flex bg-[#BCD2FF] p-3.5 2xl:p-6 md:p-2 lg:text-center lg:text-[20px] min-h-[140px] 2xl:h-[390px]">
              <div className="">
                <div className="flex gap-[0.4rem] md:pt-[0.5rem] font-extrabold md:mx-auto  xl:w-[211px]  2xl:w-fit 2xl:mb-4 items-center xl:mt-4 2xl:mt-16">
                  <Image
                    className="w-3.5 h-3.5 2xl:w-6 2xl:h-6"
                    width={14}
                    height={14}
                    src="/images/profile.png"
                    alt="profile"
                  />
                  <h4 className="w-fit grow xl:w-[300px] text-2xl md:text-base 2xl:text-3xl">
                    Voice & video profile
                  </h4>
                </div>
                <p className="lg:text-[16px] lg:pb-16 flex-wrap 2xl:w-fit 2xl:mx-auto 2xl:text-[26px]">
                  Show off your personality and stand out from the cro by adding
                  Voice & Video intros to your profile
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="-p-[5rem] md:[280px]">
          <Image
            className="md:mt-36 md:w-[205] md:h-[350] lg:w-[280px] xl:w-[510px] xl:h-[710px] 2xl:w-[710px] 2xl:h-[1100px] m-auto md:ml-auto"
            src="/images/phone.png"
            width={190}
            height={190}
            alt="phone"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyHumu;
