import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.svg";
import Button from "./button";


const linkList = [
  {
    id: 1,
    label: "For Providers",
    path: "/doctors",
  },
  {
    id: 2,
    label: "For Manufacturers",
    path: "/manufacturers",
  },
  {
    id: 3,
    label: "About Us",
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
  });

  const { pathname } = useLocation();
  const [title, setTitle] = useState("");

  useEffect(() => {
    switch (pathname) {      
      case "/doctors":
        setTitle("Doctors");
        break;
        case'/manufacturers':
        setTitle('For Manufacturers');
        break;
      case "/faq":
        setTitle("FAQs");
        break;
      case "/about":
        setTitle("About Us");
        break;
      default:
        setTitle("/");
        break;
    }
  }, []);

  return (
    <div
      className={`bg-white py-4 font-poppins px-5 xl:px-[90px] top-0 left-0 right-0 ${
        isSticky ? "fixed" : "relative"
      } fixed z-20`}
    >
      <div className="max-w-[92vw] mx-auto">
      <div className="flex items-center w-full justify-between">
        <div className="">
          <Link to="/">
            <div className=" bg-white px-5 py-2">
              <img src={logo} alt="logo" className="lg:w-[150px] w-[130px]"/>
            </div>
          </Link>
        </div>
        <div
          className={`lg:flex min-w-[70%] lg:justify-between items-center ${
            menu
              ? "flex flex-col fixed top-0 bottom-0 right-0 bg-white px-5 gap-10 pt-14"
              : "hidden"
          }`}
        >
       
          <div className="flex flex-col items-center justify-center pb-5 pt-8">
            <ul className="flex flex-col lg:flex-row gap-10 px-8 py-4 bg-primary-100 rounded-full whitespace-nowrap ">
              {linkList.map((link) => (
                  <li
                      key={link.id}
                      onClick={() => setTitle(link.label)}
                      className={`hover:text-green-500 text-md uppercase font-semibold ${
                          pathname === link.path &&
                          "text-green-500 border-b-2 border-green-500"
                      }`}
                  >
                    <Link to={link.path}>{link.label}</Link>
                  </li>
              ))}
            </ul>
          </div>

          <div className="flex lg:flex-row flex-col items-center lg:items-start gap-5 text-sm w-full lg:w-auto ">
            <div className="flex flex-col gap-10 lg:flex-row">
            <Link className="whitespace-nowrap" to="/download">
              <Button variant="outlined" color="black">
                LOG IN
              </Button>
            </Link>

            <Link className="whitespace-nowrap" to="/check-if-we-deliver">
              <Button variant="filled" color="black">
                GET STARTED
              </Button>
            </Link>
            </div>
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
    </div>
  );
};

export default Navbar;
