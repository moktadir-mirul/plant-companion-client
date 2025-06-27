
// import { X } from "lucide-react";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";

import { NavLink } from "react-router";
import { AuthContext } from "../AuthProvider/AuthContext";
import { RiPlantFill } from "react-icons/ri";

const Sidebar = ({ isOpen, onClose }) => {

    const {userInfo} = useContext(AuthContext)

  const links = [
    { path: "/allplants", label: "All Plants" },
    { path: "/addplant", label: "Add Plant" },
    { path: "/myplants", label: "My Plants" },
  ];

  return (
    <div className="bg-green-100 dark:bg-gray-700">
      {/* Overlay for small screens */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed md:static top-0 left-0 h-full w-64 bg-green-100 dark:bg-gray-700 shadow-md z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {/* Close btn for mobile */}
        <div className="flex items-center justify-between px-4 py-3 border-b md:hidden">
          {/* <h2 className="font-semibold text-lg">Dash</h2> */}
          <button onClick={onClose}>
            <RxCross2 className="w-5 h-5" />
          </button>
        </div>

        {/* User Info */}
        <div className="p-4 border-b flex flex-row md:flex-col items-center space-x-3 gap-3">
          <div>
            <img
            src={userInfo.photoURL}
            alt={userInfo.displayName}
            className="w-10 md:w-32 h-10 md:h-32 rounded-full"
          />
          </div>
          <div className="space-y-3 flex flex-col items-center justify-center">
            <h3 className="font-bold text-xl text-green-800 dark:text-gray-200">{userInfo.displayName}</h3>
            <p className="text-sm flex items-center gap-2 text-green-800 dark:text-gray-200">Plant Lover <RiPlantFill color="green" size={20}/></p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `block px-3 py-2 rounded hover:bg-green-100 text-green-800 dark:text-gray-200 ${
                  isActive ? "bg-green-200 font-medium" : ""
                }`
              }
              onClick={onClose} // Close sidebar on mobile when link clicked
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
