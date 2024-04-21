import React from "react";
import { useSwipeNavigation } from "../useSwipeNavigation";
import { useNavigate } from "react-router-dom";

function ThreeWomen() {
  const { swipeHandlers } = useSwipeNavigation("/superpower", "/self-love");
  const navigate = useNavigate();
  const explore = () => {
    // Navigate to the next page, optionally pass the photo as state
    navigate("/superpower");
  };
  return (
    <div
      {...swipeHandlers} // Spread the swipe handlers onto your main div
      className="bg-purple-200 flex flex-col items-center justify-center p-6 min-h-screen"
    >
      <div className="bg-purple-200 flex flex-col items-center justify-center font-sans p-6 min-h-screen">
        <div className="w-full max-w-sm">
          <p className="text-center text-purple-700 font-semibold text-xl mt-8 mb-2">
            time to embrace your own uniqueness <br></br>
            you don’t have to become alpha male <br></br>
            Lets discover your strengths
          </p>

          <div class="flex items-center justify-center h-full mt-2">
            <img src="/threewomen.png" alt="threewomen" />
          </div>
          <div class="flex items-center justify-center h-full mt-2">
            <button
              onClick={explore}
              className="bg-purple-800 text-white font-bold py-2 px-4 mt-8 rounded"
            >
              Explore a version of your own <br></br>
              personal brand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThreeWomen;
