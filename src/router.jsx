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
import DeleteAccount from "./components/DeleteAccount";
import VerifyAccount from "./components/VerifyAccount";
import SignUpPage from "./components/sign-up";
import ConfirmPersonalInfo from "./components/Personalnform";
import VerificationPage from "./components/VerificationPage";
import SelectMethodPage from "./components/SelectMethod";
import LoginPage from "./components/LoginPage";
import EmailVerificationPage from "./components/EmailVerificationPage";
import PhoneLoginPage from "./components/PhoneLoginPage";
import PasswordResetPage from "./components/PasswordResetPage";
import MedicationSelector from "./components/MedicationSelector";
import Dashboard from "./components/Dashboard";
import OrderPage from "./components/OrderPage";
import PatientInfoForm from "./components/PatientInfoForm.jsx";
import CheckoutPage from "./components/CheckoutPage.jsx";
import BagCheckoutPage from "./components/BagCheckoutPage.jsx";
import AddressPage from "./components/AddressPage.jsx";
import DateTimePicker from "./components/DateTimePicker.jsx";
import ProfilePage from "./components/ProfilePage.jsx";
import MedicalInfoPage from "./components/MedicalInfo.jsx";
import SettingsPage from "./components/SettingsPage.jsx";
import DeliveryPage from "./components/DeliveryPage.jsx";
import InvitePage from "./components/InvitePage.jsx";
import EssentialsPage from "./components/EssentialsPage.jsx";
import ChatInterface from "./components/ChatInterface.jsx";

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
    path: "/delete-account",
    element: <DeleteAccount />,
  },
  {
    path: "/verify-account",
    element: <VerifyAccount />,
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
  {
    path: "/sign-up",
    element: <SignUpPage />,
  },
  {
    path: "/Personalnform",
    element: <ConfirmPersonalInfo />,
  },
  {
    path: "/VerificationPage",
    element: <VerificationPage />,
  },
  {
    path: "/SelectMethod",
    element: <SelectMethodPage />,
  },
  {
    path: "/EmailVerificationPage",
    element: <EmailVerificationPage />,
  },
  {
    path: "/LoginPage",
    element: <LoginPage />,
  },
  {
    path: "/PasswordResetPage",
    element: <PasswordResetPage />,
  },
  {
    path: "/PhoneLoginPage",
    element: <PhoneLoginPage />,
  },
  {
    path: "/MedicationSelector",
    element: <MedicationSelector />,
  },
  {
    path: "/Dashboard",
    element: <Dashboard />,
  },
  {
    path: "/Orderpage",
    element: <OrderPage />,
  },
  {
    path: "/PatientInfoForm",
    element: <PatientInfoForm />,
  },
  {
    path: "/CheckoutPage",
    element: <CheckoutPage />,
  },
  {
    path: "/BagCheckoutPage",
    element: <BagCheckoutPage />,
  },
  {
    path: "/AddressPage",
    element: <AddressPage />,
  },
  {
    path: "/DateTimePicker",
    element: <DateTimePicker />,
  },
  {
    path: "/ProfilePage",
    element: <ProfilePage />,
  },
  {
    path: "/MedicalInfoPage",
    element: <MedicalInfoPage />,
  },
  {
    path: "/SettingsPage",
    element: <SettingsPage />,
  },
  {
    path: "/DeliveryPage",
    element: <DeliveryPage />,
  },
  {
    path: "/InvitePage",
    element: <InvitePage />,
  },
  {
    path: "/EssentialsPage",
    element: <EssentialsPage />,
  },
  {
    path: "/ChatInterface",
    element: <ChatInterface />,
  },
  
]);

export default router;
