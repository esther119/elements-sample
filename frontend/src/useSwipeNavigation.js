// import { useNavigate } from "react-router-dom";
// import { useSwipeable } from "react-swipeable";

// export function useSwipeNavigation(
//   leftRoute,
//   rightRoute,
//   { enableSwipeLeft = true, enableSwipeRight = true } = {}
// ) {
//   const navigate = useNavigate();

//   // Handlers for swipe gestures
//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: () => {
//       if (enableSwipeLeft) {
//         console.log("Swiped Left");
//         navigate(leftRoute);
//       }
//     },
//     onSwipedRight: () => {
//       if (enableSwipeRight) {
//         console.log("Swiped Right");
//         navigate(rightRoute);
//       }
//     },
//   });

//   // Functions for simulating swipe with buttons
//   const simulateSwipeLeft = () => {
//     if (enableSwipeLeft) navigate(leftRoute);
//   };
//   const simulateSwipeRight = () => {
//     if (enableSwipeRight) navigate(rightRoute);
//   };

//   return { swipeHandlers, simulateSwipeLeft, simulateSwipeRight };
// }

// useSwipeNavigation.js
import { useNavigate } from "react-router-dom";
import { useSwipeable } from "react-swipeable";

export function useSwipeNavigation(leftRoute, rightRoute) {
  const navigate = useNavigate();

  // Handlers for swipe gestures
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      console.log("Swiped Left");
      navigate(leftRoute);
    },
    onSwipedRight: () => {
      console.log("Swiped Right");
      navigate(rightRoute);
    },
  });

  // Functions for simulating swipe with buttons
  const simulateSwipeLeft = () => navigate(leftRoute);
  const simulateSwipeRight = () => navigate(rightRoute);

  return { swipeHandlers, simulateSwipeLeft, simulateSwipeRight };
}
