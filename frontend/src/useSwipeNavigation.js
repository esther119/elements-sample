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
