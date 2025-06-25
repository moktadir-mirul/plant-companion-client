import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthContext";
import { toast } from "react-toastify";
import { animate, inView } from "motion";

const AddPlant = () => {

  const {userInfo, allPlants, setAllPlants} = useContext(AuthContext);
  const [plantCategory, setPlantCategory] = useState("");
  const [careLevel, setCareLevel] = useState("");
  const [status, setStatus] = useState("");
const addHd = useRef();
const formAdd = useRef();
  useEffect(() => {
        inView(addHd.current, () => {
      animate(addHd.current,
        { y: [-400, 0], opacity: [0, 1] },
        { duration: 0.7, easing: "ease-out" }
      )
    });
    inView(formAdd.current, () => {
      animate(formAdd.current,
        { y: [400, 0], opacity: [0, 1] },
        { duration: 0.7, easing: "ease-out" }
      )
    });
      document.title = "Add Plants | Plant Companion"
    }, [])

  const handleAddPlant = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newPlant = Object.fromEntries(formData.entries());

    fetch("https://plantcompanionserver.vercel.app/plants", {
      method: "POST",
      headers: {
        "content-type" : "application/json"
      },
      body: JSON.stringify(newPlant)
    })
    .then((res) => res.json())
    .then(data => {
      if(data.insertedId) {
        newPlant._id = data.insertedId;
        const newAllPlants = [...allPlants, newPlant];
        setAllPlants(newAllPlants);
        form.reset();
        toast.success("Plant added successfully!")
      }
    })
    .catch(err => toast.error(err.message))
  }
  return (
    <div className="bg-[url(./assets/addp-img.jpeg)] p-10 log-in bg-no-repeat bg-cover w-full mx-auto">
      <div className="flex justify-center py-5">
        <div className="card form-bg w-full shrink-0 shadow-xl">
          <div className="card-body">
            <h1 ref={addHd} className="play pb-2 arap text-center font-bold text-4xl text-transparent bg-clip-text bg-gradient-to-br from-green-800 to-green-950">
              Add New Plant
            </h1>
            <form ref={formAdd} onSubmit={handleAddPlant}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* name input */}
                <div className="fieldset">
                  <label className="label text-lg text-green-900">
                    Plant Name
                  </label>
                  <input
                    name="plantName"
                    type="text"
                    className="input text-green-900 w-full text-lg"
                    placeholder="Name"
                    required
                  />
                </div>

                {/* image url */}
                <div className="fieldset">
                  <label className="label text-lg text-green-900">
                    Plant Image URL
                  </label>
                  <input
                    name="image"
                    type="text"
                    className="input text-green-900 w-full text-lg"
                    placeholder="Plant Image URL"
                    required
                  />
                </div>

                {/* category */}
                <div className="fieldset relative">
                  <label
                    htmlFor="cat-options"
                    className="label text-lg text-green-900"
                  >
                    Select Plant Category
                  </label>
                  <select
                    id="cat-options"
                    name="category"
                    value={plantCategory}
                    onChange={(e) => setPlantCategory(e.target.value)}
                    className="input text-green-900 w-full text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="" disabled>
                      Select One
                    </option>
                    <option value="Orchid">Orchid</option>
                    <option value="flower">Flower</option>
                    <option value="fern">Fern</option>
                    <option value="succulent">Succulent</option>
                    <option value="Bonsai">Bonsai</option>
                  </select>
                  <span className="absolute right-3 top-3/4 transform -translate-y-1/2 text-green-900 pointer-events-none">
                    &#9660;
                  </span>
                </div>

                {/* Care level */}
                <div className="fieldset relative">
                  <label
                    htmlFor="care-options"
                    className="label text-lg text-green-900"
                  >
                    Care Level
                  </label>
                  <select
                    id="care-options"
                    name="carelevel"
                    value={careLevel}
                    onChange={(e) => setCareLevel(e.target.value)}
                    className="input text-green-900 w-full text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="" disabled>
                      Select One
                    </option>
                    <option value="easy">Easy</option>
                    <option value="moderate">Moderate</option>
                    <option value="Difficult">Difficult</option>
                  </select>
                  <span className="absolute right-3 top-3/4 transform -translate-y-1/2 text-green-900 pointer-events-none">
                    &#9660;
                  </span>
                </div>

                {/* health status */}
                <div className="fieldset relative">
                  <label
                    htmlFor="health-options"
                    className="label text-lg text-green-900"
                  >
                    Health Status
                  </label>
                  <select
                    id="health-options"
                    name="healthStat"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="input text-green-900 w-full text-lg border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="" disabled>
                      Select Status
                    </option>

                    <option value="healthy">Healthy</option>
                    <option value="needs-watering">Needs Watering</option>
                    <option value="Weakening">Weakening</option>
                    <option value="diseased">Diseased</option>
                  </select>
                  <span className="absolute right-3 top-3/4 transform -translate-y-1/2 text-green-900 pointer-events-none">
                    &#9660;
                  </span>
                </div>

                {/* watering */}
                <div className="fieldset">
                  <label className="label text-lg text-green-900">
                    Watering Frequency
                  </label>
                  <input
                    name="watering"
                    type="text"
                    className="input text-green-900 w-full text-lg"
                    placeholder="Watering Frequency (e.g everyday)"
                    required
                  />
                </div>

                {/* last watering */}
                <div className="fieldset">
                  <label className="label text-lg text-green-900">
                    Last Watering Date
                  </label>
                  <input
                    type="date"
                    name="lastwatering"
                    className="input text-green-900 w-full text-lg"
                    required
                  />
                </div>

                {/* next watering */}
                <div className="fieldset">
                  <label className="label text-lg text-green-900">
                    Next watering Date
                  </label>
                  <input
                    type="date"
                    name="nexttwatering"
                    className="input text-green-900 w-full text-lg"
                    required
                  />
                </div>
              </div>
              {/* Grid input ends */}

              {/* Description */}
              <div className="fieldset">
                <label className="label text-lg text-green-900">
                  Description
                </label>
                <input
                  name="description"
                  type="text"
                  className="input text-green-900 w-full text-lg"
                  placeholder="Plant Description"
                  required
                />
              </div>

              {/* User name */}
              <div className="fieldset">
                <label className="label text-lg text-green-900">
                  User Name
                </label>
                <input
                  name="userName"
                  type="text"
                  readOnly
                  value={userInfo.displayName}
                  className="input text-green-900 w-full text-lg"
                  placeholder="Plant Description"
                  required
                />
              </div>

              {/* User Email */}
              <div className="fieldset">
                <label className="label text-lg text-green-900">
                  User Email
                </label>
                <input
                  name="userEmail"
                  type="email"
                  readOnly
                  value={userInfo.email}
                  className="input text-green-900 w-full text-lg"
                  placeholder="Plant Description"
                  required
                />
              </div>

            {/* Input field ends */}

              <button
                type="submit"
                className="w-full btn bg-gradient-to-r from-green-900 to-green-600 border border-green-800 hover:bg-gradient-to-l hover:from-green-800 hover:to-green-600 text-white mt-4 text-lg"
              >
                Add New Plant
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPlant;
