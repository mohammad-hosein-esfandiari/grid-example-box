import { FC } from "react";
import { DoseInitialStatesProps } from "../types/dose.types";
import { useSelector,useDispatch } from "react-redux";
import { onDropFunc } from "../store/index";


export const PlayGround: FC = () => {
const playGroundArray = useSelector((state:DoseInitialStatesProps)=>state.playgroundArray)
const dispatch = useDispatch()

return (
    <div className=" bg-1 p-10 rounded-lg">
      <div className="w-[400px] rounded-lg overflow-hidden bg-2 flex flex-wrap">
        {playGroundArray.map((item, index) => (
          <div
            onDrop={(event:React.MouseEvent<HTMLDivElement>)=>dispatch(onDropFunc(event.currentTarget.id))}
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
  );
};
