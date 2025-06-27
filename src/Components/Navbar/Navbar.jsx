import React, { useContext, useEffect, useRef, useState } from "react";
import plantLogo from "../../assets/plant-logo.png";
import { Link, NavLink, useNavigate } from "react-router";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { AuthContext } from "../AuthProvider/AuthContext";
import { toast } from "react-toastify";
import { FaUserCircle } from "react-icons/fa";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from "react-tooltip";
import { animate } from "motion";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { userInfo, userSignOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const leftNav = useRef();
  const rightNav = useRef();
  const middleNav = useRef();
  const sLeftNav = useRef();
  const sRightNav = useRef();
  const tNav = useRef();
  const bTNav = useRef()
  useEffect(() => {
        animate(
      leftNav.current,
      { x: [200, 0], opacity: [0, 1] },
      { duration: 0.9, easing: "ease-out" }
    );
    animate(rightNav.current,
      { x: [-200, 0], opacity: [0, 1] },
      { duration: 0.9, easing: "ease-out" }
    );
    animate(tNav.current,
      { x: [-200, 0], opacity: [0, 1] },
      { duration: 0.9, easing: "ease-out" }
    );
    animate(bTNav.current,
      { x: [-200, 0], opacity: [0, 1] },
      { duration: 0.9, easing: "ease-out" }
    );
    animate(middleNav.current,
      { y: [-200, 0], opacity: [0, 1] },
      { duration: 0.9, easing: "ease-out" }
    );
    animate(
      sLeftNav.current,
      { x: [200, 0], opacity: [0, 1] },
      { duration: 0.5, easing: "ease-out" }
    );
    animate(sRightNav.current,
      { x: [-200, 0], opacity: [0, 1] },
      { duration: 0.5, easing: "ease-out" }
    );
  }, [])
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
  const handleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="sticky top-0 z-50 w-full bg-green-700 dark:bg-green-800 ">
      {/* For Large devices */}
      <div className="w-11/12 mx-auto hidden lg:flex justify-between items-center py-2">
        <div ref={leftNav} className="flex items-center gap-1">
          <div className="p-2 w-16 h-16 bg-white dark:bg-gray-300 rounded-full">
            <img
              className="w-14 h-14"
              src={plantLogo}
              alt="Plant Companion Logo"
            />
          </div>
          <h1 className="bebas text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-gray-100 dark:from-gray-200 to-green-200 dark:to-lime-400">
            Plant Companion
          </h1>
        </div>
        <div ref={middleNav} className="list-none flex gap-6 font-bold text-white dark:text-gray-200">
          
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/allplants"}>All Plants</NavLink>
          </li>
          <li>
            <NavLink to={"/aboutus"}>About Us</NavLink>
          </li>
          {
            userInfo && <li>
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </li>
          }
        </div>

        <div ref={rightNav} className="flex gap-3 items-center">
          <div ref={bTNav} >
            <DarkModeToggle/>
          </div>
          {userInfo ? (
            <div className="flex gap-2 flex-col lg:flex-row items-center">
              {userInfo.photoURL ? (
                <div className="flex flex-col gap-1 justify-center items-center">
                  <img
                    className="cursor-pointer w-14 h-14 rounded-full ring-2 ring-green-800"
                    onClick={() => navigate("/myprofile")}
                    src={userInfo.photoURL}
                    alt=""
                    data-tooltip-id="my-tooltip" 
                    data-tooltip-content={userInfo.displayName}
                  />
                  <Tooltip id="my-tooltip" style={{ backgroundColor: "darkgreen", color: "#fff", fontWeight: "bold" }} place="left" className="z-20"/>
                </div>
              ) : (
                <div className="flex flex-col gap-1 justify-center items-center">
                  <FaUserCircle
                    className="cursor-pointer"
                    onClick={() => navigate("/myprofile")}
                    size={35}
                    color="darkgreen"
                    data-tooltip-id="my-tooltip" 
                    data-tooltip-content={userInfo.displayName}
                  />
                </div>
              )}
              <button
                onClick={handleLogout}
                className="border-2 px-4 py-1 bg-white dark:bg-gray-200 rounded-md border-green-800 text-green-800 font-bold hover:bg-green-600 hover:text-white cursor-pointer duration-200"
              >
                Log Out
              </button>
            </div>
          ) : (
            <>
              <Link to={"/login"}>
                <button className="border-2 px-5 py-2 bg-white dark:bg-gray-200 rounded-md border-green-800 text-green-800 font-bold hover:bg-green-600 hover:text-white cursor-pointer duration-200">
                  Log In
                </button>
              </Link>
              <Link to={"/register"}>
                <button className="border-2 px-5 py-2 bg-white dark:bg-gray-200 rounded-md border-green-800 text-green-800 font-bold hover:bg-green-600 hover:text-white cursor-pointer duration-200">
                  Register
                </button>
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Menu for small devices */}
      <div className="w-11/12 mx-auto py-1 flex justify-between items-center lg:hidden">
        <div ref={sLeftNav} className="flex items-center gap-1">
          <div className="p-2 w-14 h-14 bg-white dark:bg-gray-300 rounded-full">
            <img
              className="w-12 h-12"
              src={plantLogo}
              alt="Plant Companion Logo"
            />
          </div>
          <h1 className="bebas text-xl md:text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-green-200 dark:from-gray-200 dark:to-lime-400">
            Plant Companion
          </h1>
        </div>
          <div ref={tNav}>
            <DarkModeToggle />
          </div>

        <div ref={sRightNav} className="relative z-10" onClick={handleMenu}>
          {showMenu ? (
            <RxCross2 color="white" size={25}></RxCross2>
          ) : (
            <IoMenu color="white" size={25}></IoMenu>
          )}
          <div
            className={`p-3 absolute rounded-md text-sm right-0 ${
              showMenu ? "" : "-top-200"
            } bg-green-50 dark:bg-gray-300 list-none text-green-800 text-center`}
          >
            <li className="p-2 border-b-2 border-gray-400">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="p-2 border-b-2 border-gray-400">
              <NavLink to={"/allplants"}>All Plants</NavLink>
            </li>
            <li className="p-2 border-b-2 border-gray-400">
              <NavLink to={"/aboutus"}>About Us</NavLink>
            </li>
            {
              userInfo && <li className="p-2 border-b-2 border-gray-400">
              <NavLink to={"/dashboard"}>Dashboard</NavLink>
            </li>
            }
            <div className="py-2 flex flex-col justify-center gap-3">
              {userInfo ? (
                <div className="flex gap-2 flex-col lg:flex-row items-center">
                  {userInfo.photoURL ? (
                    <div className="flex flex-col gap-1 justify-center items-center">
                      <img
                        className="cursor-pointer w-14 h-14 rounded-full ring-2 ring-green-800"
                        onClick={() => navigate("/myprofile")}
                        src={userInfo.photoURL}
                        title={userInfo.displayName}
                        alt=""
                        data-tooltip-id="my-tooltip" 
                        data-tooltip-content={userInfo.displayName}
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col gap-1 justify-center items-center">
                      <FaUserCircle
                        className="cursor-pointer"
                        onClick={() => navigate("/myprofile")}
                        size={35}
                        color="darkgreen"
                        data-tooltip-id="my-tooltip" 
                        data-tooltip-content={userInfo.displayName}
                      />
                    </div>
                  )}
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm border border-green-800 text-green-800 hover:bg-green-800 hover:text-white duration-200"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <>
                  <Link to={"/login"}>
                    <button className="btn border-2 border-green-800 text-green-800 font-bold hover:bg-green-800 hover:text-white">
                      Log In
                    </button>
                  </Link>
                  <Link to={"/register"}>
                    <button className="btn border-2 border-green-800 text-green-800 font-bold hover:bg-green-800 hover:text-white">
                      Register
                    </button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
