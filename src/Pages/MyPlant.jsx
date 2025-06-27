import React, { useContext, useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from "../Components/AuthProvider/AuthContext";
import Swal from "sweetalert2";
import FallBack from "../Components/FallBack/FallBack";
import { useNavigate } from "react-router";

const MyPlant = () => {
  const { userInfo, allPlants, setAllPlants } = useContext(AuthContext);
  const [myPlantsLoading, setMyPlantsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://plantcompanionserver.vercel.app/plants")
      .then((res) => res.json())
      .then((data) => {
        setAllPlants(data);
        setMyPlantsLoading(false);
      });
    document.title = "My Plants | Plant Companion";
  }, [setAllPlants]);

  if (myPlantsLoading) {
    return <FallBack></FallBack>;
  }

  const plants = allPlants.filter(
    (plant) => plant.userEmail === userInfo.email
  );

  if (plants.length <= 0) {
    return (
      <div className="flex flex-col gap-10 py-10 dark:bg-gray-700 justify-center items-center">
        <h1 className="text-4xl text-center font-bold play dark:text-red-300 text-red-800 py-5">
          You haven't added any plant yet!
        </h1>
        <button
          className="mt-4 px-8 py-2 bg-green-800 text-white rounded-lg hover:bg-green-950 transition"
          onClick={() => navigate("/dashboard/addplant")}
        >
          Add Plant
        </button>
      </div>
    );
  }

  const handleDelete = (id, name) => {
    Swal.fire({
      title: `Are you sure you want to delete the plant ${name}?`,
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "red",
      cancelButtonColor: "darkgreen",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://plantcompanionserver.vercel.app/plants/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            if (data.deletedCount) {
              const remainingPlants = allPlants.filter(
                (plant) => plant._id !== id
              );
              setAllPlants(remainingPlants);
            }
          });
      }
    });
  };

  const handleUpdate = (id) => {
    navigate(`/dashboard/updateplant/${id}`);
  };

  return (
    <div className=" bg-green-50 dark:bg-gray-700 bg-[url('https://www.transparenttextures.com/patterns/green-dust-and-scratches.png')] bg-cover p-6">
      <h1 className="text-center py-5 text-6xl text-transparent bg-clip-text bg-gradient-to-br from-green-900 dark:from-green-600 dark:to-lime-600 to-lime-900 play font-bold">
        Plants of{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-green-600 dark:from-green-400 to-lime-600 play font-bold">
          {userInfo?.displayName}
        </span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {plants?.map((plant) => (
          <div
            key={plant._id}
            className="bg-white dark:bg-gray-300 rounded-2xl shadow-lg p-5 flex flex-col gap-5 hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={plant.image}
              alt={plant.plantName}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="flex-1 space-y-2">
              <h2 className="text-2xl font-bold text-green-700">
                {plant.plantName}
              </h2>
              <p className="text-sm text-gray-600">{plant.description}</p>
              <div className="text-sm text-gray-500">
                <p className="capitalize">
                  <strong>Category:</strong> {plant.category}
                </p>
                <p className="capitalize">
                  <strong>Care Level: </strong> {plant.carelevel}
                </p>
                <p className="capitalize">
                  <strong>Health:</strong> {plant.healthStat}
                </p>
                <p>
                  <strong>Watering:</strong> Last: {plant.lastwatering} | Next:{" "}
                  {plant.nexttwatering}
                </p>
                <p>
                  <strong>Frequency:</strong> {plant.watering}
                </p>
              </div>
              <div className="flex gap-3 pt-2">
                <button
                  onClick={() => handleUpdate(plant._id)}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-xl hover:bg-green-700"
                >
                  <FaEdit /> Update
                </button>
                <button
                  onClick={() => handleDelete(plant._id, plant.plantName)}
                  className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-xl hover:bg-red-600"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPlant;
