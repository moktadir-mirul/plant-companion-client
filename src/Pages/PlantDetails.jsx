import React, { useEffect } from "react";
import { Link, useLoaderData, useParams } from "react-router";

const PlantDetails = () => {
  const { id } = useParams();
  const plant = useLoaderData();
  useEffect(() => {
    document.title = "Details | Plant Companion";
  }, []);

  if (plant?._id != id) {
    return (
      <div className="w-full dark:bg-gray-700 py-10 px-4 text-green-800 dark:text-green-500">
        <div className="text-center space-y-5">
          <h1 className="text-5xl font-bold play py-5">No Plant Found!!</h1>
          <p className="text-lg font-medium text-green-800 dark:text-green-500">
            No Plant found with this details.
          </p>
        </div>
        <div className="flex justify-center pb-5 mt-5">
          <Link to={"/allplants"}>
            <button className="cursor-pointer my-2 px-10 py-3 rounded-sm bg-green-800 hover:bg-green-950 duration-200 text-white font-bold text-xl">
              View All Plant
            </button>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="dark:bg-gray-700">
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-green-50 dark:bg-gray-300 rounded-2xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-all">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info Section */}
          <div className="p-6 md:w-1/2 flex flex-col justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-green-700">
                {plant.plantName}
              </h2>
              <p className="text-sm text-gray-500 capitalize mb-2">
                {plant.category}
              </p>
              <p className="text-gray-700 mb-4">{plant.description}</p>

              <ul className="space-y-1 text-sm text-gray-600 capitalize">
                <li>
                  <strong>Care Level:</strong> {plant.carelevel}
                </li>
                <li>
                  <strong>Watering Frequency:</strong> {plant.watering}
                </li>
                <li>
                  <strong>Last Watered:</strong> {plant.lastwatering}
                </li>
                <li>
                  <strong>Next Watering:</strong> {plant.nexttwatering}
                </li>
                <li>
                  <strong>Health Status:</strong>{" "}
                  <span className="capitalize">{plant.healthStat}</span>
                </li>
              </ul>
            </div>

            {/* User Section */}
            <div className="mt-4">
              <p className="text-sm text-gray-500">Added by:</p>
              <p className="text-sm font-medium text-gray-800">
                {plant.userName}
              </p>
              <p className="text-sm text-gray-600">{plant.userEmail}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;
