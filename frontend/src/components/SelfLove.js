import React, { useState, useEffect } from "react";
import { useSwipeNavigation } from "../useSwipeNavigation";
import { useLocation } from "react-router-dom";

const SelfLove = () => {
  const [textValue, setTextValue] = useState("");
  const [textBoxDimensions, setTextBoxDimensions] = useState({
    width: "70vw",
    height: "70vh",
  });
  const location = useLocation();
  const photo = location.state?.photo;
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
    const calculatedHeight = windowHeight * 0.5;
    setTextBoxDimensions({
      width: calculatedWidth + "px",
      height: calculatedHeight + "px",
    });
  }, []);

  const { swipeHandlers } = useSwipeNavigation("/three-women", "/selfie");

  return (
    <div
      {...swipeHandlers}
      className="bg-purple-200 flex flex-col items-center justify-center p-6 min-h-screen"
    >
      <div className="photo-display-container">
        {photo ? <img src={photo} alt="Captured Selfie" /> : null}
      </div>
      <div>
        <p className="text-center text-purple-700 font-semibold text-xl mb-2 font-sans">
          Confidence starts from self love. <br></br>What do you love about this
          photo?
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
            className="p-3 bg-white rounded-lg font-sans"
          />
        </div>
      </div>
    </div>
  );
};

export default SelfLove;
