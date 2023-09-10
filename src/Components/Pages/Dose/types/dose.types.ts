export interface NutsTypes {
  id: string;
  x: number;
  y: number;
  nut: "white" | "black";
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
