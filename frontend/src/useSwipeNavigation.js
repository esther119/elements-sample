import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

export function useSwipeNavigation(
  leftRoute,
  rightRoute,
  leftState = {},
  rightState = {}
) {
  const navigate = useNavigate();

  // Updated handlers for swipe gestures to include state
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      console.log("Swiped Left");
      navigate(leftRoute, { state: leftState });
    },
    onSwipedRight: () => {
      console.log("Swiped Right");
      navigate(rightRoute, { state: rightState });
    },
  });

  // Updated functions for simulating swipe with buttons to include state
  const simulateSwipeLeft = () => navigate(leftRoute, { state: leftState });
  const simulateSwipeRight = () => navigate(rightRoute, { state: rightState });

  return { swipeHandlers, simulateSwipeLeft, simulateSwipeRight };
}

// useSwipeNavigation.js
// import { useNavigate } from "react-router-dom";
// import { useSwipeable } from "react-swipeable";

// export function useSwipeNavigation(leftRoute, rightRoute) {
//   const navigate = useNavigate();

//   // Handlers for swipe gestures
//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: () => {
//       console.log("Swiped Left");
//       navigate(leftRoute);
//     },
//     onSwipedRight: () => {
//       console.log("Swiped Right");
//       navigate(rightRoute);
//     },
//   });

//   // Functions for simulating swipe with buttons
//   const simulateSwipeLeft = () => navigate(leftRoute);
//   const simulateSwipeRight = () => navigate(rightRoute);

//   return { swipeHandlers, simulateSwipeLeft, simulateSwipeRight };
// }
