import React from "react";
import { useSwipeNavigation } from "../useSwipeNavigation";
import { useLocation } from "react-router-dom";

const Manifesto = () => {
  const location = useLocation();
  const imageUrl = location.state?.imageUrl;
  const manifesto = location.state?.manifesto;

  const { swipeHandlers } = useSwipeNavigation("/beautiful", "/superpower");
  console.log("My manifesto ImageUrl", imageUrl);
  const testImageUrl = "./examples/2.png";

  return (
    <div
      {...swipeHandlers}
      className="bg-purple-200 flex flex-col items-center justify-center p-6 min-h-screen"
    >
      <div>
        <p className="text-center text-purple-700 font-semibold text-3xl mb-2 font-sans">
          Goddess's Manifesto
        </p>
      </div>
      <div className="photo-display-container">
        {imageUrl ? (
          <img src={imageUrl} alt="AI-power" />
        ) : (
          <img src={testImageUrl} alt="AI-power" />
        )}
      </div>
      <div>
        <p className="text-center text-purple-700 font-semibold text-xl mb-2 font-sans">
          {manifesto}
        </p>
      </div>
    </div>
  );
};

export default Manifesto;
