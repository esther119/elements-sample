import React from "react";
import { useSwipeNavigation } from "../useSwipeNavigation";
import { useLocation } from "react-router-dom";

const Manifesto = () => {
  const location = useLocation();
  const imageUrl = location.state?.imageUrl;
  const manifesto = location.state?.manifesto;

  const { swipeHandlers } = useSwipeNavigation("/start-lock", "/superpower");
  console.log("My manifesto ImageUrl", imageUrl);
  const testImageUrl = "./elephant.png";

  return (
    <div
      {...swipeHandlers}
      className="bg-purple-200 flex flex-col items-center justify-center p-6 min-h-screen"
    >
      <div className="photo-display-container">
        {imageUrl ? (
          <img src={testImageUrl} alt="AI-power" />
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
