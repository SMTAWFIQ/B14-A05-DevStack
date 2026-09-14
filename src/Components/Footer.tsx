import logo from "./Header_Section/logo-text.png";
import { GoDotFill } from "react-icons/go";

const Footer = () => {
  return (
    <footer>
      <div className="border border-gray-200 mt-8">
        <div className="max-w-360 mx-auto px-4 sm:px-6 lg:px-8 md:grid md:grid-cols-5 mt-5  gap-2 py-15 text-[13px]">
          {/* 1st part */}
          {/* Dev stack */}
          <div className="flex flex-col items-center text-center md:col-span-2 md:items-start md:text-left ">
            <img src={logo} alt="Logo" className="h-10" />
            <p className="my-4 text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex items-center gap-4 font-semibold text-gray-600">
              <a href="">GitHub</a>
              <GoDotFill className="md:hidden" />
              <a href="">Twitter</a>
              <GoDotFill className="md:hidden"/>
              <a href="">LinkedIn</a>
            </div>
          </div>

          {/* 2nd part */}
          <div className="hidden md:col-span-3 md:flex md:gap-16 lg:gap-50">
            {/* PRODUCT */}
            <div>
              <h2 className="font-bold text-[13px] text-gray-700">PRODUCT</h2>
              <div className="flex flex-col gap-2 mt-5 text-[11px] text-gray-500">
                <a href="">Home</a>
                <a href="">Technologies</a>
                <a href="">Projects</a>
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <h2 className="font-bold text-[13px] text-gray-700">COMPANY</h2>

              <div className="flex flex-col gap-2 mt-5 text-[11px] text-gray-500">
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Careers</a>
              </div>
            </div>

            {/* LEGAL */}

            <div>
              <h2 className="font-bold text-[13px] text-gray-700">LEGAL</h2>

              <div className="flex flex-col gap-2 mt-5 text-[11px] text-gray-500">
                <a href="">Privacy Policy</a>
                <a href="">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-360 mx-auto flex justify-between px-4 sm:px-6 lg:px-8 pb-5 text-gray-400  items-center text-[10px]">
        <h6>© 2026 Dev Stack. All rights reserved.</h6>
        <div className="flex gap-4 ">
          <h6>Privacy</h6>
          <h6>Terms</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;