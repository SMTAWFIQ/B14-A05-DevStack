import logo from "./Header_Section/logo-text.png";

const Footer = () => {
  return (
    <footer>
      <div className="border border-gray-100 mt-8">
        <div className="container mx-auto md:grid md:grid-cols-5 mt-5  gap-8 py-15 text-[20px]">
          {/* 1st part */}
          {/* Dev stack */}
          <div className="flex flex-col items-center text-center md:col-span-2 md:items-start md:text-left ">
            <img src={logo} alt="Logo" className="h-12" />
            <p className="my-4 text-gray-500">
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>
            <div className="flex gap-4 font-semibold text-gray-600">
              <a href="">GitHub</a>
              <a href="">Twitter</a>
              <a href="">LinkedIn</a>
            </div>
          </div>

          {/* 2nd part */}
          <div className="hidden md:col-span-3 md:flex md:justify-between">
            {/* PRODUCT */}
            <div>
              <h2 className="font-bold text-[18px] text-gray-700">PRODUCT</h2>
              <div className="flex flex-col gap-2 mt-5 text-[17px] text-gray-500">
                <a href="">Home</a>
                <a href="">Technologies</a>
                <a href="">Projects</a>
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <h2 className="font-bold text-[18px] text-gray-700">COMPANY</h2>

              <div className="flex flex-col gap-2 mt-5 text-[17px] text-gray-500">
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Careers</a>
              </div>
            </div>

            {/* LEGAL */}

            <div>
              <h2 className="font-bold text-[18px] text-gray-700">LEGAL</h2>

              <div className="flex flex-col gap-2 mt-5 text-[17px] text-gray-500">
                <a href="">Privacy Policy</a>
                <a href="">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex justify-between  pb-5 text-gray-400  items-center text-[16px]">
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
