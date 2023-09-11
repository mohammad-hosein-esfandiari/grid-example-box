import { useSelector } from "react-redux";
import { DoseInitialStatesProps } from "../types/dose.types";

export const NutsCount: React.FC = () => {
  const black = useSelector((state: DoseInitialStatesProps) => state.black);
  const white = useSelector((state: DoseInitialStatesProps) => state.white);

  return (
    <div className="  text-center pt-3 text-black font-bold text-[15px]  pr-4 ">
      <div className="flex items-center">
        <span className="text-[8px] mr-2 font-normal">BLACK nut count :</span>{" "}
        {black}
      </div>
      <div className="mt-5 pb-2 flex items-center ">
        <span className="text-[8px] mr-2 font-normal">WHITE nut count :</span>{" "}
        {white}
      </div>
    </div>
  );
};
