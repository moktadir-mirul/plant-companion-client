import Lottie from "lottie-react";
import React from "react";
import loadingAnimation from "../../assets/loading.json"
const FallBack = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="w-42 h-32">
        <Lottie animationData={loadingAnimation} loop={true}/>
      </div>
    </div>
  );
};

export default FallBack;
