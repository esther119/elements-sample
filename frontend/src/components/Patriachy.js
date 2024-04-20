import React from "react";
// Assume you have navigation set up with react-router-dom
import { useNavigate } from "react-router-dom";
import { useSwipeNavigation } from "../useSwipeNavigation";

const JourneyComponent = () => {
  const { swipeHandlers } = useSwipeNavigation("/quiz", "");
  const navigate = useNavigate();

  const handleNahClick = () => {
    navigate("/stay-route"); // Replace with your route for 'Nah'
  };

  const handleYuppyClick = () => {
    navigate("/embark-route"); // Replace with your route for 'Yuppy!'
  };

  return (
    <div
      {...swipeHandlers} // Spread the swipe handlers onto your main div
      className="bg-purple-200 flex flex-col items-center justify-center p-6 min-h-screen"
    >
      <div className="font-sans flex h-screen justify-center items-center">
        <div className="p-4 border border-gray-200 shadow-lg w-64 text-center bg-white rounded">
          <div className="font-semibold mb-4">
            Embark on journey of confidence and strength
          </div>
          <div className="flex justify-between ">
            <button
              onClick={handleNahClick}
              className="bg-white text-blue-600 font-semibold py-2 px-4 border border-blue-600 rounded shadow flex-1"
            >
              Nah, stay in patriarchy
            </button>
            <button
              onClick={handleYuppyClick}
              className="bg-white text-blue-600 font-semibold py-2 px-4 border border-blue-600 rounded shadow flex-1 "
            >
              Yuppy!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JourneyComponent;

// import React from "react";
// // Assume you have navigation set up with react-router-dom
// import { useNavigate } from "react-router-dom";

// const Patriachy = () => {
//   const navigate = useNavigate();

//   const handleNahClick = () => {
//     navigate("/stay-route"); // Replace with your route for 'Nah'
//   };

//   const handleYuppyClick = () => {
//     navigate("/embark-route"); // Replace with your route for 'Yuppy!'
//   };

//   return (
//     <div className="p-5 font-sans border border-gray-200 shadow-md w-96 mx-auto text-center">
//       <div className="font-semibold mb-4">
//         Embark on journey of confidence and strength
//       </div>
//       <div className="flex justify-between">
//         <button
//           onClick={handleNahClick}
//           className="bg-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
//         >
//           Nah, stay in patriarchy
//         </button>
//         <button
//           onClick={handleYuppyClick}
//           className="bg-blue-500 text-white font-semibold py-2 px-4 rounded shadow"
//         >
//           Yuppy!
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Patriachy;
