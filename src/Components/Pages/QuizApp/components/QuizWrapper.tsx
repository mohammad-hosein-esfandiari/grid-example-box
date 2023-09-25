import { useParams } from "react-router-dom";
import { ButtonScore } from "./ButtonScore";
import { FinalScore } from "./FinalScore";
import { AnimatePresence, motion } from "framer-motion";
import { Slug } from "../../Home/types/hologram.types";
import { QuizWrapperType } from "../types/quizApp.types";



export const QuizWrapper: React.FC<QuizWrapperType> = ({
  quiz,
  answer,
  nextQuiz,
  questions,
  score,
  children,
}): JSX.Element => {
  const { slug } = useParams<{ slug?: string | undefined }>();

  return (
    <div
      className={`w-fit ${
        slug !== Slug.quiz ? "blur-[1.5px] scale-[0.6]" : "scale-1"
      } transition-all duration-300 z-10 h-fit flex items-center justify-center flex-col `}>
      <AnimatePresence mode="wait">
        {quiz <= questions.length - 1 ? (
          <motion.div
            animate={{ rotate: slug === Slug.quiz ? "360deg" : "" }}
            exit={{ rotate: slug === Slug.quiz ? ["360deg", "180deg"] : "" }}>
            <AnimatePresence mode="wait">{children[quiz]}</AnimatePresence>
            <ButtonScore answer={answer} quiz={quiz} nextQuiz={nextQuiz} />
          </motion.div>
        ) : (
          <motion.div
            animate={{
              rotate: slug === Slug.quiz ? ["0deg", "100deg", "0deg"] : "",
            }}>
            <FinalScore score={score} questionLength={questions.length} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
