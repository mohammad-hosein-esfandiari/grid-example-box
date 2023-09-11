import React from "react";
import { DoseInitialStatesProps } from "../types/dose.types";
import { useDispatch, useSelector } from "react-redux";
import { onDragStartFunc } from "../store/index";



export const WhiteNuts: React.FC = () => {
  const turn = useSelector((state: DoseInitialStatesProps) => state.turn);
  const white = useSelector((state: DoseInitialStatesProps) => state.white);
  const dispatch = useDispatch();
  return (
    <>
      {Array(white)
        .fill(0)
        .map((item, index) => (
          <div
            id={index + 1 + "white"}
            draggable={turn}
            onDragStart={() => dispatch(onDragStartFunc("white"))}
            className="text-black  flex items-center  justify-center rounded-full bg-circle-white w-[30px] absolute right-6 top-12 h-[30px] cursor-pointer select-none"
            key={index + "cccc"}></div>
        ))}
    </>
  );
};
