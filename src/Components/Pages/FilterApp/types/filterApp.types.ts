export interface ProductsType {
    id: number;
    name: string;
    category: CATEGORIES;
    price: number;
    likeCount: number;
  }
  
  export enum CATEGORIES {
    digital = "digital",
    drinks = "drinks",
    food = "food",
  }
  
  export enum FOOD {
    vegetables = "vegetables",
    fruits = "fruits",
    meal = "meal",
  }
  
  export enum CAR {
    modern = "modern",
    classic = "classic",
    offRoad = "offroad",
  }
  
  export enum DIGITAL {
    mobile = "mobile",
    laptop = "laptop",
    accessories = "accessories",
  }
  
  export interface inputArrayTypes {
    id:string
    type:"checkbox"|"range"|"radio"
    content:string[]
}