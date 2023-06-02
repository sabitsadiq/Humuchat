import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
const Navbar = ({ toggleSide }) => {
  return (
    <div className="w-[100%] fixed top-0 z-20 p-4 2xl:py-6">
      <div className="flex justify-between md:w-[95%] mx-auto">
        <div className="text-[24px] 2xl:text-4xl">
          <Image
            src="/images/humucare-logo.png"
            alt="logo"
            width={100}
            height={100}
          />
        </div>
        <div className="hidden md:flex gap-6 text-lg 2xl:text-4xl">
          <Link
            className="rounded-[32px] px-4 py-1 bg-white hover:bg-[#042F88] active:bg-violet-700 hover:text-white focus:outline-none focus:ring focus:ring-violet-300"
            href="/"
          >
            About
          </Link>
          <Link
            className="rounded-[32px] px-4 py-1 bg-white hover:bg-[#042F88] active:bg-violet-700 hover:text-white focus:outline-none focus:ring focus:ring-violet-300"
            href="/"
          >
            Features
          </Link>
          <Link
            className="rounded-[32px] px-4 py-1 bg-white hover:bg-[#042F88] active:bg-violet-700 hover:text-white focus:outline-none focus:ring focus:ring-violet-300"
            href="/"
          >
            Reviews
          </Link>
        </div>
        <a
          href="/"
          className="hidden md:flex px-4 py-1 2xl:px-8 2xl:py-4 2xl:font-bold 2xl:text-2xl border-none text-[20px] leading-[26.6px] rounded-[32px] items-center bg-[#042F88] text-[#fff] hover:bg-[#fff] hover:text-[black] hover:ring-[#042F88] ring-1"
        >
          Sign Up
        </a>
        <div className="md:hidden text-[24px] text-white" onClick={toggleSide}>
          <FiMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
