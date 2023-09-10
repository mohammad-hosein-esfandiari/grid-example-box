import React from "react";
import { inputArray } from "../../utils/products";
import { InputWrapper } from "./InputWrapper";


export const SideBar: React.FC = () => {
  return (
    <div className="col-span-1 h-full shadow-md px-4 bg-gray-500">
      <h1 className=" font-bold text-[30px] my-4  rounded-md w-full text-center uppercase p-2 bg-gray-300 ">Filtering App</h1>
      {inputArray.map((item) => (
        <InputWrapper key={item.id} {...item} />
      ))}
    </div>
  );
};
