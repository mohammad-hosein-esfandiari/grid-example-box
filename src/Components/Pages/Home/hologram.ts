import todoListImg from "../../../assets/todolist.png"
import quizAppImg from "../../../assets/qiuz.png"
import doseAppImg from "../../../assets/dose.png"
import { QuizApp } from "../QuizApp/QuizApp";
import { TodoList } from "../TodoList/TodoList";
import { HologramArrayProps, POSITION, POSITION_NAMES, Slug, elementsPositionProps } from "./hologram.types";


export const hologramArray: HologramArrayProps[] = [
  {
    id: Slug.todolist,
    name: POSITION_NAMES.TR,
    pos: POSITION.TR,
    img: todoListImg,
    component: TodoList,
  },
  {
    id: Slug.quiz,
    name: POSITION_NAMES.TL,
    pos: POSITION.TL,
    img: quizAppImg,
    component: QuizApp,
  },
  {
    id: Slug.dose,
    name: POSITION_NAMES.BL,
    pos: POSITION.BL,
    img: doseAppImg,
    component: TodoList,
  },
  {
    id: Slug.shoppingCart,
    name: POSITION_NAMES.BR,
    pos: POSITION.BR,
    img: todoListImg,
    component: QuizApp,
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

export const findPosFunc = (selected: string) => {
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

export const returnedAnimation = (elementsPosition: elementsPositionProps) => {
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
