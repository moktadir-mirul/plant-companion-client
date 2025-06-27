import React, { useContext } from "react";
import { useLoaderData } from "react-router";
import { AuthContext } from "../AuthProvider/AuthContext";

const StatusCards = () => {
  const { userInfo } = useContext(AuthContext);
  const plantsData = useLoaderData();
  const today = new Date().toISOString().split("T")[0];

  const totalPlants = plantsData.length;

  const wateringToday = plantsData.filter(
    (plant) => plant.nexttwatering === today
  ).length;

  const next3Days = plantsData.filter((plant) => {
    if (!plant.nexttwatering) return false;
    const nextDate = new Date(plant.nexttwatering);
    const now = new Date();
    const diff = (nextDate - now) / (1000 * 60 * 60 * 24); // days
    return diff > 0 && diff <= 3;
  }).length;

  const myPlants = plantsData.filter(
    (plant) => plant.userEmail === userInfo.email
  ).length;

  const newThisWeek = plantsData.filter((plant) => {
    const addedDate = new Date(plant._id?.toString().slice(0, 8) * 1000);
    const now = new Date();
    const diff = (now - addedDate) / (1000 * 60 * 60 * 24);
    return diff <= 7;
  }).length;

  return (
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card title="🌿 Total Plants" value={totalPlants} color="green" />
      <Card title="💧 Watering Today" value={wateringToday} color="blue" />
      <Card title="⏳ Water in Next 3 Days" value={next3Days} color="purple" />
      <Card title="🌱 My Plants" value={myPlants} color="orange" />
      <Card title="🌱 New This Week" value={newThisWeek} color="teal" />
    </div>
  );
};

const Card = ({ title, value, color }) => (
  <div className={`bg-white dark:bg-gray-300 p-4 rounded shadow text-center`}>
    <h3 className="text-md font-semibold">{title}</h3>
    <p className={`text-2xl text-${color}-600 font-bold mt-1`}>{value}</p>
  </div>
);

export default StatusCards;
