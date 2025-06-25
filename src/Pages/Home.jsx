import React, { useEffect, useRef } from "react";
import HeroSlider from "../Components/HeroSlider/HeroSlider";
import NewPlants from "../Components/NewPlants/NewPlants";
import KeyFeatures from "../Components/KeyFeatures/KeyFeatures";
import Subscribe from "../Components/Subscribe/Subscribe";
import Clients from "../Components/Clients/Clients";
import { animate, inView } from "motion";

const Home = () => {
  const slideRef = useRef();
  const plantsRef = useRef();
  const subs = useRef();
  useEffect(() => {
    inView(slideRef.current, () => {
      animate(
        slideRef.current,
        { x: [400, 0], opacity: [0, 1] },
        { duration: 0.9, easing: "ease-out" }
      );
    });
    inView(plantsRef.current, () => {
      animate(
        plantsRef.current,
        { x: [-200, 0], opacity: [0, 1] },
        { duration: 0.9, easing: "ease-out" }
      );
    });
    inView(subs.current, () => {
      animate(
        subs.current,
        { x: [-100, 0], opacity: [0, 1] },
        { duration: 1.7, easing: "ease-out" }
      );
    });
    document.title = "Home | Plant Companion";
  }, []);
  return (
    <div className="dark:bg-gray-700">
      <section ref={slideRef}>
        <HeroSlider></HeroSlider>
      </section>
      <section ref={plantsRef}>
        <NewPlants></NewPlants>
      </section>
      <section>
        <KeyFeatures></KeyFeatures>
      </section>
      <section ref={subs}>
        <Subscribe></Subscribe>
      </section>
      <section>
        <Clients></Clients>
      </section>
    </div>
  );
};

export default Home;
