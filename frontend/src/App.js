// import React, { useState } from "react";

// const App = () => {
//   const Draggable = ({ children }) => {
//     const [isDragging, setIsDragging] = useState(false);
//     const [originalPosition, setOriginalPosition] = useState({ x: 0, y: 0 });
//     const [translate, setTranslate] = useState({ x: 0, y: 0 });

//     const startDrag = (e) => {
//       setIsDragging(true);
//       setOriginalPosition({
//         x: e.clientX - translate.x,
//         y: e.clientY - translate.y,
//       });
//       // Attach the move and up listeners to the window to ensure we capture all movements
//       window.addEventListener("mousemove", onDrag);
//       window.addEventListener("mouseup", endDrag);
//       // Prevent text selection or dragging images during drag
//       e.preventDefault();
//     };

//     const onDrag = (e) => {
//       if (!isDragging) return;
//       setTranslate({
//         x: e.clientX - originalPosition.x,
//         y: e.clientY - originalPosition.y,
//       });
//     };

//     const endDrag = () => {
//       setIsDragging(false);
//       // Remove the move and up listeners from the window after dragging ends
//       window.removeEventListener("mousemove", onDrag);
//       window.removeEventListener("mouseup", endDrag);
//     };

//     return (
//       <div
//         onMouseDown={startDrag}
//         className={`cursor-${isDragging ? "grabbing" : "grab"} select-none`}
//         style={{
//           transform: `translate(${translate.x}px, ${translate.y}px)`,
//           transition: "transform 0.2s",
//           position: "absolute",
//         }}
//       >
//         {children}
//       </div>
//     );
//   };

//   const DropArea = () => {
//     return (
//       <div className="w-full h-96 border-2 border-dashed border-gray-300 relative flex justify-center items-center">
//         <Draggable>
//           <div className="w-24 h-24 bg-sky-500 rounded-lg shadow-md"></div>
//         </Draggable>
//       </div>
//     );
//   };

//   return (
//     <div className="App p-10">
//       <DropArea />
//     </div>
//   );
// };

// export default App;

// src / App.js;
// App.js;
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StrongConfidentComponent from "./components/StrongConfidence";
import Quiz from "./components/Quiz";
import SelfieComponent from "./components/SelfieComponent";
import Pie from "./components/Pie";
import Patriachy from "./components/Patriachy";
import Breath from "./components/Breath";
import MindfulnessStart from "./components/MindfulnessStart";
import Unheard from "./components/Unheard";
import SelfLove from "./components/SelfLove";
import ConfidenceImage from "./components/ConfidenceImage";
import About from "./components/About";
import Sexist from "./components/Sexist";
import Study from "./components/Study";
import ThreeWomen from "./components/ThreeWomen";
import SuperPower from "./components/SuperPower";
import Manifesto from "./components/Manifesto";
import StartLock from "./components/StartLock";
import Leaf from "./components/Leaf";
import Locker from "./components/Locker";
import Beautiful from "./components/BeauitfulWork";
// import SwipeableComponent from "./SwipeableComponent";

const App = () => {
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Nothing</Link>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/quiz">Quiz</Link>
            </li>
            <li>
              <Link to="/selfie">Selfie</Link>
            </li>
          </ul>
        </nav> */}
        <Routes>
          <Route path="/" exact element={<StrongConfidentComponent />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/selfie" element={<SelfieComponent />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/patriachy" element={<Patriachy />} />
          <Route path="/breath" element={<Breath />} />
          <Route path="/mindfulness" element={<MindfulnessStart />} />
          <Route path="/unheard" element={<Unheard />} />
          <Route path="/self-love" element={<SelfLove />} />
          <Route path="/confidence-image" element={<ConfidenceImage />} />
          <Route path="/about" element={<About />} />
          <Route path="/sexist" element={<Sexist />} />
          <Route path="/study" element={<Study />} />
          <Route path="/three-women" element={<ThreeWomen />} />
          <Route path="/superpower" element={<SuperPower />} />
          <Route path="/manifesto" element={<Manifesto />} />
          <Route path="/start-lock" element={<StartLock />} />
          <Route path="/leaf" element={<Leaf />} />
          <Route path="/locker" element={<Locker />} />
          <Route path="/beautiful" element={<Beautiful />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
