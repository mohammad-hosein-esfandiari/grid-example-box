import { createSlice } from "@reduxjs/toolkit";
import { DoseInitialStatesProps, NutsTypes } from "../types/dose.types";
import { current } from '@reduxjs/toolkit'
import {
  check1,
  check2,
  check3,
  check4,
  initialPlayGroundPositon,
  setToGroundDos,
} from "../utils/utils";

const initialState: DoseInitialStatesProps = {
  black: 32,
  white: 32,
  playgroundArray: [],
  turn: false,
  draggedColor: null,
  winner: null,
};

const doseSlice = createSlice({
  name: "dose",
  initialState,
  reducers: {
    initialPlaygroundArray: (state) => {
      const newArray = initialPlayGroundPositon();
      state.playgroundArray = newArray;
    },
    onDragStartFunc: (state, action) => {
      if (action.payload === "white" && state.turn) {
        state.draggedColor = "white";
      }
      if (action.payload === "black" && !state.turn)
        state.draggedColor = "black";
    },
    onDropFunc: (state, action) => {
      const { draggedColor, turn, playgroundArray } = state;
        
      if (action.payload) {
        const id = action.payload;
        const newArray = setToGroundDos(id, draggedColor, playgroundArray);
        state.playgroundArray = newArray;
        if (draggedColor === "black" && !turn) {
          state.black = state.black - 1;
          state.turn = true;
        }
        if (draggedColor === "white" && turn) {
          state.white = state.white - 1;
          state.turn = false;
        }
        const findedNut = newArray.find((item) => item.id == id);
        const nutObj = findedNut ;
        console.log(current(nutObj))
        // @ts-ignore
        const checksArray = [
          // @ts-ignore

          check1(nutObj, newArray),
          // @ts-ignore

          check2(nutObj, newArray),
          // @ts-ignore

          check3(nutObj, newArray),
          // @ts-ignore

          check4(nutObj, newArray),
        ];

        const winWhite = checksArray.some((item) => item.white == 5);
        const winBlack = checksArray.some((item) => item.black == 5);
        if (winWhite) {
          state.winner = "white";
        }
        if (winBlack) {
          state.winner = "black";
        }
      }
    },
  },
});
export const { onDragStartFunc, onDropFunc, initialPlaygroundArray } =
  doseSlice.actions;
export default doseSlice.reducer;
