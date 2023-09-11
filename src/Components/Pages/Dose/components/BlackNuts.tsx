import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { DoseInitialStatesProps } from "../types/dose.types";
import { onDragStartFunc } from "../store/index";

export const BlackNuts: React.FC = () => {
  const turn = useSelector((state: DoseInitialStatesProps) => state.turn);
  const black = useSelector((state: DoseInitialStatesProps) => state.black);
  const dispatch = useDispatch();
  return (
    <>
      {Array(black)
        .fill(0)
        .map((item, index) => (
          <div
            id={index + 1 + "black"}
            draggable={!turn}
            onDragStart={() => dispatch(onDragStartFunc("black"))}
            className="text-white flex items-center justify-center rounded-full bg-circle-black w-[30px] absolute right-6 top-2 h-[30px] shadow1 cursor-pointer select-none"
            key={index + "bbbb"}></div>
        ))}
    </>
  );
};
