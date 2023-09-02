import { useParams } from "react-router-dom";
import { ButtonScore } from "./ButtonScore";
import { FinalScore } from "./FinalScore";
import { QuizWrapperType } from "./quiz";
import { AnimatePresence, motion } from "framer-motion";

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
        slug !== "QUIZ-APP" ? "blur-[1.5px] scale-[0.6]" : "scale-1"
      } transition-all duration-300  h-fit flex items-center justify-center flex-col `}>
      <AnimatePresence mode="wait">
        {quiz <= questions.length - 1 ? (
          <motion.div
            animate={{ rotate: slug && "360deg" }}
            exit={{ rotate: slug && ["360deg", "180deg"] }}>
            <AnimatePresence mode="wait">{children[quiz]}</AnimatePresence>
            <ButtonScore answer={answer} quiz={quiz} nextQuiz={nextQuiz} />
          </motion.div>
        ) : (
          <motion.div animate={{ rotate: slug && ["0deg", "100deg", "0deg"] }}>
            <FinalScore score={score} questionLength={questions.length} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};