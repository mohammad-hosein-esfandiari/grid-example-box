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
  export enum Slug {
    quiz = "QUIZ-APP",
    todolist = "TODO-LIST",
    shoppingCart = "SHOPPING-CART",
    dose = "DOSE-GAME",
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
    component: any;
  }
  export interface elementsPositionProps {
    horizontal?: string;
    vertical?: string;
  }
  export interface HologramItemProps extends HologramArrayProps {
    elementsPosition: elementsPositionProps;
    setElementPosition: (param: elementsPositionProps) => void;
  }