export interface NutsTypes {
  id: string ;
  x: number;
  y: number;
  nut: "white" | "black" | null;
}
export interface DraggableNutsProps {
  turn: boolean;
  black: number;
  white: number;
  onDragStartFunction: (nutColor: "white" | "black") => void;
}

export interface OnDragStartFuncParams {
  (
    color: "white" | "black",
    setDraggedColor: (color: "white" | "black") => void,
    turn: boolean
  ): void;
}

export interface DoseInitialStatesProps {
  black:number,
  white:number,
  playgroundArray:NutsTypes[],
  turn:boolean,
  draggedColor:"black"|"white"|null,
  winner:"black"|"white"|null
}


export interface setToGroundDosProps {
  (
    id:string,
    draggedColor:"black"|"white"| null,
    arr:NutsTypes[]
  ):NutsTypes[]
}