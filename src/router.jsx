import { createBrowserRouter } from "react-router-dom";

import Homepage from "./components/homepage";
import HowItWorks from "./components/howItWorks";
import Doctors from "./components/doctors";
import Faq from "./components/faq";
import About from "./components/about";
import Career from "./components/career";
import CheckIfWeDeliver from "./components/checkIfWeDeliver";
import DownloadApp from "./components/common/downloadApp";
import WaitList from "./components/waitlist";
import Manufacturer from "./components/manufacturers";
import Contact from "./components/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/how-it-works",
    element: <HowItWorks />,
  },
  {
    path: "/doctors",
    element: <Doctors />,
  },

  {
    path: "/manufacturers",
    element: <Manufacturer />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/faq",
    element: <Faq />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/career",
    element: <Career />,
  },
  {
    path: "/check-if-we-deliver",
    element: <CheckIfWeDeliver />,
  },
  {
    path: "/download",
    element: <DownloadApp />,
  },
  {
    path: "/join-waitlist",
    element: <WaitList />,
  },
]);

export default router;
