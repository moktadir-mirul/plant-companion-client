import { animate, inView } from "motion";
import React, { useEffect, useRef } from "react";
// import { inView, animate } from 'motion';

const ClientCard = ({ client }) => {
  const { name, image_url, review, designation, company, address } = client;
  const clientCardRef = useRef();

  useEffect(() => {
    inView(clientCardRef.current, () => {
      animate(clientCardRef.current,
        { y: [400, 0], opacity: [0, 1] },
        { duration: 1.2, easing: "ease-out" }
      )
    });
  }, [])
  return (
    <div
      ref={clientCardRef}
      className="bg-white dark:bg-gray-300 shadow-xl rounded-xl overflow-hidden mx-auto flex flex-col lg:flex-row items-center gap-6 p-6"
    >
      <div className="relative flex-1">
        <img
          className="w-full h-80 object-cover rounded-lg"
          src={image_url}
          alt={name}
        />
      </div>

      <div className="flex-1 space-y-4">
        <div className="text-center">
          <svg
            className="w-12 h-12 mx-auto mb-3 text-green-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <p className="text-lg dark:text-black text-gray-700 font-medium italic">{review}</p>
        </div>
        <hr className="text-green-600 w-4/12 mx-auto" />
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-green-900 dark:text-green-600">{name}</h1>
          <h2 className="text-lg font-medium text-gray-600">{designation}</h2>
          <p className="text-md text-gray-800">{company}</p>
          <p className="text-md text-gray-800">{address}</p>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
