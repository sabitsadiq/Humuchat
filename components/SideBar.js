"use client";
import React from "react";
import Image from "next/image";
import { RiCloseFill } from "react-icons/ri";
import Link from "next/link";
const Sidebar = ({ isOpen, toggleSide }) => {
  return (
    <div
      className={`w-screen h-screen ${
        isOpen ? "fixed" : "hidden"
      } top-0 left-0 pl-4 bg-gray-500 z-30 grid text-white  justify-items-start items-start pt-8`}
    >
      <div className="absolute top-4 right-4 text-[24px]" onClick={toggleSide}>
        <RiCloseFill />
      </div>
      <Image
        className="absolute top-2 left-8 text-2xl"
        src="/images/humucare-logo.png"
        width={100}
        height={100}
        alt="logo"
      />
      <div className="flex flex-col gap-2 text-[18px] font-bold mt-8">
        <Link
          className="rounded-[32px] px-4 py-1 hover:bg-[#042F88] active:bg-violet-700 hover:text-white focus:outline-none"
          href="/"
        >
          About
        </Link>
        <Link
          className="rounded-[32px] px-4 py-1 hover:bg-[#042F88] active:bg-violet-700 hover:text-white focus:outline-none"
          href="/"
        >
          Features
        </Link>
        <Link
          className="rounded-[32px] px-4 py-1 hover:bg-[#042F88] active:bg-violet-700 hover:text-white focus:outline-none"
          href="/"
        >
          Reviews
        </Link>
      </div>
    </div>
  );
};
export default Sidebar;
