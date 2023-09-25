import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PlayGround } from "./components/PlayGround";
import { Details } from "./components/Details";
import { Turn } from "./components/Turn";
import { DraggableNuts } from "./components/DraggableNuts";
import { initialPlaygroundArray } from "./store/index";
import { DoseInitialStatesProps } from "./types/dose.types";
import { useParams } from "react-router-dom";
import { Slug } from "../Home/types/hologram.types";
export const Dose:React.FC = ():JSX.Element => {
  const winner = useSelector((state: DoseInitialStatesProps) => state.winner);
  const dispatch = useDispatch();
  const { slug } = useParams<{ slug?: string | undefined }>();
  useEffect(() => {
    dispatch(initialPlaygroundArray());
  }, []);

  useEffect(() => {
    if (winner === "black") {
      alert("black is winner");
    }
    if (winner === "white") {
      alert("winner is white");
    }
    
  }, [winner]);

  return (
    <section className="bg-[#4a3324] flex justify-center border-2 z-[20] w-full h-full items-center">
      <div className={`flex w-fit p-10 z-10 ${slug && slug === Slug.dose ? "scale-[1]": "scale-[0.4]"} `}>
        <PlayGround />
        <Details>
          <DraggableNuts />
          <Turn />
        </Details>
      </div>
    </section>
  );
};
