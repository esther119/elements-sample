import React from "react";
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

function SwipeableComponent() {
  const navigate = useNavigate();

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log("Swiped Left");
      navigate("/contact");
    },
    onSwipedRight: () => {
      console.log("Swiped Right");
      navigate("/About");
    },
  });

  const simulateSwipeLeft = () => {
    navigate("/contact");
  };

  const simulateSwipeRight = () => {
    navigate("/about");
  };

  return (
    <div
      {...handlers}
      style={{
        height: "100vh", // Full viewport height
        width: "100vw", // Full viewport width
        backgroundColor: "#ddd",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p className="text-3xl font-bold underline">Swipe left or right</p>
      {/* Flex container for buttons */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Swipe Left Button */}
        <button
          onClick={simulateSwipeLeft}
          style={{ padding: "10px", marginLeft: "20px" }} // Added margin to the left of the Swipe Left button
        >
          Swipe Left
        </button>
        {/* Swipe Right Button */}
        <button
          onClick={simulateSwipeRight}
          style={{ padding: "10px", marginRight: "20px" }} // Added margin to the right of the Swipe Right button
        >
          Swipe Right
        </button>
      </div>
    </div>
  );
}

export default SwipeableComponent;
