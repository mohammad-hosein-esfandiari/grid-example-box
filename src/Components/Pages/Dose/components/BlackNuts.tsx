import React from "react";
import { DraggableNutsProps } from "../types/dose.types";


type BlackNutsProps = Omit<DraggableNutsProps, "white">;

export const BlackNuts: React.FC<BlackNutsProps> = ({
  black,
  turn,
  onDragStartFunction,
}) => {
  return (
    <>
      {Array(black)
        .fill(0)
        .map((item, index) => (
          <div
            id={index + 1 + "black"}
            draggable={!turn}
            onDragStart={() => onDragStartFunction("black")}
            className="text-white flex items-center justify-center rounded-full bg-circle-black w-[30px] absolute right-6 top-2 h-[30px] shadow1 cursor-pointer select-none"
            key={index + "bbbb"}></div>
        ))}
    </>
  );
};
