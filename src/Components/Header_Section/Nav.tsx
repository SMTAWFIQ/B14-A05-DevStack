import { useState } from "react";
import logo from "./logo-text.png";

export default function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white border border-gray-100 z-50">
      <div className="container mx-auto grid grid-cols-3 items-center px-4 py-3">
        <button className="md:hidden order-1 text-2xl justify-self-start" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>

        <img src={logo} alt="Logo" className="h-8 md:h-13 md:w-50  order-2 md:order-1 justify-self-center md:justify-self-start" />

        <div className="hidden md:flex md:order-2 gap-8 text-xl justify-self-center">
            <a href="">Home</a>
            <a href="">Technologies</a>
            <a href="">Projects</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>

        <div className="order-3 flex gap-2 justify-self-end items-center">
          <button className="text-gray-700 font-medium text-sm md:text-lg px-3 md:px-5 py-1.5 md:py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
            Sign In
          </button>
          <button className="bg-[#D91B7E] text-white font-medium text-sm md:text-lg px-3 md:px-5 py-1.5 md:py-2 rounded-full hover:opacity-90 transition-opacity duration-200 shadow-md cursor-pointer">
            Sign Up
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
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