
import { motion } from "framer-motion";
import { ButtonScoreProps } from "../types/quizApp.types";

export const ButtonScore: React.FC<ButtonScoreProps> = ({
  answer,
  nextQuiz,
  quiz,
}): JSX.Element => {
  const renderTapAnimation = ()=>{
    let a ={}
    !!answer ? (a = {scale:0.95}) : {}
    return a
  }
  return (
    <div className="w-[600px] flex flex-row-reverse mt-8 justify-between  ">
      <motion.button
      
      whileTap={renderTapAnimation()}
        disabled={!answer}
        className={` w-fit px-8 py-2 rounded-md text-white bg-[#3f88c5] ${
          !answer ? "opacity-20" : "opacity-100"
        } `}
        onClick={nextQuiz}>
        Next
      </motion.button>
      <div className="w-fit px-4 py-2 bg-[#fff] rounded-md ">
        Quiz : {quiz + 1}
      </div>
    </div>
  );
};
