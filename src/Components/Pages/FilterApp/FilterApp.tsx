import { useEffect } from "react";
import { Content } from "./components/Content/Content";
import { SideBar } from "./components/SideBar/SideBar";
import { products2 } from "./products";
import useFilter from "./store/filtering";

export const FilterApp = () => {
  const setProducts = useFilter((state) => state.setProducts);

  useEffect(() => {
    setProducts(products2);
  }, []);
  return (
    <div className="w-screen h-screen bg-gray-300">
      <div className="w-full h-full xl:container grid grid-cols-5 gap-2">
        <SideBar />
        <Content />
      </div>
    </div>
  );
};
