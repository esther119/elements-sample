import React from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Draggable component
const Draggable = ({ id, children }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "BOX",
    item: { id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
};

// Droppable component
const Droppable = ({ onDrop, children }) => {
  const [, drop] = useDrop(() => ({
    accept: "BOX",
    drop: (item, monitor) => onDrop(item.id),
  }));

  return <div ref={drop}>{children}</div>;
};

// App component that uses both Draggable and Droppable
const Locker = () => {
  const handleDrop = (id) => {
    console.log(`${id} dropped`);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Droppable onDrop={handleDrop}>
        <div style={{ width: 200, height: 200, border: "1px solid black" }}>
          <Draggable id="draggable-box">Drag me</Draggable>
        </div>
      </Droppable>
    </DndProvider>
  );
};

export default Locker;
