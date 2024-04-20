import React from "react";
import { useSwipeNavigation } from "../useSwipeNavigation";

const MindfulnessStart = () => {
  const { swipeHandlers } = useSwipeNavigation("/breath", "/pie");
  return (
    <div
      {...swipeHandlers} // Spread the swipe handlers onto your main div
      className="bg-purple-200 flex flex-col items-center justify-center p-6 min-h-screen"
    >
      <div>
        <p className="text-center text-purple-700 font-semibold text-3xl mb-2 font-sans">
          Next, we start with mindfulness.
        </p>
      </div>
    </div>
  );
};

export default MindfulnessStart;
