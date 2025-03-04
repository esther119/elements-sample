import React from "react";
import { useNavigate } from "react-router-dom";
import { useSwipeNavigation } from "../useSwipeNavigation";

function QuizComponent() {
  const { swipeHandlers } = useSwipeNavigation("/pie", "/");
  const navigate = useNavigate(); // Initialize useNavigate
  const handleButtonClick = (answer) => {
    console.log(`You clicked on option: ${answer}`);
    // Example navigation logic based on the button clicked
    switch (answer) {
      case "A":
        navigate("/pie"); // Change to your desired route for option A
        break;
      case "B":
        navigate("/pie"); // Change to your desired route for option B
        break;
      case "C":
        navigate("/pie"); // Change to your desired route for option C
        break;
      default:
        // Optional: handle any other cases or default behavior
        console.log("Other option selected");
    }
  };

  return (
    <div
      {...swipeHandlers} // Spread the swipe handlers onto your main div
      className="flex flex-col items-center justify-center"
    >
      <div className="font-sans text-center p-5 bg-purple-300 min-h-screen flex flex-col justify-center">
        <h2 className="text-lg text-purple-700 mb-6 font-bold">Why care?</h2>
        <h1 className="text-2xl text-purple-900 mb-10 font-bold">
          What % of Fortune 500 CEOs are females?
        </h1>
        <button
          onClick={() => handleButtonClick("A")}
          className="bg-pink-500 text-white font-semibold py-2 px-4 border border-pink-600 rounded shadow mb-4 w-5/6 mx-auto hover:bg-pink-600 transition-colors"
        >
          A. 2%
        </button>
        <button
          onClick={() => handleButtonClick("B")}
          className="bg-purple-500 text-white font-semibold py-2 px-4 border border-purple-600 rounded shadow mb-4 w-5/6 mx-auto hover:bg-purple-600 transition-colors"
        >
          B. 10%
        </button>
        <button
          onClick={() => handleButtonClick("C")}
          className="bg-indigo-500 text-white font-semibold py-2 px-4 border border-indigo-600 rounded shadow w-5/6 mx-auto hover:bg-indigo-600 transition-colors"
        >
          C. 25%
        </button>
      </div>
    </div>
  );
}

export default QuizComponent;
