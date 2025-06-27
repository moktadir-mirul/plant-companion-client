import { Outlet } from "react-router";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { ToastContainer } from "react-toastify";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
        <ToastContainer autoClose={3000} />
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
