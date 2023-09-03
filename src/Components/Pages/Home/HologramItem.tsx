import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate, useParams } from "react-router-dom";
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
  component,
  img,
  pos,
  id,
  name,
  setElementPosition,
  elementsPosition,
}): React.ReactNode => {
  const { slug } = useParams<{ slug?: string | undefined }>();
  const navigate = useNavigate();
  const [number] = useState<AnimationTypes>({
    x: Math.ceil(Math.random() * 10),
    y: Math.ceil(Math.random() * 10),
  });
  const RenderComponent = () => {
    return React.createElement(component);
  };
  const anim = returnedAnimation(elementsPosition);

  const linkClickHandler = (event: React.MouseEvent<HTMLElement>) => {
    if (!slug) {


      const pos = findPosFunc(name);
      setElementPosition({
        horizontal: pos.horizontal,
        vertical: pos.vertical,
      });
      navigate(`/${id}`);
    }
  };

  return (
    <div
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
        className={`relative w-full flex items-center justify-between ${
          slug ? "p-[36px]" : "p-5"
        } transition-all  delay-0 duration-400  h-full`}
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
          className={`cursor-pointer w-full h-[105%] ${slug ? "z-0": "z-10"}  ${centerAdiv}`}
          src={hologram}
          alt=""
        />
        <RenderComponent />
        {!slug || (slug && slug !== id) ? (
          <>
            <div
              className={` flex items-center justify-center bg-[#4ac5ee3c] w-[92%] h-[86%] text-center  z-0 ${centerAdiv} textShadow text-[40px] font-bold text-white `}>
              <span className=" z-10">{id}</span>
            </div>
          </>
        ) : null}
      </motion.div>
    </div>
  );
};
