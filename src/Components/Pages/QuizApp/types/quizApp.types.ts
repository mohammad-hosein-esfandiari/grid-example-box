export interface QuestionTypes {
    id: number;
    text: string;
    answers: string[];
    correctAnswer: string;
  }
  export interface QuizWrapperType {
    children: [...React.ReactNode[]];
    questions: QuestionTypes[];
    answer: string;
    quiz: number;
    score: number;
    nextQuiz: () => void;
  }
  export type ButtonScoreProps = Pick<
    QuizWrapperType,
    "answer" | "nextQuiz" | "quiz"
  >;