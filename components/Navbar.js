import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
const Navbar = ({ toggleSide }) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`w-[100%] fixed top-0
      z-30 p-2 2xl:py-6 ${scrollPosition > 0 ? "bg-white" : "bg-none"}`}
    >
      <div className="flex justify-between md:w-[95%] mx-auto">
        <div className="text-[24px] 2xl:text-4xl">
          <Image
            src="/images/humucare-logo.png"
            alt="logo"
            width={80}
            height={80}
          />
        </div>
        <div className="hidden md:flex gap-6 text-lg 2xl:text-4xl">
          <Link
            className="flex self-center rounded-[32px] px-4 py-1 text-[#042F88] hover:bg-[rgb(4,47,136)] active:bg-violet-700 hover:text-white focus:outline-none focus:ring focus:ring-violet-300"
            href="/"
          >
            About
          </Link>
          <Link
            className="flex self-center rounded-[32px] px-4 py-1 text-[#042F88] hover:bg-[#042F88] active:bg-violet-700 hover:text-white focus:outline-none focus:ring focus:ring-violet-300"
            href="/"
          >
            Features
          </Link>
          <Link
            className="flex self-center rounded-[32px] px-4 py-1 text-[#042F88] hover:bg-[#042F88] active:bg-violet-700 hover:text-white focus:outline-none focus:ring focus:ring-violet-300"
            href="/"
          >
            Reviews
          </Link>
        </div>
        <a
          href="/"
          className="hidden md:flex self-center px-4 py-1 2xl:px-8 2xl:py-4 2xl:font-bold 2xl:text-2xl border-none text-[20px] leading-[26.6px] rounded-[32px] items-center bg-[#042F88] text-[#fff] hover:bg-[#fff] hover:text-[black] hover:ring-[#042F88] ring-1"
        >
          Sign Up
        </a>
        <div
          className="z-30 md:hidden text-[24px] text-white"
          onClick={toggleSide}
        >
          <FiMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
