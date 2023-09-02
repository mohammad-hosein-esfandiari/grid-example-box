import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import hologram from "../../../assets/hologram.png";
import {
  HologramItemProps,
  animationPos,
  animations,
  centerAdiv,
  elementsPositionProps,
  findPosFunc,
  returnedAnimation,
} from "./hologram";
interface AnimationTypes {
  x: number;
  y: number;
}

export const HologramItem: React.FC<HologramItemProps> = ({
  img,
  pos,
  id,
  name,
  setElementPosition,
  elementsPosition,
}): React.ReactNode => {
  const { slug } = useParams<{ slug?: string | undefined }>();
  const [number] = useState<AnimationTypes>({
    x: Math.ceil(Math.random() * 10),
    y: Math.ceil(Math.random() * 10),
  });
  const anim = returnedAnimation(elementsPosition);

  const linkClickHandler = () => {
    const pos = findPosFunc(name);
    setElementPosition({ horizontal: pos.horizontal, vertical: pos.vertical });
  };
  

  return (
    
    <Link
      to={`/${id}`}
      onClick={linkClickHandler}
      className={` ${
        slug && slug == id
          ? "w-[100%]  h-[100%] " + animationPos(pos)
          : "w-[50%] h-[50%] " + pos
      } ${
        slug && slug !== id
          ? `${
              elementsPosition.horizontal === name
                ? anim.h
                : elementsPosition.vertical === name
                ? anim.v
                : anim.xy
            }`
          : ""
      }  transition-all duration-1000  p-4 absolute `}>
      <motion.div
        className="relative w-full h-full"
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, number.x, number.x, 0, 0],
          y: [0, 0, number.y, number.y, 0],
        }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
          duration: 6,
        }}>
        <img
          className={`cursor-pointer w-full h-[105%]  z-10 ${centerAdiv}`}
          src={hologram}
          alt=""
        />
     
        <img
          className={`brightness-[1.7] opacity-40 object-fit object-cover w-[92%] h-[86%] ${centerAdiv}`}
          src={img}
          alt=""
        />
        {!slug || (slug && slug !== id) ? (
          <>
            <div
              className={` flex items-center justify-center bg-[#4ac5ee3c] w-[92%] h-[86%] text-center  z-0 ${centerAdiv} textShadow text-[40px] font-bold text-white `}>
              <span className=" z-10">{id}</span>
            </div>
          </>
        ) : null}
      </motion.div>
    </Link>
  );
};
