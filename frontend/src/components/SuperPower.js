import React, { useState, useEffect } from "react";
import { useSwipeNavigation } from "../useSwipeNavigation";

const SuperPower = () => {
  const [textValue, setTextValue] = useState("");
  const [textBoxDimensions, setTextBoxDimensions] = useState({
    width: "70vw",
    height: "70vh",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  const typingAudio = new Audio("/typewriter.mp3");

  const handleChange = (event) => {
    setTextValue(event.target.value);
    typingAudio.play();
  };

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const calculatedWidth = windowWidth * 0.7;
    const calculatedHeight = windowHeight * 0.3;
    setTextBoxDimensions({
      width: calculatedWidth + "px",
      height: calculatedHeight + "px",
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    // Here you would replace 'YOUR_API_ENDPOINT' with the actual endpoint and set up the request as needed
    try {
      const response = await fetch(
        "http://localhost:3000/generate-chat-and-image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ textValue }),
        }
      );
      const data = await response.json();
      console.log("ai output", data);
      setApiResponse(data);
    } catch (error) {
      console.error("There was an error!", error);
    }
    setIsLoading(false);
  };

  const { swipeHandlers } = useSwipeNavigation(
    "/manifesto",
    "/three-women",
    { imageUrl: apiResponse, manifesto: textValue },
    null
  );

  return (
    <div
      {...swipeHandlers}
      className="bg-purple-200 flex flex-col items-center justify-center p-6 min-h-screen"
    >
      <div>
        <p className="text-center text-purple-700 font-semibold text-2xl mb-2 font-sans">
          Any strengths you are aware of?<br></br>
          What is your superpower?
        </p>
      </div>
      <form onSubmit={handleSubmit}>
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
        <div className="flex items-center justify-center h-full mt-2">
          <button
            type="submit"
            className="font-sans bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Done
          </button>
        </div>
      </form>
      <div>
        <img src="/questioning-women.gif" alt="question-women" />
      </div>
      {isLoading && (
        <p className="font-sans text-purple-500 font-semibold">
          AI finding your power...
        </p>
      )}{" "}
      {apiResponse && (
        <div className="font-sans text-purple-500 font-semibold">
          AI found it!
        </div>
      )}
    </div>
  );
};

export default SuperPower;

// import React, { useState, useEffect } from "react";
// import { useSwipeNavigation } from "../useSwipeNavigation";

// const SuperPower = () => {
//   const [textValue, setTextValue] = useState("");
//   const [textBoxDimensions, setTextBoxDimensions] = useState({
//     width: "70vw",
//     height: "70vh",
//   });
//   const typingAudio = new Audio("/typewriter.mp3");

//   // Function to handle changes in the text box
//   const handleChange = (event) => {
//     setTextValue(event.target.value);
//     typingAudio.play();
//   };

//   // Calculate dimensions on component mount
//   useEffect(() => {
//     const windowWidth = window.innerWidth;
//     const windowHeight = window.innerHeight;
//     const calculatedWidth = windowWidth * 0.7;
//     const calculatedHeight = windowHeight * 0.3;
//     setTextBoxDimensions({
//       width: calculatedWidth + "px",
//       height: calculatedHeight + "px",
//     });
//   }, []);

//   const { swipeHandlers } = useSwipeNavigation("/", "/three-women");

//   return (
//     <div
//       {...swipeHandlers}
//       className="bg-purple-200 flex flex-col items-center justify-center p-6 min-h-screen"
//     >
//       <div>
//         <p className="text-center text-purple-700 font-semibold text-2xl mb-2 font-sans">
//           Any strengths you are aware of?<br></br>
//           What is your superpower?
//         </p>
//       </div>
//       <div>
//         <div>
//           <input
//             type="text"
//             value={textValue}
//             onChange={handleChange}
//             style={{
//               width: textBoxDimensions.width,
//               height: textBoxDimensions.height,
//             }}
//             className="p-3 bg-white rounded-lg font-sans"
//           />
//         </div>
//       </div>
//       <div class="flex items-center justify-center h-full mt-2">
//         <img src="/questioning-women.gif" alt="question-women" />
//       </div>
//     </div>
//   );
// };

// export default SuperPower;
