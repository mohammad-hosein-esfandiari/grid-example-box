export const Turn = ({ turn }: { turn: boolean }) => {
  return (
    <div className=" flex items-center justify-center py-4 h-fit ml-4 bg-2 mt-4 rounded-lg text-[10px]">
      its{" "}
      <span className="font-bold text-[15px] text-[#4a3324] mx-2">
        {turn ? "WHITE" : "BLACK"}
      </span>{" "}
      turn
    </div>
  );
};
