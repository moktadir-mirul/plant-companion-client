import { useContext, useState } from "react";
// import Sidebar from "../components/Sidebar";
// import StatusCards from "../components/StatusCards";
import { IoMenu } from "react-icons/io5";


// import { Menu } from "lucide-react";
import { NavLink, Outlet, useNavigate } from "react-router";
import Sidebar from "../Components/SideBar/Sidebar";
import { toast } from "react-toastify";
import { AuthContext } from "../Components/AuthProvider/AuthContext";
import DarkModeToggle from "../Components/DarkModeToggle/DarkModeToggle";

const DashBoard = () => {
    const {userSignOut} = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate()

    const handleLogout = () => {
      userSignOut()
        .then(() => {
          toast.success("User Logged Out Successfully!");
          navigate("/");
        })
        .catch((err) => {
          toast.error(err.message);
        });
    };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
        
      {/* Sidebar for md+ and slide-in for small screens */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main area */}
      <div className="flex-1 bg-green-50 dark:bg-gray-700">
        <div className="w-full h-16 flex items-center justify-center gap-3 bg-green-700 dark:bg-green-950 text-white dark:text-gray-200">
            <NavLink to={"/"}>Home</NavLink>
            <DarkModeToggle/>
            <button
                onClick={handleLogout}
                className="border-2 px-4 py-1 bg-white dark:bg-gray-200 rounded-md border-green-800 text-green-800 font-bold hover:bg-green-600 hover:text-white cursor-pointer duration-200"
              >
                Log Out
              </button>
        </div>
        {/* Mobile toggle button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="md:hidden mb-4 flex items-center text-green-700"
        >
          <IoMenu className="w-6 h-6 mr-2" />
          Dashboard
        </button>

        {/* Dashboard content */}
        {/* <StatusCards /> */}
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
