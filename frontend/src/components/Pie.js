import React from "react";
import { useSwipeNavigation } from "../useSwipeNavigation";

function Pie() {
  const { swipeHandlers } = useSwipeNavigation("/mindfulness", "/quiz");

  return (
    <div
      {...swipeHandlers} // Spread the swipe handlers onto your main div
      className="bg-purple-200 flex flex-col items-center justify-center p-6 min-h-screen"
    >
      <div className="bg-purple-200 flex flex-col items-center justify-center font-sans p-6 min-h-screen">
        <div className="w-full max-w-sm">
          <p className="text-center text-purple-700 mb-4 text-2xl font-semibold">
            Why care?
          </p>
          <img
            src="/pie.png"
            alt="Strong and confident female"
            className="mb-4"
          />

          <p className="text-center text-purple-700 font-semibold text-2xl mb-2">
            only 10 % of fortune 500 CEOS are females
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pie;
