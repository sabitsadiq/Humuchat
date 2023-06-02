import React from "react";
import { FaStar } from "react-icons/fa";
import Title from "./Title";
const ValidOption = () => {
  return (
    <section className="bg-[#EDF3FF] -mt-48 z-30  lg:-mt-40 xl:-mt-56 2xl:-mt-[26rem]">
      <div className="w-[90%] mx-auto pt-12 pb-10 2xl:py-28">
        <Title text="Valid opinions" />
        <h1 className="font-bold text-[34px] lg:text-4xl xl:text-5xl text-[#000000] pb-4 xl:pb-2 2xl:text-7xl 2xl:w-[700px]">
          What our member say.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:flex flex-cols-4 gap-4 mx-auto text-center 2xl:text-3xl">
          <div className="w-[218px] mx-auto py-6 2xl:w-[320px] 2xl:py-20">
            <h1 className="text-[#000000] text-3xl 2xl:text-5xl">
              Sade thomas
            </h1>
            <p className="my-4 md:pb-8 lg:my-3">
              &ldquo;Ideal and halal way to meet a potential spouse&rdquo;
            </p>
            <span className="flex items-center -p-6 justify-center gap-2">
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
            </span>
          </div>
          <div className="w-[218px] mx-auto py-6 2xl:w-[320px] 2xl:py-20">
            <h1 className="text-[#000000] text-3xl 2xl:text-5xl">
              Sade thomas
            </h1>
            <p className="my-4 lg:my-4">
              It&apos;s a beautiful place to meet women in a halal manner&rdquo;
            </p>
            <span className="flex items-center justify-center gap-2 lg:my-[2.5rem]">
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
            </span>
          </div>
          <div className="w-[218px] mx-auto py-6 2xl:w-[320px] 2xl:py-20">
            <h1 className="text-[#000000] text-3xl 2xl:text-5xl">
              Sade thomas
            </h1>
            <p className="my-4">
              &ldquo;It&apos;s a beautiful place to meet women in a halal
              manner&rdquo;
            </p>
            <span className="flex items-center justify-center gap-2 lg:my-[2.5rem]">
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
            </span>
          </div>
          <div className="max-w-[218px] mx-auto py-6 2xl:max-w-[320px] 2xl:py-20">
            <h1 className="text-[#000000] text-3xl 2xl:text-5xl">
              Sade thomas
            </h1>
            <p className="md:mb-6 md:mt-4 lg:my-4">
              &ldquo;I&apos;m falling in love with this app&rdquo;
            </p>
            <span className="flex items-center pt-6 justify-center gap-2">
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValidOption;
