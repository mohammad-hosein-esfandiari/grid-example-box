import image from "../../../assets/images.jpg";
import todolist from "../../../assets/todolist.png";
export enum POSITION {
  TR = "top-2 right-2",
  TL = "top-2 left-2",
  BR = "bottom-2 right-2",
  BL = "bottom-2 left-2",
}
export enum POSITION_NAMES {
  TR = "tr",
  TL = "tl",
  BR = "br",
  BL = "bl",
}
interface AnimationsTypes {
  r: string;
  l: string;
  t: string;
  b: string;
}
export interface HologramArrayProps {
  id: string;
  pos: POSITION;
  img: string;
  name: string;
  component: string;
}
export interface elementsPositionProps {
    horizontal?:string,
    vertical?:string
}
export interface HologramItemProps extends HologramArrayProps  {
    elementsPosition:elementsPositionProps,
    setElementPosition:(param:elementsPositionProps)=>void,
}

export const hologramArray: HologramArrayProps[] = [
  { id: "TODO-LIST", name: POSITION_NAMES.TR, pos: POSITION.TR, img: todolist,component:"TodoList" },
  { id: "QUIZ-APP", name: POSITION_NAMES.TL, pos: POSITION.TL, img: image,component:"QuizApp" },
  { id: "DOSE-GAME", name: POSITION_NAMES.BL, pos: POSITION.BL, img: image,component:"Dose" },
  {
    id: "SHOPPING-CART",
    name: POSITION_NAMES.BR,
    pos: POSITION.BR,
    img: image,
    component:"ShoppingCart"
  },
];
export const animationPos = (pos: string): string => {
  switch (pos) {
    case POSITION.TR:
      return "top-0 right-0";
    case POSITION.TL:
      return "top-0 left-0";
    case POSITION.BL:
      return "bottom-0 left-0";
    case POSITION.BR:
      return "bottom-0 right-0";
    default:
      return pos;
  }
};

export const positionNames: POSITION_NAMES[] = [
  POSITION_NAMES.TR,
  POSITION_NAMES.TL,
  POSITION_NAMES.BL,
  POSITION_NAMES.BR,
];

export const centerAdiv: string =
  "absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]";

export const itemName: string[] = hologramArray.map((item) => item.id);

export const findPosFunc = (selected:string) => {
  const topOrBottom = selected.split("")[0];
  const rightOrLeft = selected.split("")[1];
  const elementHorizontalPos = positionNames
    .filter((item) => item.includes(topOrBottom))
    .find((el) => el !== selected);
  const elementVerticalPos = positionNames
    .filter((item) => item.includes(rightOrLeft))
    .find((el) => el !== selected);
  return {
    horizontal: elementHorizontalPos,
    vertical: elementVerticalPos,
  };
};
export const animations = {
  r: "translate-x-[100%] ",
  l: "translate-x-[-100%] ",
  t: "translate-y-[-100%] ",
  b: "translate-y-[100%] ",
};

export const returnedAnimation = (elementsPosition:elementsPositionProps) => {
    const rightOrLeft = Object.keys(animations).find(
      (item) => item === elementsPosition?.horizontal?.split("")[1]
    );
    const topOrBottom = Object.keys(animations).find(
      (item) => item === elementsPosition?.vertical?.split("")[0]
    );

    // @ts-ignore
    const translateX = animations[rightOrLeft];
    // @ts-ignore
    const translateY = animations[topOrBottom];
    // @ts-ignore
    const translateXY = animations[rightOrLeft] + " " + animations[topOrBottom];

    return {
      h: translateX,
      v: translateY,
      xy: translateXY,
    };
  };
