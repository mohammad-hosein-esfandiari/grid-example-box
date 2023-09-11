import { useEffect } from "react";
import { Content } from "./components/Content/Content";
import { SideBar } from "./components/SideBar/SideBar";
import { products2 } from "./utils/products";
import useFilter from "./store/filtering";

export const FilterApp:React.FC = ():JSX.Element => {
  const setProducts = useFilter((state) => state.setProducts);

  useEffect(() => {
    setProducts(products2);
  }, []);
  const click = (event:React.MouseEvent<HTMLDivElement>)=>{
    console.log(event)
  }
  return (
    <div onClick={click} className="w-full h-full  bg-gray-300">
      <div className="w-full h-full xl:container grid grid-cols-5 gap-2">
        <SideBar />
        <Content />
      </div>
    </div>
  );
};
