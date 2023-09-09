import React from "react";
import { BlackNuts } from "./BlackNuts";
import { WhiteNuts } from "./WhiteNuts";
import { NutsCount } from "./NutsCount";
import { DraggableNutsProps } from "./dose.types";

export const DraggableNuts: React.FC<DraggableNutsProps> = ({
  black,
  turn,
  white,
  onDragStartFunction,
}) => {
  return (
    <div className="  flex h-fit ml-4 bg-2 rounded-lg">
      <div className="relative   w-[70px] h-full">
        <BlackNuts
          black={black}
          turn={turn}
          onDragStartFunction={onDragStartFunction}
        />
        <WhiteNuts
          white={white}
          turn={turn}
          onDragStartFunction={onDragStartFunction}
        />
      </div>
      <NutsCount black={black} white={white} />
    </div>
  );
};
