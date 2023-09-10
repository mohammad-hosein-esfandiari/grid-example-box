import { CAR, DIGITAL, FOOD, inputArrayTypes } from "../types/filterApp.types";

export const products2 = {
  food: [
    {
      id: 1,
      name: "Steak",
      category: FOOD.meal,
      price: 1100,
      likeCount: 0,
      createDate: "2017/01/01",
    },
    {
      id: 2,
      name: "carrot",
      category: FOOD.fruits,
      price: 30,
      likeCount: 2,
      createDate: "2017/01/01",
    },
    {
      id: 3,
      name: "gishniz",
      category: FOOD.vegetables,
      price: 2,
      likeCount: 3,
      createDate: "2017/01/01",
    },
  ],
  digital: [
    {
      id: 1,
      name: "Asus Rog G513",
      category: DIGITAL.laptop,
      price: 20000,
      likeCount: 30,
      createDate: "2017/01/01",
      color: "gray",
    },
    {
      id: 2,
      name: "Galaxy A52",
      category: DIGITAL.mobile,
      price: 10000,
      likeCount: 9,
      createDate: "2017/01/01",
      color: "blue",
    },
    {
      id: 3,
      name: "huawei freebuds pro",
      category: DIGITAL.accessories,
      price: 800,
      likeCount: 7,
      createDate: "2017/01/01",
      color: "white",
    },
  ],
  car: [
    {
      id: 1,
      name: "BMW e46",
      category: CAR.classic,
      price: 700000,
      likeCount: 10,
      createDate: "2017/01/01",
      model: "2017",
      color: "red",
    },
    {
      id: 2,
      name: "Mercedes Bens GClass",
      category: CAR.offRoad,
      price: 700000,
      likeCount: 100,
      createDate: "2017/01/01",
      model: "2017",
      color: "black",
    },
    {
      id: 3,
      name: "Porsche 911",
      category: CAR.modern,
      price: 700000,
      likeCount: 5,
      createDate: "2017/01/01",
      model: "2017",
      color: "blue",
    },
  ],
};

export const inputArray: inputArrayTypes[] = [
  {
    id: "category",
    type: "checkbox",
    content: ["all", "digital", "food", "car"],
  },
  { id: "version", type: "radio", content: ["newest", "oldest", "popular"] },
  { id: "price", type: "checkbox", content: ["cheapest", "expensive"] },
  { id: "range", type: "range", content: ["minPrice", "maxPrice"] },
];
