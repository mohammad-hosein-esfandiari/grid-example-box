import { create } from "zustand";
import { MainProps } from "../components/Content/Card";
import { products2 } from "../utils/products";

interface FilterProps {
  products: MainProps[];
  filter: {
    category: string[];
    version: string;
    price: string;
    range: {
      min: number;
      max: number;
    };
  };
  setProducts: (obj: objTypes) => void;
}

interface objTypes {
  [name: string]: MainProps[];
}

const useFilter = create<FilterProps>((set) => ({
  products: [],
  filter: {
    category: ["all"],
    version: "newest",
    price: "",
    range: { min: 0, max: 100 },
  },

  setProducts: (obj: objTypes) =>
    set((state) => {
      let array: MainProps[] = [];
      for (const product in obj) {
        array.push(...Object.values(obj[product]));
      }

      let filteredArray: MainProps[] = [...array];
      if (state.filter.category.includes("all")) {
        filteredArray = array;
      } else {
        let arr: MainProps[] = [];
        state.filter.category.forEach((item) => {
          arr.push(...Object.values(obj[item]));
        });
        filteredArray = arr;
      }
      return {
        products: filteredArray,
      };
    }),
}));

export default useFilter;
