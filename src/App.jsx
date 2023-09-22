import { RouterProvider } from "react-router-dom";
import router from "./router";
import Footer from "./components/common/footer";



function App() {
  return (
    <>
    
      <RouterProvider router={router} />
    </>
  );
}

export default App;
