import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Terralogo.svg";

const linkList = [
  {
    id: 1,
    label: "Meds",
    path: "/meds",
  },
  {
    id: 2,
    label: "Weight loss",
    path: "/weight-loss",
  },
  {
    id: 3,
    label: "About us",
    path: "/about",
  },
];

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
  }, []);

  const { pathname } = useLocation();

  return (
    <div
      className={`bg-white py-4 px-5 xl:px-[90px] top-0 left-0 right-0 ${
        isSticky ? "fixed" : "relative"
      } z-20`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img src={logo} alt="logo" className="lg:w-[60px] w-[50px]" />
          </Link>

          <div className="hidden lg:flex items-center ml-9 space-x-8">
            {linkList.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                className={`text-md font-medium ${
                  pathname === link.path ? "text-black" : "text-gray-600"
                } hover:text-emerald-500`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex items-center space-x-5">
          <Link to="/LoginPage" className="text-gray-600 text-sm hover:text-emerald-500">
            Sign In
          </Link>
          <Link to="/check-if-we-deliver">
            <button className="px-6 py-2 rounded-full font-medium text-white bg-emerald-500 hover:bg-black transition duration-300">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {menu && (
        <div className="lg:hidden mt-4 bg-white">
          {linkList.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`block py-2 text-md font-medium ${
                pathname === link.path ? "text-black" : "text-gray-600"
              } hover:text-emerald-500`}
              onClick={() => setMenu(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/LoginPage"
            className="block py-2 text-sm text-gray-600 hover:text-emerald-500"
            onClick={() => setMenu(false)}
          >
            Sign In
          </Link>
          <Link
            to="/check-if-we-deliver"
            className="block py-2"
            onClick={() => setMenu(false)}
          >
            <button className="px-6 py-2 rounded-full font-medium text-white bg-emerald-500 hover:bg-black transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;