import { useState } from "react";
import { questions } from "./quiz";
import { SingleQuiz } from "./SingleQuiz";
import { QuizWrapper } from "./QuizWrapper";

export const QuizApp:React.FC = ():JSX.Element => {
  const [quiz, setQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [answer, setAnswer] = useState("");

  const clickHandler = (answer: string) => {
    setAnswer(answer);
    answer == questions[quiz].correctAnswer && setScore((prev) => prev + 1);
  };
  const nextQuiz = () => {
    setAnswer("");
    setQuiz((prev) => prev + 1);
  };
  const click = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
  };
  return (
    <div
      onClick={click}
      className="bg-[#342e37] w-full   h-full flex items-center justify-center">
      <QuizWrapper
        questions={questions}
        answer={answer}
        quiz={quiz}
        score={score}
        nextQuiz={nextQuiz}>
        {questions.map((item) => (
          <SingleQuiz
            key={item.id}
            {...item}
            clickHandler={clickHandler}
            answer={answer}
          />
        ))}
      </QuizWrapper>
    </div>
  );
};
