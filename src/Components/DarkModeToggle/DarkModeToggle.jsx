import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeProvider/ThemeContext";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:scale-105 transition duration-300">
      {darkMode === false ? (
        <FaSun className="text-yellow-500 w-6 h-6" />
      ) : (
        <FaMoon className="text-gray-100 w-6 h-6" />
      )}
    </button>
  );
};

export default DarkModeToggle;