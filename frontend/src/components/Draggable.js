import React, { useState } from "react";

const Draggable = ({ children }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [originalPosition, setOriginalPosition] = useState({ x: 0, y: 0 });
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const startDrag = (e) => {
    setIsDragging(true);
    setOriginalPosition({
      x: e.clientX - translate.x,
      y: e.clientY - translate.y,
    });
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    setTranslate({
      x: e.clientX - originalPosition.x,
      y: e.clientY - originalPosition.y,
    });
  };

  const endDrag = () => {
    setIsDragging(false);
  };

  return (
    <div
      onMouseDown={startDrag}
      onMouseMove={onDrag}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      className={`cursor-${isDragging ? "grabbing" : "grab"}`}
      style={{
        transform: `translate(${translate.x}px, ${translate.y}px)`,
        transition: "transform 0.2s",
      }}
    >
      {children}
    </div>
  );
};
