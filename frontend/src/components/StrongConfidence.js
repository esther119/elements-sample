import React from "react";
import { useSwipeNavigation } from "../useSwipeNavigation";

function StrongConfidentComponent() {
  const { swipeHandlers } = useSwipeNavigation("/quiz", "");

  return (
    <div
      {...swipeHandlers} // Spread the swipe handlers onto your main div
      className="bg-purple-200 flex flex-col items-center justify-center p-6 min-h-screen"
    >
      <div className="bg-purple-200 flex flex-col items-center justify-center font-sans p-6 min-h-screen">
        <div className="w-full max-w-sm">
          <img
            src="/start.gif"
            alt="Strong and confident female"
            className="rounded-lg shadow-md mb-4"
          />

          <p className="text-center text-purple-700 font-semibold text-3xl mb-2">
            ✨ strong & confident <br></br>
            female in tech
          </p>
          <p className="text-center text-purple-700 mb-4">(aka CPFT 101)</p>
        </div>
      </div>
    </div>
  );
}

export default StrongConfidentComponent;
