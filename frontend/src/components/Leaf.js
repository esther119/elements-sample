import React from "react";
import { useSwipeNavigation } from "../useSwipeNavigation";

const Leaf = () => {
  const { swipeHandlers } = useSwipeNavigation("/", "/quiz");
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
          preload="auto"
        >
          <source src="./leaf.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Leaf;
