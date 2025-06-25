import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import ErrorImg from "../assets/err-404.jpg";
import { Link } from "react-router";

const Error = () => {
  return (
    <div>
      <div>
        <header>
          <Navbar></Navbar>
        </header>
      </div>
      <div className="">
        <img
          className="w-full lg:w-10/12 h-auto lg:h-96 mx-auto"
          src={ErrorImg}
          alt="error 404"
        />
      </div>
      <div className="flex justify-center items-center py-5">
        <Link to={"/"}>
          <button className="text-xl lg:text-2xl text-white font-normal bg-green-950 hover:bg-lime-800 px-8 py-2 rounded-lg duration-200 cursor-pointer">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
