import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../AuthProvider/AuthContext";
import FallBack from "../FallBack/FallBack";

const NewPlants = () => {
  const { allPlants, setAllPlants } = useContext(AuthContext);
  const [newPlantsLoading, setNewPlantsLoading] = useState(true);
  useEffect(() => {
    fetch(`https://plantcompanionserver.vercel.app/plants`)
    .then(res => res.json())
    .then(data => {
      setAllPlants(data);
      setNewPlantsLoading(false);
    })
  }, [newPlantsLoading, setAllPlants])

  const sortedPlants = allPlants.slice().sort((a, b) => {
    const getTimestamp = (id) => parseInt(id.slice(0, 8), 16) * 1000;
    return getTimestamp(b._id) - getTimestamp(a._id);
  });

  if(newPlantsLoading) {
    return <FallBack></FallBack>
  }

  if (sortedPlants.length < 6) {
    return (
      <div>
        <h1 className="text-center py-10 text-6xl text-transparent bg-clip-text bg-gradient-to-br from-green-900 dark:from-green-400 dark:to-lime-500 to-lime-500 play font-bold">
          New Plants
        </h1>
        <div className="w-11/12 mx-auto pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {sortedPlants?.map((plant) => (
            <div
              key={plant._id}
              className="bg-green-50 dark:bg-gray-400 rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl"
            >
              <img
                src={plant.image}
                alt={plant.plantName}
                className="w-full h-96 md:h-60 lg:h-72 xl:h-80 object-cover object-center"
              />
              <div className="p-4 flex flex-col items-center">
                <h2 className="text-xl font-semibold text-green-800 dark:text-black">
                  {plant.plantName}
                </h2>
                <p className="text-sm text-gray-500 dark:text-black capitalize">
                  Category : <strong>{plant.category}</strong>
                </p>
                <Link to={`/plantdetails/${plant._id}`}>
                  <button className="mt-4 px-8 py-2 bg-green-800 text-white rounded-lg hover:bg-green-950 transition">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text-center py-10 text-6xl text-transparent bg-clip-text bg-gradient-to-br from-green-900 dark:from-green-400 dark:to-lime-500 to-lime-500 play font-bold">
        New Plants
      </h1>
      <div className="w-11/12 mx-auto pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {sortedPlants.slice(0, 8).map((plant) => (
          <div
            key={plant._id}
            className="bg-green-50 dark:bg-gray-400 rounded-2xl shadow-md overflow-hidden transition hover:shadow-xl"
          >
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-96 md:h-60 lg:h-72 xl:h-80 object-cover object-center"
            />
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-xl font-semibold dark:text-black text-green-800">
                {plant.plantName}
              </h2>
              <p className="text-sm dark:text-black text-gray-500 capitalize">
                Category : <strong>{plant.category}</strong>
              </p>
              <Link to={`/plantdetails/${plant._id}`}>
                <button className="mt-4 px-8 py-2 bg-green-800 text-white rounded-lg hover:bg-green-950  transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPlants;
