import React from "react";
import subsPlant from "../../assets/subsImage.jpg";
import { toast } from "react-toastify";

const Subscribe = () => {
  return (
    <div className=" w-11/12 mx-auto flex flex-col lg:flex-row-reverse justify-between items-center gap-10 rounded-xl">
      <div className="flex-1">
        <img src={subsPlant} alt="Random Plant Image" />
      </div>
      <div className="flex-1 space-y-6 flex flex-col justify-start lg:justify-center items-center lg:items-start text-center lg:text-left">
        <h1 className="text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-green-900 dark:from-green-400 to-lime-500">
          Get Plantation News!
        </h1>
        <p className="text-xl font-normal dark:text-gray-400 text-black">
          Subscribe by email and get latest journal on new plant, plant health
          related tips, specialist comments on different plant issue,plant
          selling discount and many more!
        </p>
        <form
        className="space-y-6 w-full"
        onSubmit={(e) => {
          e.preventDefault();
            toast("You have subscribed our newsletter.");
        }}>
          <input
          type="email"
          name="subsEmail"
          placeholder="Enter Email"
          className="h-20 bg-green-50 dark:bg-gray-500 dark:placeholder:text-gray-100 rounded-lg indent-8 placeholder:text-[#9a9a9a] placeholder:font-sora placeholder:text-xl w-11/12"
          required
        />{" "}
        <br />
          <input 
          type="submit"
          value="Subscribe"
          className="text-xl lg:text-2xl text-white font-normal bg-green-950 dark:hover:bg-gray-300 hover:bg-white px-8 py-2 rounded-lg hover:text-green-950 hover:border-2 hover:border-green-950 duration-200 cursor-pointer">
          </input>
        </form>
      </div>
    </div>
  );
};

export default Subscribe;
