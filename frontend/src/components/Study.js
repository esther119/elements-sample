import React from "react";
import { useSwipeNavigation } from "../useSwipeNavigation";

function Study() {
  const { swipeHandlers } = useSwipeNavigation("/quiz", "/sexist");

  return (
    <div
      {...swipeHandlers} // Spread the swipe handlers onto your main div
      className="bg-purple-200 flex flex-col items-center justify-center p-6 min-h-screen"
    >
      <div className="bg-purple-200 flex flex-col items-center justify-center font-sans p-6 min-h-screen">
        <div className="w-full max-w-sm">
          <p className="text-center text-purple-700 font-semibold text-2xl mt-8 mb-2">
            here is what we did:
          </p>
          <ul className="list-disc pl-5 text-purple-700 text-2xl ">
            <li>read research & books </li>
            <li>sought advice from strong female voices</li>
            <li>hosted role play events</li>
          </ul>

          <div class="flex items-center justify-center h-full mt-2">
            <img src="/study.gif" alt="study" />
          </div>
          <p className="text-center text-purple-700 font-semibold text-2xl mt-8 mb-2">
            We aren’t experts <br></br>
            but we learned a thing or two.
          </p>
          <p className="text-center text-purple-700 text-2xl mt-2 mb-2">
            We want our goddess friends to feel empowered. <br></br>
            so here is our thing
          </p>
        </div>
      </div>
    </div>
  );
}

export default Study;
