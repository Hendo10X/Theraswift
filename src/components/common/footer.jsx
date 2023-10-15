import { Link } from "react-router-dom";
import playStore from "../../assets/playstore.svg";
import appStore from "../../assets/appstore.svg";
import pharmacy from "../../assets/pharmacy.svg";
import society from "../../assets/society.svg";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#131212] font-poppins px-5 lg:px-[90px] pt-20">
      <div className="container mx-auto flex flex-wrap justify-between mb-10 gap-5">
        <div className="text-white font-light">
          <h1 className="font-semibold text-xl mb-2">Services</h1>
          <ul className="text-sm lg:text-base">
            <li className="mb-2">Online pharmacy </li>

            <li className="mb-2">Telehealth</li>

            <li className="mb-2">Medwallet </li>

            <li className="mb-2">In-home care</li>

            <li className="mb-2">Providers</li>
          </ul>
        </div>

        <div className="text-white font-light">
          <h1 className="font-semibold text-xl mb-2">Company info</h1>
          <ul className="text-sm lg:text-base">
          <Link to="/how-it-works">
              <li className="mb-2">How it works</li>
            </Link>
            <Link to="/about">
              <li className="mb-2">About Us</li>
            </Link>
            <Link to="https://medium.com/@help_18335" target="_blank">
              <li className="mb-2">Blog </li>
            </Link>
            <Link to="/career">
              <li className="mb-2">Careers </li>
            </Link>
            <Link to="/faq">
              <li className="mb-2">FAQ </li>
            </Link>
          </ul>
        </div>

        <div className="text-white font-light">
          <h1 className="font-semibold text-xl mb-2">Try the app</h1>
          <div className="">
            <img
              src={playStore}
              alt="PlayStore"
              className="w-[200px] -ml-5 -mt-5 -mb-10"
            />
            <img src={appStore} alt="PlayStore" className="w-[200px] -ml-5" />
          </div>
        </div>

        <div className="text-white font-light">
          <h1 className="font-semibold text-xl mb-2">Socials</h1>
          <div className="flex justify-between w-[150px] text-xl">
            <Link
              to="https://www.facebook.com/profile.php?id=100092254039283&mibextid=LQQJ4d"
              target="_blank"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://instagram.com/theraswift.rx?igshid=ZGUzMzM3NWJiOQ=="
              target="_blank"
            >
              <FaInstagram />
            </Link>

            <Link
              to="https://twitter.com/TheraswiftRx?t=PctQFC_smVhB0j1PzrSz0A&s=09"
              target="_blank"
            >
              <FaTwitter />
            </Link>
          </div>

          <div className="flex items-end mt-10 ">
            <div className="flex flex-col items-center mr-10">
              <img src={pharmacy} alt="Pharmacy Council" className="mb-2" />
              <h1 className="font-normal text-sm lg:text-base">
                PCN accredited
              </h1>
            </div>
            <div className="flex flex-col items-center">
              <img
                src={society}
                alt="Pharmaceutical Society"
                className="mb-2"
              />
              <h1 className="font-normal text-sm lg:text-base">
                PSN accredited
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white py-10 text-center">
        <h1>Copyright © theraswift Rx {new Date().getFullYear()}</h1>
      </div>
    </div>
  );
};

export default Footer;
