import { motion } from "framer-motion";
import { QuestionTypes } from "../types/quizApp.types";

interface SingleQuizType extends QuestionTypes {
  answer: string;
  clickHandler: (answer: string) => void;
}
export const SingleQuiz: React.FC<SingleQuizType> = ({
  answers,
  correctAnswer,
  text,
  answer,
  clickHandler,
}): JSX.Element => {
  const animateFunc = (index: number) => {
    const animation = {
      initial: { opacity: 0, scale: 0.5 },
      animate: {
        opacity: 1,
        scale: 1,
        transition: { delay: (index + 1) * 0.25 },
      },
      exit: {
        opacity: 0,
        scale: 0.5,
        transition: { delay: (index + 1) * 0.25 },
      },
    };
    return animation;
  };

  const checkFunction = (text: string) => {
    let a = "";
    text == correctAnswer && (a = "bg-[#a2d729]");
    answer == text && text !== correctAnswer && (a = "bg-[#9b1d20]");
    answer !== text && text !== correctAnswer && (a = "bg-[#797b84]");
    return a;
  };
  return (
    <div className="   w-[600px] flex flex-col">
      <h2 className="bg-[#fafffd] rounded-md p-2 text-center overflow-hidden">
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ duration: 1 }}>
          {text}
        </motion.div>
      </h2>
      <div className="w-full mt-2">
        {answers.map((el, index) => (
          <motion.button
            variants={animateFunc(index)}
            initial="initial"
            animate="animate"
            exit="exit"
            disabled={!!answer}
            key={el}
            onClick={() => clickHandler(el)}
            className={`w-full cursor-pointer   text-white shadow-md p-2 rounded-md mt-2 ${
              answer ? checkFunction(el) : "bg-[#797b84]"
            }`}>
            {el}
          </motion.button>
        ))}
      </div>
    </div>
  );
};
