import { useState } from "react";
import logo from "./logo-text.png";

export default function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white border border-gray-100 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <img src={logo} alt="Logo" className="h-13 w-50" />

        <div className="hidden md:flex gap-8 text-xl">
            <a href="">Home</a>
            <a href="">Technologies</a>
            <a href="">Projects</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>

        <div className="hidden md:flex gap-2">
          <button className="text-gray-700 font-medium text-lg px-5 py-2 rounded-full hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
            Sign In
          </button>
          <button className="bg-[#D91B7E] text-white font-medium text-lg px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-200 shadow-md cursor-pointer">
            Sign Up
          </button>
        </div>

        <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 px-4 pb-4">
            <a href="">Home</a>
            <a href="">Technologies</a>
            <a href="">Projects</a>
            <a href="">About</a>
            <a href="">Contact</a>
          <button className="text-gray-700 font-medium px-5 py-2 rounded-full hover:bg-[#D91B7E] hover:text-white  transition-colors duration-200  cursor-pointer">
            Sign in
          </button>

          <button className="bg-[#D91B7E] text-white font-medium px-5 py-2 rounded-full hover:opacity-90 transition-opacity duration-200 shadow-md cursor-pointer">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}