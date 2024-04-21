import React from "react";
import { useSwipeNavigation } from "../useSwipeNavigation";

function Beautiful() {
  const { swipeHandlers } = useSwipeNavigation("/leaf", "/manifesto");

  return (
    <div
      {...swipeHandlers} // Spread the swipe handlers onto your main div
      className="bg-purple-200 flex flex-col items-center justify-center p-6 min-h-screen"
    >
      <div className="bg-purple-200 flex flex-col items-center justify-center font-sans p-6 min-h-screen">
        <div className="w-full max-w-sm">
          <p className="text-center text-purple-700 font-semibold text-2xl mt-8 mb-8">
            Beautiful work! <br></br>
            the key to change is consistency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Beautiful;
