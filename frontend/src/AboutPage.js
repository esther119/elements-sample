// AboutPage.js
import React from "react";
import { useSwipeNavigation } from "./useSwipeNavigation";

function AboutPage() {
  const { swipeHandlers, simulateSwipeLeft, simulateSwipeRight } =
    useSwipeNavigation("/contact", "/home");

  return (
    <div
      {...swipeHandlers}
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>About Page</h1>
      {/* Navigation buttons for manual swipe simulation */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          maxWidth: "300px", // Adjust as needed for your design
          marginTop: "20px",
        }}
      >
        <button
          onClick={simulateSwipeLeft}
          style={{ padding: "10px", marginLeft: "20px" }}
        >
          Left
        </button>
        <button
          onClick={simulateSwipeRight}
          style={{ padding: "10px", marginRight: "20px" }}
        >
          Right
        </button>
      </div>
    </div>
  );
}

export default AboutPage;
