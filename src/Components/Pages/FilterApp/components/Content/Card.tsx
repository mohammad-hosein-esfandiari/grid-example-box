import img from "../../../../../assets/wood.jpg"

export interface MainProps {
  id: number;
  name: string;
  category: string;
  price: number;
  likeCount: number;
  createDate: string;
  color?: string;
  model?: string;
}

export const Card: React.FC<MainProps> = ({
  category,
  createDate,
  id,
  likeCount,
  name,
  price,
  color,
  model,
}) => {
  return (
    <div className=" flex flex-col h-[375px] shadow-md rounded-md bg-gray-300 overflow-hidden">
      <div className="w-full h-[180px] relative">
        <img
          className="object-cover object-center w-full h-full"
          src={img}
          alt=""
        />
        <div className="absolute flex items-center justify-between w-[80%] bottom-0 left-[50%] translate-x-[-50%] px-3 py-1 text-[10px] rounded-t-md bg-[#ffffff96]">

        <div >releaseDate:{createDate}</div>
        <div >LikeCount:{likeCount}</div>
        </div>
      </div>
      <div className="flex flex-col justify-between flex-1 bg-gray-500">
        <ul className="flex flex-col flex-1 px-3">
          <li className="flex justify-between items-center py-2">
            <span className="text-gray-300 text-[12px]">Name:</span>
            <h2 className="font-bold text-gray-300 text-[14px]">{name}</h2>
          </li>
          <li className="flex justify-between items-center py-2">
            <span className="text-gray-300 text-[12px]">Category:</span>
            <h2 className="font-bold text-gray-300 text-[14px]">{category}</h2>
          </li>
          {color && (
            <li className="flex justify-between items-center py-2">
              <span className="text-gray-300 text-[12px]">Color:</span>
              <h2 className="font-bold text-gray-300 text-[14px]">{color}</h2>
            </li>
          )}
          {model && (
            <li className="flex justify-between items-center py-2">
              <span className="text-gray-300 text-[12px]">Model:</span>
              <h2 className="font-bold text-gray-300 text-[14px]">{model}</h2>
            </li>
          )}
        </ul>
        <div className=" border-t-[1px]">
          <div className="flex justify-between items-center p-3">
            <div className="text-xl text-[#f3efef] font-bold">
              {price}<span className="text-yellow-500 ml-1">$</span>
            </div>
            <button className="rounded-md bg-blue-500 text-[10px] font-bold px-4 py-2 text-white">
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
