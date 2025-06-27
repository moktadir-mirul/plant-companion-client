import React, { useContext, useEffect, useRef } from "react";
import plantLogo from "../../assets/plantss-logo.png";
import { Link, NavLink } from "react-router";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaInstagram, FaPhoneAlt } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { CiYoutube } from "react-icons/ci";
import { ThemeContext } from "../../ThemeProvider/ThemeContext";
import { animate, inView } from "motion";
import { AuthContext } from "../AuthProvider/AuthContext";

const Footer = () => {
  const { userInfo } = useContext(AuthContext);
  const footerRef = useRef();
  useEffect(() => {
    inView(footerRef.current, () => {
      animate(
        footerRef.current,
        { y: [400, 0], opacity: [0, 1] },
        { duration: 1, easing: "ease-out" }
      );
    });
  }, []);
  const { darkMode } = useContext(ThemeContext);
  return (
    <div
      ref={footerRef}
      className="w-full bg-green-100 dark:bg-green-950 text-gray-300 pt-10 px-10 pb-2"
    >
      <div className="w-11/12 mx-auto flex gap-5 lg:gap-0 flex-col lg:flex-row justify-between items-center lg:items-start pb-5">
        <div className="flex-1 flex flex-col justify-center items-center gap-2">
          <div>
            <img className="h-16 w-16" src={plantLogo} alt="" />
          </div>
          <h1 className="bebas text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-green-900 dark:from-green-400 to-lime-500 text-center">
            Plant Companion
          </h1>
          <p className="text-green-900 dark:text-gray-300 text-center text-sm">
            Your go-to plant care tracker for healthier, happier plants. Stay
            connected and grow with us! make it long
          </p>
        </div>
        <div className="flex-1 list-none flex flex-col items-center justify-center gap-5 text-green-950 dark:text-gray-300 font-bold">
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/allplants"}>All Plants</NavLink>
          </li>
          <li>
            <NavLink to={"/aboutus"}>About Us</NavLink>
          </li>
          {userInfo && (
            <li>
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
          )}
        </div>
        <div className="flex-1 text-green-950 dark:text-gray-300 text-center space-y-2">
          <h1 className="py-1 font-bold text-xl">Contact Us</h1>
          <h1 className="flex flex-col md:flex-row gap-2 items-center justify-center">
            <MdEmail size={30} color="darkgreen"></MdEmail>{" "}
            info@plantcompanion.com
          </h1>
          <h1 className="flex flex-col md:flex-row gap-2 items-center justify-center">
            <FaPhoneAlt size={25} color="darkgreen" /> +88-01711-140802
          </h1>
          <h1 className="flex flex-col md:flex-row gap-2 items-center justify-center text-center">
            <IoLocation size={30} color="darkgreen" />
            Uttara, Dhaka, Bangladesh
          </h1>
        </div>
      </div>
      <div>
        <hr className="text-green-800 dark:text-gray-300" />
        <div className="text-green-950 dark:text-gray-300 py-5">
          <h1 className="text-center font-bold text-green-800 dark:text-gray-300">
            Connect With Us
          </h1>
          <div className="flex justify-center items-center  gap-3 py-2">
            <Link to={"https://www.facebook.com/mirulkhan"} target="_blank">
              <FaFacebook size={25} color={darkMode ? "gray" : "darkgreen"} />
            </Link>
            <Link to={"https://x.com/"} target="_blank">
              <FaXTwitter size={25} color={darkMode ? "gray" : "darkgreen"} />
            </Link>
            <Link to={"https://www.instagram.com/mirulkhan/"} target="_blank">
              <FaInstagram size={25} color={darkMode ? "gray" : "darkgreen"} />
            </Link>
            <Link
              to={"https://www.youtube.com/@mirulmoktadirkhan2127"}
              target="_blank"
            >
              <CiYoutube size={30} color={darkMode ? "gray" : "darkgreen"} />
            </Link>
          </div>
          <h1 className="text-center text-sm dark:text-gray-300 text-green-800">
            © 2025 Plant Companion. All rights reserved.{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
