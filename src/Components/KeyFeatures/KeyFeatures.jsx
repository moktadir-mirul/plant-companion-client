import { animate, inView } from "motion";
import React, { useEffect, useRef } from "react";
import { FaSunPlantWilt } from "react-icons/fa6";
import { GiFlowerPot, GiPlantWatering, GiTreeGrowth } from "react-icons/gi";
import { MdPestControl } from "react-icons/md";
import { PiPlantFill } from "react-icons/pi";

const KeyFeatures = () => {
  const keyHd = useRef();
  const keyF1 = useRef();
  const keyF2 = useRef();
  const keyF3 = useRef();
  const keyF4 = useRef();
  const keyF5 = useRef();
  const keyF6 = useRef();
  useEffect(() => {
    inView(keyHd.current, () => {
      animate(
        keyHd.current,
        { x: [-200, 0], opacity: [0, 1] },
        { duration: 0.9, easing: "ease-out" }
      );
    });
    inView(keyF1.current, () => {
      animate(
        keyF1.current,
        { y: [-200, 0], opacity: [0, 1] },
        { duration: 0.9, easing: "ease-out" }
      );
    });
    inView(keyF2.current, () => {
      animate(
        keyF2.current,
        { y: [-400, 0], opacity: [0, 1] },
        { duration: 1, easing: "ease-out" }
      );
    });
    inView(keyF3.current, () => {
      animate(
        keyF3.current,
        { y: [-400, 0], opacity: [0, 1] },
        { duration: 1.2, easing: "ease-out" }
      );
    });
    inView(keyF4.current, () => {
      animate(
        keyF4.current,
        { y: [-400, 0], opacity: [0, 1] },
        { duration: 1.3, easing: "ease-out" }
      );
    });
    inView(keyF5.current, () => {
      animate(
        keyF5.current,
        { y: [-400, 0], opacity: [0, 1] },
        { duration: 1.5, easing: "ease-out" }
      );
    });
    inView(keyF6.current, () => {
      animate(
        keyF6.current,
        { y: [-400, 0], opacity: [0, 1] },
        { duration: 1.7, easing: "ease-out" }
      );
    });
  }, []);
  return (
    <div>
      <div className="relative bg-[url(./assets/key-ft-img.jpg)] dark:bg-[url(./assets/floral-bg.png)] dark:bg-repeat dark:bg-auto bg-fixed bg-no-repeat bg-contain w-full mx-auto key-ft text-green-800 rounded-2xl">
        <h1
          ref={keyHd}
          className="pb-10 text-3xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-br from-green-900 dark:from-green-400 to-lime-500 play font-bold text-center"
        >
          Key Features
        </h1>
        <div className="w-11/12 mx-auto grid gird-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Card 1 */}
          <div
            ref={keyF1}
            className="bg-green-900 p-5 flex flex-col justify-center items-center text-center text-white gap-5 rounded-2xl"
          >
            <div className="w-24 h-24 rounded-full bg-white flex justify-center items-center">
              <PiPlantFill size={60} color="darkgreen" />
            </div>
            <div className="space-y-5">
              <h1 className="play text-2xl font-bold ">
                Plant Inventory & Organization
              </h1>
              <p className="text-base font-normal text-justify">
                For those with a larger plant collection, Plant Companion can
                help you keep an organized inventory of your plants. You can log
                key details such as species, watering date, and condition in
                your home. Plant Companion can even allow you to tag plants with
                specific categories to make finding and caring for them easier,
                ensuring none of your plants get overlooked.
              </p>
            </div>
          </div>
          {/* Card 2 */}
          <div
            ref={keyF2}
            className="bg-lime-900 p-5 flex flex-col justify-center items-center text-center text-white gap-5 rounded-2xl"
          >
            <div className="w-24 h-24 rounded-full bg-white flex justify-center items-center">
              <GiPlantWatering size={60} color="darkolivegreen" />
            </div>
            <div className="space-y-5">
              <h1 className="play text-2xl font-bold ">
                Smart Watering Reminders
              </h1>
              <p className="text-base font-normal text-justify">
                Plant Companion helps you never forget to water your plants by
                tracking each plant's individual watering schedule. Based on
                your input, it calculates the next watering date and gives
                gentle reminders, ensuring every plant stays healthy and
                hydrated. This feature takes the guesswork out of plant care,
                making it perfect for both beginners and busy plant lovers.
              </p>
            </div>
          </div>
          {/* Card 3 */}
          <div
            ref={keyF3}
            className="bg-green-900 p-5 flex flex-col justify-center items-center text-center text-white gap-5 rounded-2xl"
          >
            <div className="w-24 h-24 rounded-full bg-white flex justify-center items-center">
              <GiFlowerPot size={60} color="darkgreen" />
            </div>
            <div className="space-y-5">
              <h1 className="play text-2xl font-bold ">
                Personalized Plant Profiles
              </h1>
              <p className="text-base font-normal text-justify">
                Each plant gets its own profile with a photo, category, care
                level, and health status in Plant Companion. You can view and
                manage details like watering history, descriptions, seek
                consultation from specialists and care tips—all in one clean,
                user-friendly interface. With everything in one place,
                monitoring your plant’s well-being becomes both simple and
                enjoyable.
              </p>
            </div>
          </div>
          {/* Card 4 */}
          <div
            ref={keyF4}
            className="bg-lime-900 p-5 flex flex-col justify-center items-center text-center text-white gap-5 rounded-2xl"
          >
            <div className="w-24 h-24 rounded-full bg-white flex justify-center items-center">
              <MdPestControl size={60} color="darkolivegreen" />
            </div>
            <div className="space-y-5">
              <h1 className="play text-2xl font-bold ">
                Pest and Disease Alerts
              </h1>
              <p className="text-base font-normal text-justify">
                Your Plant Companion can also remind you to check for pests and
                signs of disease. Whether it’s spider mites, aphids, or fungal
                infections, an alert system will encourage you to perform
                routine inspections, helping you catch issues before they
                escalate.By the way, consulting with specialist is available
                also.
              </p>
            </div>
          </div>
          {/* Card 5 */}
          <div
            ref={keyF5}
            className="bg-green-900 p-5 flex flex-col justify-center items-center text-center text-white gap-5 rounded-2xl"
          >
            <div className="w-24 h-24 rounded-full bg-white flex justify-center items-center">
              <GiTreeGrowth size={60} color="darkgreen" />
            </div>
            <div className="space-y-5">
              <h1 className="play text-2xl font-bold ">Growth Tracking</h1>
              <p className="text-base font-normal text-justify">
                Documenting your plants’ growth over time is not only satisfying
                but also helpful. Plant Companion can allow you to note growth
                patterns, leaf colors, and other visual cues. This will help you
                identify any potential issues early, such as pests or nutrient
                deficiencies, before they become serious problems.
              </p>
            </div>
          </div>
          {/* Card 6 */}
          <div
            ref={keyF6}
            className="bg-lime-900 p-5 flex flex-col justify-center items-center text-center text-white gap-5 rounded-2xl"
          >
            <div className="w-24 h-24 rounded-full bg-white flex justify-center items-center">
              <FaSunPlantWilt size={60} color="darkolivegreen" />
            </div>
            <div className="space-y-5">
              <h1 className="play text-2xl font-bold ">Seasonal Adjustments</h1>
              <p className="text-base font-normal text-justify">
                As seasons change, so do the needs of your plants. Temperature
                and humidity levels fluctuate, and Plant Companion can remind
                you to make seasonal adjustments. It can suggest moving plants
                indoors during cold weather or increasing humidity during hot
                months, ensuring your plants are comfortable year-round.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Card area */}
    </div>
  );
};

export default KeyFeatures;
