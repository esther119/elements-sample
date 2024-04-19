// src / App.js;
// App.js;
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import Home from "./componenets/Home";
import StrongConfidentComponent from "./components/StrongConfidence";
// import About from "./components/About";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import AboutPage from "./AboutPage";
import Contact from "./components/Contact";
import SelfieComponent from "./components/SelfieComponent";
// import SwipeableComponent from "./SwipeableComponent";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
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
        </nav>
        <Routes>
          <Route path="/" exact element={<StrongConfidentComponent />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/selfie" element={<SelfieComponent />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// import React from "react";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <SwipeableComponent />
//       </header>
//     </div>
//   );
// }

// export default App;
