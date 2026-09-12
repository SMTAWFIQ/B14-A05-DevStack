import { useState } from "react";
import logo from "../assets/logo-text.png";

export default function Nav() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 bg-white shadow-sm z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <img src={logo} alt="Logo" className="h-13 w-50" />

        {/* Desktop menu only in big screen */}
        <div className="hidden md:flex gap-8 text-xl">
            <a href="">Home</a>
            <a href="">Technologies</a>
            <a href="">Projects</a>
            <a href="">About</a>
            <a href="">Contact</a>
        </div>

        {/* Desktop Sign In / Sign Up only in big screen */}
        <div className="hidden md:flex gap-2">
          <button className="text-gray-700 font-medium text-lg px-5 py-2 rounded-full hover:bg-gray-100">
            Sign In
          </button>
          <button className="bg-[#D91B7E] text-white font-medium text-lg px-5 py-2 rounded-full hover:opacity-90 shadow-md">
            Sign Up
          </button>
        </div>

        {/* Hamburger button for mobile */}
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
          <button className="bg-[#D91B7E] text-white font-medium px-5 py-2 rounded-full w-full">
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
}
