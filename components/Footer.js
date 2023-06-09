import React from "react";
import Title from "./Title";
const Footer = () => {
  return (
    <section className="py-12 ">
      <div className="flex flex-col md:flex-row w-[90%] mx-auto 2xl:pt-32">
        <div className="md:w-[40%] my-auto text-[#000000] font-semibold text-5xl">
          HuMu
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-between font-normal text-sm">
          <div className="flex flex-col gap-2">
            <Title text="Get Started" />
            <p className="cursor-pointer">Partner with us</p>
            <p className="cursor-pointer">Actualizing SDG</p>
          </div>
          <div className="flex flex-col gap-2">
            <Title text="About Us" />
            <p className="cursor-pointer">meet the team</p>
            <p className="cursor-pointer">Privacy policy</p>
            <p className="cursor-pointer">Team And Condition</p>
          </div>
          <div className="flex flex-col gap-2">
            <Title text="Community" />
            <p className="cursor-pointer">Upcomming Event</p>
            <p className="cursor-pointer">Join Our Virtue Community</p>
          </div>
        </div>
      </div>
      <p className="mx-auto text-xs  py-8 2xl:pb-8 2xl:pt-14 w-fit font-normal cursor-pointer">
        © COPYRIGHT -HuMu 2023
      </p>
    </section>
  );
};

export default Footer;
