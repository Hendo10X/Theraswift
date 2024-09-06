import { RouterProvider } from "react-router-dom";
import router from "./router";
import Footer from "./components/common/footer";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpPage from "./components/sign-up";
import ConfirmPersonalInfo from "./components/Personalnform";


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
