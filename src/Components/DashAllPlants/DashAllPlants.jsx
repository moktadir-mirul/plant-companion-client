import React, { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthContext";
import FallBack from "../FallBack/FallBack";

const DashAllPlant = () => {
  const { allPlants, setAllPlants } = useContext(AuthContext);
  const [plantsLoading, setPlantsLoading] = useState(true);

  const fetchPlants = useCallback(async () => {
    let url = "https://plantcompanionserver.vercel.app/plants";
    const response = await fetch(url);
    const data = await response.json();
    setAllPlants(data);
    setPlantsLoading(false);
  }, [setAllPlants]);
  useEffect(() => {
    fetchPlants();
  }, [fetchPlants]);

  if (plantsLoading) {
    return <FallBack></FallBack>;
  }

  return (
    <div className="px-2 md:px-6 pb-12 max-w-7xl mx-auto">
      <h1 className="text-center pb-5 text-6xl text-transparent bg-clip-text bg-gradient-to-br from-green-900 dark:from-green-400 dark:to-lime-500 to-lime-500 play font-bold">
        All Plants
      </h1>
      <div className="overflow-x-auto rounded-2xl shadow-lg">
        <table className="min-w-full mx-auto bg-white text-sm text-center text-gray-600">
          <thead className="bg-green-600 text-white text-lg">
            <tr>
              <th className="px-6 py-2 text-left">Image</th>
              <th className="px-6 py-2">Plant Name</th>
              <th className="px-6 py-2">Category</th>
              <th className="px-6 py-2">
                Next Watering <br /> Date
              </th>
              <th className="px-6 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {allPlants?.map((plant, idx) => (
              <tr
                key={plant._id}
                className={`hover:bg-green-100 transition ${
                  idx % 2 === 0
                    ? "bg-white dark:bg-gray-300"
                    : "bg-gray-100 dark:bg-gray-400"
                }`}
              >
                <td className="px-6 py-4">
                  <img
                    src={plant.image}
                    alt={plant.plantName}
                    className="w-24 h-20 object-cover rounded-xl"
                  />
                </td>
                <td className="px-6 py-4 font-bold text-xl text-green-900">
                  {plant.plantName}
                </td>
                <td className="px-6 py-4 font-medium text-green-700 text-lg capitalize">
                  {plant.category}
                </td>
                <td className="px-6 py-4 font-medium text-lg text-green-700">
                  {plant.nexttwatering}
                </td>
                <td className="px-6 py-4">
                  <Link to={`/dashboard/plantdetails/${plant._id}`}>
                    <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800 font-bold text-sm transition cursor-pointer">
                      See More
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashAllPlant;
