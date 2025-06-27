import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-11/12 mx-auto slider-container">
      <Slider {...settings}>
        <div className="relative bg-[url(./assets/hero-slide1.jpg)] bg-no-repeat bg-cover w-11/12 mx-auto h-[420px] rounded-2xl text-black slide-1">
            <div className="w-full h-full p-10 flex flex-col justify-center items-end text-center">
              <h3 className="text-3xl font-bold md:w-8/12">
              Your Personal Plant Care Assistant
            </h3>
            <p className="md:w-8/12">
              Plant Companion is your go-to guide for keeping your plants healthy and thriving. With smart reminders and tailored care tips, you'll never miss a watering or fertilizing session again. It’s like having a plant expert in your pocket!
            </p>
            </div>
        </div>
        <div className="relative bg-[url(./assets/slide-2.jpg)] bg-no-repeat bg-cover w-11/12 mx-auto h-[420px] rounded-2xl slide-2 text-white">
          <div className="w-full h-full p-10 flex flex-col items-center justify-center gap-5">
            <h1 className="text-5xl play text-center">Track Growth and Progress</h1>
            <p className="play text-center">Stay connected with your plants' growth journey! Log their milestones, track their progress, and visualize their health in a simple, easy-to-use interface. Whether it’s new leaves or a blooming flower, you’ll celebrate every moment!</p>
          </div>
        </div>
        <div className="relative bg-[url(./assets/hero-slide-3.webp)] bg-no-repeat bg-cover w-11/12 mx-auto h-[420px] rounded-2xl slide-3 text-white">
          <div className="w-full h-full p-10 flex flex-col items-center justify-center gap-5">
            <h1 className="text-5xl play text-center">Create a Personalized Plant Routine</h1>
            <p className="text-center">Every plant is unique, and so is its care routine. Plant Companion allows you to customize care schedules based on the specific needs of each plant. From sun exposure to humidity levels, you’ll create the perfect environment for your green friends to flourish.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
