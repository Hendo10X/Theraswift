import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import Button from "../common/button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Notifications from "../common/notifications";

const linkList = [
  {
    id: 1,
    label: "Users",
    path: "/users",
  },
  {
    id: 2,
    label: "Messages",
    path: "/message",
  },
  {
    id: 3,
    label: "Inventory",
    path: "/inventory",
  },
  {
    id: 4,
    label: "Dispense",
    path: "/dispense",
  },
  {
    id: 5,
    label: "Providers",
    path: "/doctors",
  },
];

const Layout = () => {
  const { pathname } = useLocation();
  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    switch (pathname) {
      case "/users":
        setTitle("Users");
        break;
      case "/message":
        setTitle("Messages");
        break;
      case "/inventory":
        setTitle("Inventory");
        break;
      case "/dispense":
        setTitle("Dispense");
        break;
      case "/doctors":
        setTitle("Providers");
        break;
      default:
        setTitle("Dashboard");
        break;
    }
  }, []);

  return (
    <>
      <header className="bg-primary-50 text-white py-5">
        <div className="w-[90%] mx-auto">
          <div className="flex justify-between">
            <figure className="flex items-center justify-center gap-2">
              <FaUser className="text-2xl" />
              <figcaption className="text-md font-bold">Admin</figcaption>
            </figure>

            <div className="flex items-center justify-center gap-5">
              <Notifications />

              <Button
                onClick={() => navigate("/logout")}
                variant="outlined"
                size="sm"
                colorScheme="light"
              >
                Sign out
              </Button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center pb-5 pt-8">
          <ul className="flex gap-10 px-8 py-4 bg-primary-100 rounded-full ">
            {linkList.map((link) => (
              <li
                key={link.id}
                onClick={() => setTitle(link.label)}
                className={`hover:text-green-500 text-sm font-semibold ${
                  pathname === link.path &&
                  "text-green-500 border-b-2 border-green-500"
                }`}
              >
                <Link to={link.path}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-[90%] mx-auto  pb-10">
          <h1 className="text-4xl  text-green-500">
            {/* <span className="text-primary-200 ">s/</span> */}
            <span className="font-semibold">{title}</span>
          </h1>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
