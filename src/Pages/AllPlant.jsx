import React, {
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { Link } from "react-router";
import { AuthContext } from "../Components/AuthProvider/AuthContext";
import FallBack from "../Components/FallBack/FallBack";

const AllPlant = () => {
  const { allPlants, setAllPlants } = useContext(AuthContext);
  const [plantsLoading, setPlantsLoading] = useState(true);

  const fetchPlants = useCallback(
    async (sortBy = "") => {
      let url = "https://plantcompanionserver.vercel.app/plants";
      if (sortBy) {
        url += `?sortBy=${sortBy}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setAllPlants(data);
      setPlantsLoading(false);
    },
    [setAllPlants]
  );
  useEffect(() => {
    fetchPlants();
    document.title = "All Plants | Plant Companion";
  }, [fetchPlants]);

  if (plantsLoading) {
    return <FallBack></FallBack>;
  }

  return (
    <div className="dark:bg-gray-700">
      <div className="flex flex-col items-center pb-5">
        <h1
          className="text-center py-5 text-6xl play text-transparent bg-clip-text bg-gradient-to-br from-green-600 to-green-400 play font-bold"
        >
          All Plants
        </h1>
        <button
          className="mt-4 px-8 py-2 bg-green-800 text-white rounded-lg hover:bg-green-950 transition"
          onClick={() => fetchPlants("nexttwatering")}
        >
          Sort Plants by Next Watering Date
        </button>
      </div>

      {/* For small devices */}
      <div className="md:hidden px-6 pb-10 max-w-5xl mx-auto">
        <div className="overflow-x-auto rounded-xl shadow-lg">
          <table className="min-w-full bg-white text-base text-left text-gray-700">
            <thead className="bg-green-600 text-white uppercase text-xs tracking-wider">
              <tr>
                <th className="px-6 py-4">Image</th>
                <th className="px-6 py-4">Plant Info</th>
                <th className="px-6 py-4">Action</th>
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
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-base font-semibold text-green-900">
                        {plant.plantName}
                      </span>
                      <span className="text-sm text-green-700 capitalize">
                        {plant.category}
                      </span>
                      <span className="text-base text-green-700 font-bold">
                        Next Watering Date: {plant.nexttwatering}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Link to={`/plantdetails/${plant._id}`}>
                      <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-900 transition cursor-pointer text-sm">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* For large devices */}
      <div
        className="hidden md:block px-6 pt-6 pb-12 max-w-7xl mx-auto"
      >
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
                    <Link to={`/plantdetails/${plant._id}`}>
                      <button className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-800 font-bold text-sm transition cursor-pointer">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllPlant;
