import React from "react";
import { useSwipeNavigation } from "../useSwipeNavigation";

function Sexist() {
  const { swipeHandlers } = useSwipeNavigation("/study", "");

  return (
    <div
      {...swipeHandlers} // Spread the swipe handlers onto your main div
      className="bg-purple-200 flex flex-col items-center justify-center p-6 min-h-screen"
    >
      <div className="bg-purple-200 flex flex-col items-center justify-center font-sans p-6 min-h-screen">
        <div className="w-full max-w-sm">
          <p className="text-center text-purple-700 font-semibold text-2xl mt-8 mb-8">
            one day, we got tired of sexist shit at our workplaces and so... we
            decided to act!👯‍♂️
          </p>
          <div class="flex items-center justify-center h-full">
            <img src="/diversity.png" alt="esther" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sexist;
