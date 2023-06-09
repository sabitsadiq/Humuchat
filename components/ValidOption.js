import React from "react";
import { FaStar } from "react-icons/fa";
import Title from "./Title";
const ValidOption = () => {
  return (
    <section className="bg-[#EDF3FF] z-30 mt-[5%] lg:mt-[-2rem] xl:mt-0 2xl:-mt-16">
      <div className="w-[90%] mx-auto pt-12 pb-10 2xl:py-28">
        <Title text="Valid opinions" />
        <h1 className="font-bold text-5xl text-[#000000] pb-4 xl:pb-2  2xl:w-[700px]">
          What our member say.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:pt-16 2xl:flex flex-cols-4 gap-4 mx-auto text-center 2xl:text-3xl">
          <div className="w-[218px] mx-auto py-6 2xl:py-20">
            <h1 className="text-[#000000]  text-2xl font-semibold">
              Sade thomas
            </h1>
            <p className="my-4 lg:pb-8 lg:my-3 text-xl font-normal">
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
          <div className="w-[218px] mx-auto py-6 2xl:py-20">
            <h1 className="text-[#000000] text-2xl font-semibold">
              Sade thomas
            </h1>
            <p className="my-4 lg:my-4 text-xl font-normal">
              It&apos;s a beautiful place to meet women in a halal manner&rdquo;
            </p>
            <span className="flex items-center justify-center gap-2">
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
            </span>
          </div>
          <div className="w-[218px] mx-auto py-6 2xl:py-20">
            <h1 className="text-[#000000] text-2xl font-semibold">
              Sade thomas
            </h1>
            <p className="my-4 text-xl font-normal">
              &ldquo;It&apos;s a beautiful place to meet women in a halal
              manner&rdquo;
            </p>
            <span className="flex items-center justify-center gap-2">
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
              <FaStar color="#FFCE31" />
            </span>
          </div>
          <div className="max-w-[218px] mx-auto py-6 2xl:py-20">
            <h1 className="text-[#000000] text-2xl font-semibold">
              Sade thomas
            </h1>
            <p className="lg:mb-6 md:mt-4 lg:my-4  text-xl font-normal">
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
