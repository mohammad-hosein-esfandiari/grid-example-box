import { current } from "@reduxjs/toolkit";
import { NutsTypes, OnDragStartFuncParams, setToGroundDosProps } from "../types/dose.types";




export const onDragStartFunc:OnDragStartFuncParams = (color,setDraggedColor,turn) => {
    if (color === "white" && turn) {
      setDraggedColor("white");
    }
    if (color === "black" && !turn) {
      setDraggedColor("black");
    }
  };
  
  export function initialPlayGroundPositon():NutsTypes[] {
    let arr:NutsTypes[] = [];
    Array(64)
      .fill(0)
      .forEach((item, index) => {
        const xPos = (index + 1) % 8;
        const obj = {
          id: String(index + 1),
          y: Math.ceil((index + 1) / 8),
          x: xPos === 0 ? 8 : xPos,
          nut: null,
        };
        arr.push(obj);
      });

    return arr;
  }

  // const onDropFunc = (event) => {
  //   if (event.target.id) {
  //     const newArr = setToGroundDos(event.target.id);
  //     setArr1(newArr);
  //     if (draggedColor == "black" && !turn) {
  //       setBlack((prev) => prev - 1);
  //       setTurn(true);
  //     }
  //     if (draggedColor == "white" && turn) {
  //       setWhite((prev) => prev - 1);
  //       setTurn(false);
  //     }
  //     const findedNut = newArr.find((item) => item.id == event.target.id);
  //     const aaa = [
  //       check1(findedNut, newArr),
  //       check2(findedNut, newArr),
  //       check3(findedNut, newArr),
  //       check4(findedNut, newArr),
  //     ];
  //     const winWhite = aaa.some((item) => item.white == 5);
  //     const winBlack = aaa.some((item) => item.black == 5);
  //     if (winWhite) {
  //       setWinner("white");
  //     }
  //     if (winBlack) {
  //       setWinner("black");
  //     }
  //   }
  // };


  export const setToGroundDos:setToGroundDosProps = (id,draggedColor,arr):NutsTypes[] => {
    let newArr = [...arr];
    newArr.forEach((item) => {
      if (item.id == id && !item.nut) {
        item.nut = draggedColor;
      }
    });
    return newArr;
  };



  export const check1 = (obj:NutsTypes, arr:NutsTypes[]) => {
    let xyPlusArray = [{ ...obj }];
    let xyMinuseArray:NutsTypes[] = [];
    let reverseArr = [...arr].reverse();
    let num = { ...obj };
    let num2 = { ...obj };
    arr.forEach((item, index) => {
      if (item.x == num.x + 1 && item.y == num.y + 1) {
        if (num.x <= 8 && num.x > 0 && num.y <= 8 && num.y > 0) {
          num.x++;
          num.y++;
          xyPlusArray.push(item);
        }
      }
    });
    reverseArr.forEach((item, index) => {
      if (item.x == num2.x - 1 && item.y == num2.y - 1) {
        if (num2.x <= 8 && num2.x > 0 && num2.y <= 8 && num2.y > 0) {
          num2.x--;
          num2.y--;
          xyMinuseArray.push(item);
        }
      }
    });
    const lastArr = [...xyMinuseArray.reverse(), ...xyPlusArray];
    const winnerCheckObj = lastFuncWinner(lastArr);
    return winnerCheckObj;
  };
  export const check2 = (obj:NutsTypes, arr:NutsTypes[]) => {
    let xyPlusArray = [{ ...obj }];
    let xyMinuseArray:NutsTypes[] = [];
    let reverseArr = [...arr].reverse();
    let num = { ...obj };
    let num2 = { ...obj };
    reverseArr.forEach((item, index) => {
      if (item.x == num.x + 1 && item.y == num.y - 1) {
        if (num.x <= 8 && num.x > 0 && num.y <= 8 && num.y > 0) {
          xyMinuseArray.push(item);
          num.x++;
          num.y--;
        }
      }
    });
    arr.forEach((item, index) => {
      if (item.x == num2.x - 1 && item.y == num2.y + 1) {
        if (num2.x <= 8 && num2.x > 0 && num2.y <= 8 && num2.y > 0) {
          xyPlusArray.push(item);
          num2.x--;
          num2.y++;
        }
      }
    });
    const lastArr = [...xyMinuseArray.reverse(), ...xyPlusArray];
    const winnerCheckObj = lastFuncWinner(lastArr);
    return winnerCheckObj;
  };
  export const check3 = (obj:NutsTypes, arr:NutsTypes[]) => {
    let xPlusArray = [{ ...obj }];
    let xMinuseArray:NutsTypes[] = [];
    let reverseArr = [...arr].reverse();
    let num = { ...obj };
    let num2 = { ...obj };
    arr.forEach((item, index) => {
      if (item.x == num.x + 1 && item.y == num.y) {
        if (num.x <= 8 && num.x > 0) {
          xPlusArray.push(item);
          num.x++;
        }
      }
    });
    reverseArr.forEach((item, index) => {
      if (item.x == num2.x - 1 && item.y == num2.y) {
        if (num2.x <= 8 && num2.x > 0) {
          xMinuseArray.push(item);
          num2.x--;
        }
      }
    });
    const lllArr = [...xMinuseArray].reverse();

    const lastArr = [...lllArr, ...xPlusArray];
    const winnerCheckObj = lastFuncWinner(lastArr);
    return winnerCheckObj;
  };
  export const check4 = (obj:NutsTypes, arr:NutsTypes[]) => {
    let yPlusArray = [{ ...obj }];
    let yMinuseArray:NutsTypes[] = [];
    let reverseArr = [...arr].reverse();
    let num = { ...obj };
    let num2 = { ...obj };
    arr.forEach((item, index) => {
      if (item.x == num.x && item.y == num.y + 1) {
        if (num2.y <= 8 && num2.y > 0) {
          yPlusArray.push(item);
          num.y++;
          console.log({...item})
        }
      }
    });
    const findedNuts = arr.filter((item)=>{

      return item.x === num.x
    })
   
    reverseArr.forEach((item, index) => {
      if (item.x == num2.x && item.y == num2.y - 1) {
        if (num2.y <= 8 && num2.y > 0) {
          yMinuseArray.push(item);
          num2.y--;
        }
      }
    });
    // console.log("plus",yPlusArray)
    // console.log("minuse",yMinuseArray)
    const lastArr = [...yMinuseArray.reverse(), ...yPlusArray];
    const winnerCheckObj = lastFuncWinner(lastArr);
console.log(winnerCheckObj)
    return winnerCheckObj;
  };


  export function lastFuncWinner(arr:NutsTypes[]) {
    let newArr = [...arr].reverse();
    let white = 0;
    let black = 0;
    newArr.forEach((item) => {
      if (item.nut === "white") {
        black = 0;
        white++;
      } else if (item.nut == "black") {
        white = 0;
        black++;
      }
    });
    return { white, black };
  }