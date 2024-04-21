import React from "react";
import { useSwipeNavigation } from "../useSwipeNavigation";

function About() {
  const { swipeHandlers } = useSwipeNavigation("/sexist", "/");

  return (
    <div
      {...swipeHandlers} // Spread the swipe handlers onto your main div
      className="bg-purple-200 flex flex-col items-center justify-center p-6 min-h-screen"
    >
      <div className="bg-purple-200 flex flex-col items-center justify-center font-sans p-6 min-h-screen">
        <div className="w-full max-w-sm">
          <div class="flex items-center justify-center h-full mb-8">
            <img src="/svit.png" alt="svit" class="w-2/3" />
          </div>

          <p className="text-center text-purple-700 font-semibold text-2xl mt-8 mb-8">
            hi there. we are esther and svitlana, your friends and your teachers
            of this <br></br>🌟thing🌟
          </p>
          <div class="flex items-center justify-center h-full">
            <img src="/esther.png" alt="esther" class="w-2/3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
