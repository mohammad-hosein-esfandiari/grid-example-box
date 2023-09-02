
interface FinalScoreProps {
  score: number;
  questionLength: number;
}

export const FinalScore: React.FC<FinalScoreProps> = ({
  score,
  questionLength,
}) => {
  return (
    <div  className="bg-[#fff] font-bold text-center p-28 rounded-md text-[28px] ">
      {score == questionLength && (
        <div className="text-green-500 mb-4 text-[50px]">
          CONGRADULATIONS!!!
        </div>
      )}
      Your Score is
      <div>
        <span className="font-bold text-[130px] w-full text-center">
          {" "}
          {score}
        </span>
        <span> / {questionLength}</span>
      </div>
    </div>
  );
};
