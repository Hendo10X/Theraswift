import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import Button from "./button";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const makeNavBarSticky = () => {
    if (window !== undefined)
      window.scrollY > 500 ? setIsSticky(true) : setIsSticky(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", makeNavBarSticky);
    return () => {
      window.removeEventListener("scroll", makeNavBarSticky);
    };
  });

  return (
    <div
      className={`bg-white py-4 font-poppins px-5 lg:px-[90px] top-0 left-0 right-0 ${
        isSticky ? "fixed" : "relative"
      } fixed z-20`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="">
          <Link to="/">
            <div className=" bg-white px-5 py-2">
              <img src={logo} alt="logo" className="lg:w-[150px] w-[130px]" />
            </div>
          </Link>
        </div>
        <div
          className={`lg:flex w-[70%] lg:justify-between items-center ${
            menu
              ? "flex flex-col fixed top-0 bottom-0 right-0 bg-white px-5 gap-10 pt-14"
              : "hidden"
          }`}
        >
          <div
            className={`flex capitalize gap-5 text-sm lg:w-[60%] justify-around font-semibold flex-col lg:flex-row w-full `}
          >
            <Link to="/how-it-works">
              <h1 className="cursor-pointer uppercase hover:underline">
                How it works
              </h1>
            </Link>

            <Link to="/doctors">
              <h1 className="cursor-pointer uppercase hover:underline">
                for doctors
              </h1>
            </Link>

            <Link to="/faq">
              <h1 className="cursor-pointer uppercase hover:underline">
                Questions
              </h1>
            </Link>
            <Link to="/about">
              <h1 className="cursor-pointer uppercase hover:underline">
                About us
              </h1>
            </Link>
          </div>

          <div className="flex lg:flex-row flex-col gap-5 text-sm w-full lg:w-auto">
            <Link to="/download">
              <Button variant="outlined" color="black">
                LOG IN
              </Button>
            </Link>

            <Link to="/check-if-we-deliver">
              <Button variant="filled" color="black">
                GET STARTED
              </Button>
            </Link>
          </div>
        </div>
        <div
          className={`lg:hidden p-3 flex flex-col items-end ${
            menu ? "fixed right-5" : "relative"
          }`}
          onClick={() => setMenu(!menu)}
        >
          <div
            className={`border w-8 border-black ${
              menu &&
              "rotate-[45deg] absolute top-4 !w-7 transition duration-500"
            }`}
          ></div>
          <div
            className={`border w-6 border-black my-1.5 transition duration-500 ${
              menu && "invisible transition duration-500"
            }`}
          ></div>
          <div
            className={`border w-7 border-black ${
              menu &&
              "-rotate-[45deg] absolute top-4 !w-7 transition duration-500"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
