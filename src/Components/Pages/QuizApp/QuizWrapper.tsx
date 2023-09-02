import { ButtonScore } from "./ButtonScore";
import { FinalScore } from "./FinalScore";
import { QuizWrapperType } from "./quiz";
import { AnimatePresence,motion } from "framer-motion";

export const QuizWrapper: React.FC<QuizWrapperType> = ({
  quiz,
  answer,
  nextQuiz,
  questions,
  score,
  children,
}): JSX.Element => {
  return (
    <div className="w-screen h-screen flex items-center justify-center flex-col bg-[#342e37]">
      <AnimatePresence mode="wait">
      {quiz <= questions.length - 1 ? (
        <motion.div animate={{rotate:"360deg"}} exit={{rotate:["360deg","180deg"]}}>
          <AnimatePresence mode="wait">{children[quiz]}</AnimatePresence>
          <ButtonScore answer={answer} quiz={quiz} nextQuiz={nextQuiz} />
        </motion.div>
      ) : (
        <motion.div animate={{rotate:["0deg","100deg","0deg"]}} >

          <FinalScore score={score} questionLength={questions.length} />
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};
