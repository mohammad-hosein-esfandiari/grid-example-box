import React, { useEffect, useState } from "react";

export const Dose = () => {
  const [turn, setTurn] = useState(false);
  const [arr1, setArr1] = useState([]);
  const [white, setWhite] = useState(32);
  const [black, setBlack] = useState(32);
  const [draggedColor, setDraggedColor] = useState("");
  const [winner, setWinner] = useState("");

  useEffect(() => {
    setArr1(newArr());
  }, []);

  useEffect(() => {
    if (winner === "black") {
      alert("black is winner");
    }
    if (winner === "white") {
      alert("winner is white");
    }
  }, [winner]);

  useEffect(() => {}, [draggedColor]);

  function newArr() {
    let arr = [];
    Array(64)
      .fill()
      .forEach((item, index) => {
        const xPos = (index + 1) % 8;
        const obj = {
          id: index + 1,
          y: Math.ceil((index + 1) / 8),
          x: xPos === 0 ? 8 : xPos,
          nut: "",
        };
        arr.push(obj);
      });

    return arr;
  }

  const check1 = (obj, arr) => {
    let xyPlusArray = [{ ...obj }];
    let xyMinuseArray = [];
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
  const check2 = (obj, arr) => {
    let xyPlusArray = [{ ...obj }];
    let xyMinuseArray = [];
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
  const check3 = (obj, arr) => {
    let xPlusArray = [{ ...obj }];
    let xMinuseArray = [];
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
  const check4 = (obj, arr) => {
    let yPlusArray = [{ ...obj }];
    let yMinuseArray = [];
    let reverseArr = [...arr].reverse();
    let num = { ...obj };
    let num2 = { ...obj };
    arr.forEach((item, index) => {
      if (item.x == num.x && item.y == num.y + 1) {
        if (num2.y <= 8 && num2.y > 0) {
          yPlusArray.push(item);
          num.y++;
        }
      }
    });
    reverseArr.forEach((item, index) => {
      if (item.x == num2.x && item.y == num2.y - 1) {
        if (num2.y <= 8 && num2.y > 0) {
          yMinuseArray.push(item);
          num2.y--;
        }
      }
    });

    const lastArr = [...yMinuseArray.reverse(), ...yPlusArray];
    const winnerCheckObj = lastFuncWinner(lastArr);

    return winnerCheckObj;
  };

  function lastFuncWinner(arr) {
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

  const onDragStartFunc = (color) => {
    if (color === "white" && turn) {
      setDraggedColor("white");
    }
    if (color === "black" && !turn) {
      setDraggedColor("black");
    }
  };
  const onDropFunc = (event) => {
    if (event.target.id) {
      const newArr = setToGroundDos(event.target.id);
      setArr1(newArr);
      if (draggedColor == "black" && !turn) {
        setBlack((prev) => prev - 1);
        setTurn(true);
      }
      if (draggedColor == "white" && turn) {
        setWhite((prev) => prev - 1);
        setTurn(false);
      }
      const findedNut = newArr.find((item) => item.id == event.target.id);
      const aaa = [
        check1(findedNut, newArr),
        check2(findedNut, newArr),
        check3(findedNut, newArr),
        check4(findedNut, newArr),
      ];
      const winWhite = aaa.some((item) => item.white == 5);
      const winBlack = aaa.some((item) => item.black == 5);
      if (winWhite) {
        setWinner("white");
      }
      if (winBlack) {
        setWinner("black");
      }
    }
  };
  const setToGroundDos = (id) => {
    let newArr = [...arr1];
    newArr.forEach((item) => {
      if (item.id == id && !item.nut) {
        item.nut = draggedColor;
      }
    });
    return newArr;
  };

  return (
    <section className="bg-[#4a3324] flex justify-center items-center">
      <div className="flex w-fit p-4">
        <div className=" bg-1 p-10 rounded-lg">
          <div className="w-[400px] rounded-lg overflow-hidden bg-2 flex flex-wrap">
            {arr1.map((item, index) => (
              <div
                onDrop={onDropFunc}
                onDragLeave={(e) => e.preventDefault()}
                onDragOver={(e) => e.preventDefault()}
                id={item.id}
                key={item.id}
                className={` flex h-[50px] w-[50px] ${
                  index + 1 < 57 && "border-b-[1px]"
                } ${
                  (index + 1) % 8 !== 0 && "border-r-[1px]"
                }   border-[#643f1867] items-center justify-center`}>
                {item.nut && (
                  <div className="w-full rounded-full h-full flex  items-center justify-center">
                    <div
                      className={`text-white shadow-md ${
                        item.nut && item.nut === "black"
                          ? "bg-circle-black"
                          : item.nut === "white" && "bg-circle-white"
                      } flex items-center justify-center rounded-full shadow1 w-[30px]  h-[30px]  select-none`}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="  flex h-fit ml-4 bg-2 rounded-lg">
            <div className="relative   w-[70px] h-full">
              {Array(black)
                .fill(0)
                .map((item, index) => (
                  <div
                    id={index + 1 + "black"}
                    draggable={!turn}
                    onDragStart={() => onDragStartFunc("black")}
                    className="text-white flex items-center justify-center rounded-full bg-circle-black w-[30px] absolute right-6 top-2 h-[30px] shadow1 cursor-pointer select-none"
                    key={index + "bbbb"}></div>
                ))}
              {Array(white)
                .fill(0)
                .map((item, index) => (
                  <div
                    id={index + 1 + "white"}
                    draggable={turn}
                    onDragStart={() => onDragStartFunc("white")}
                    className="text-black  flex items-center  justify-center rounded-full bg-circle-white w-[30px] absolute right-6 top-12 h-[30px] cursor-pointer select-none"
                    key={index + "cccc"}></div>
                ))}
            </div>
            <div className="  text-center pt-3 text-black font-bold text-[15px]  pr-4 ">
              <div className="flex items-center">
                <span className="text-[8px] mr-2 font-normal">
                  BLACK nut count :
                </span>{" "}
                {black}
              </div>
              <div className="mt-5 pb-2 flex items-center ">
                <span className="text-[8px] mr-2 font-normal">
                  WHITE nut count :
                </span>{" "}
                {white}
              </div>
            </div>
          </div>
          <div className=" flex items-center justify-center py-4 h-fit ml-4 bg-2 mt-4 rounded-lg text-[10px]">
            its{" "}
            <span className="font-bold text-[15px] text-[#4a3324] mx-2">
              {turn ? "WHITE" : "BLACK"}
            </span>{" "}
            turn
          </div>
        </div>
      </div>
    </section>
  );
};
