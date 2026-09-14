import { useState } from "react";
import logo from "./logo-text.png";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white border border-gray-100 z-50">
      <div className="max-w-360 mx-auto grid grid-cols-3 items-center px-4 sm:px-6 lg:px-16 py-3 ">
        <button
          className="md:hidden justify-self-start text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <img
          src={logo}
          alt="Logo"
          className="invisible sm:visible h-8 w-auto sm:h-9 md:h-9 justify-self-center md:justify-self-start"
        />

        <div className="hidden md:flex gap-2 lg:gap-8 text-base lg:text-[16px] justify-self-center">
          <a className="text-brand font-semibold" href="">
            Home
          </a>
          <a href="">Technologies</a>
          <a href="">Projects</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>

        <div className="flex items-center justify-self-end gap-1">
          <button className="text-gray-700 font-medium text-[11px] sm:text-sm md:text-[14px] lg:text-[14px] px-2 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300 cursor-pointer">
            Sign In
          </button>

          <button className="bg-brand text-white font-medium text-[11px] sm:text-sm md:text-[14px] lg:text-[14px] px-2 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-sm md:shadow-md cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-3 pb-3">
          <a href="">Home</a>
          <a href="">Technologies</a>
          <a href="">Projects</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </div>
      )}
    </nav>
  );
}