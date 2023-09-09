import React from "react";
import { DraggableNutsProps } from "./dose.types";

type WhiteNutsProps = Omit<DraggableNutsProps, "black">;
export const WhiteNuts: React.FC<WhiteNutsProps> = ({
  onDragStartFunction,
  turn,
  white,
}) => {
  return (
    <>
      {Array(white)
        .fill(0)
        .map((item, index) => (
          <div
            id={index + 1 + "white"}
            draggable={turn}
            onDragStart={() => onDragStartFunction("white")}
            className="text-black  flex items-center  justify-center rounded-full bg-circle-white w-[30px] absolute right-6 top-12 h-[30px] cursor-pointer select-none"
            key={index + "cccc"}></div>
        ))}
    </>
  );
};
