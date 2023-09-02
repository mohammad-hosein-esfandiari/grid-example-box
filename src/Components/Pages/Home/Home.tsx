import { useEffect, useState } from "react";
import { HologramItem } from "./HologramItem";
import { useParams } from "react-router-dom";
import {
  HologramArrayProps,
  elementsPositionProps,
  findPosFunc,
  hologramArray,
} from "./hologram";

export const Home: React.FC = (): React.ReactNode => {
  const { slug } = useParams<{ slug?: string | undefined }>();
  const [elementsPosition, setElementPosition] =
    useState<elementsPositionProps>({ horizontal: "", vertical: "" });
  useEffect(() => {
    const pos = hologramArray.find((item) => item.id == slug);
    if (slug) {
      const elementPos = findPosFunc(pos!.name);
      setElementPosition(elementPos);
    }
  }, []);

  return (
    <div className=" h-[100vh] w-[100vw] overflow-hidden  p-0 my-0 mx-auto">
      {hologramArray.map((item: HologramArrayProps) => (
        <HologramItem
          key={item.id}
          elementsPosition={elementsPosition}
          setElementPosition={setElementPosition}
          {...item}
        />
      ))}
    </div>
  );
};
