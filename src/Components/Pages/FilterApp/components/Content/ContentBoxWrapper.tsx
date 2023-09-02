import { useEffect } from "react";
import useFilter from "../../store/filtering";
import { Card } from "./Card";

export const ContentBoxWrapper = () => {
  const products = useFilter((state) => state.products);




  return (
    <div className=" flex-1 grid grid-cols-4 gap-6">
      {products.map((item,index) => (
        <Card key={item.id+index} {...item} />
      ))}
    </div>
  );
};
