import React from "react";
import { BlackNuts } from "./BlackNuts";
import { WhiteNuts } from "./WhiteNuts";
import { NutsCount } from "./NutsCount";

export const DraggableNuts: React.FC = () => {
  return (
    <div className="  flex h-fit ml-4 bg-2 rounded-lg">
      <div className="relative   w-[70px] h-full">
        <BlackNuts />
        <WhiteNuts />
      </div>
      <NutsCount />
    </div>
  );
};
