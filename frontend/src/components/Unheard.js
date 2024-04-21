import React, { useState, useEffect } from "react";
import { useSwipeNavigation } from "../useSwipeNavigation";

const Unheard = () => {
  const [textValue, setTextValue] = useState("");
  const [textBoxDimensions, setTextBoxDimensions] = useState({
    width: "70vw",
    height: "70vh",
  });
  const typingAudio = new Audio("/typewriter.mp3");

  // Function to handle changes in the text box
  const handleChange = (event) => {
    setTextValue(event.target.value);
    typingAudio.play();
  };

  // Calculate dimensions on component mount
  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const calculatedWidth = windowWidth * 0.7;
    const calculatedHeight = windowHeight * 0.7;
    setTextBoxDimensions({
      width: calculatedWidth + "px",
      height: calculatedHeight + "px",
    });
  }, []);

  const { swipeHandlers } = useSwipeNavigation("/selfie", "/breath");

  return (
    <div
      {...swipeHandlers}
      className="bg-purple-200 flex flex-col items-center justify-center p-6 min-h-screen"
    >
      <div>
        <p className="text-center text-purple-700 font-semibold text-xl mb-2 font-sans">
          Reflect on a time <br></br>
          when you felt unheard
        </p>
      </div>
      <div>
        <div>
          <input
            type="text"
            value={textValue}
            onChange={handleChange}
            style={{
              width: textBoxDimensions.width,
              height: textBoxDimensions.height,
            }}
            className="p-3 bg-orange-100 rounded-lg font-sans"
          />
        </div>
      </div>
    </div>
  );
};

export default Unheard;
