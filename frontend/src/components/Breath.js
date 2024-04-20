import React from "react";
import { useSwipeNavigation } from "../useSwipeNavigation";

const Breath = () => {
  const { swipeHandlers } = useSwipeNavigation("/unheard", "/quiz");
  return (
    <div
      {...swipeHandlers}
      className="bg-purple-200 flex flex-col items-center justify-center p-6 min-h-screen"
      style={{ position: "relative" }}
    >
      <div
        className="video-player"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
        }}
      >
        <video
          autoPlay
          playsInline
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          controls
        >
          <source src="./breath.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Breath;

// import React from "react";
// import { useSwipeNavigation } from "../useSwipeNavigation";

// const Breath = () => {
//   const { swipeHandlers } = useSwipeNavigation("/quiz", "");
//   return (
//     <div
//       {...swipeHandlers} // Spread the swipe handlers onto your main div
//       className="bg-purple-200 flex flex-col items-center justify-center p-6 min-h-screen"
//     >
//       <div className="video-player">
//         <video width="100%" height="100%" controls>
//           <source src="./breath.mp4" type="video/mp4" />
//         </video>
//       </div>
//     </div>
//   );
// };

// export default Breath;
