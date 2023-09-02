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

export const questions: QuestionTypes[] = [
  {
    id: 1,
    text: "Inside which HTML element do we put the JavaScript? ",
    answers: ["<script>", "<javascript>", "<scripting>", "<js>"],
    correctAnswer: "<script>",
  },
  {
    id: 2,
    text: "What does HTML stand for?",
    answers: ["Hyper Text Preprocessor", "Hyper Text Markup Language", "Hyper Text Multiple Language", "Hyper Tool Multi Language"],
    correctAnswer: "Hyper Text Markup Language",
  },
  {
    id: 3,
    text: "What is the children prop?",
    answers: ["A property that lets you pass data to child components", "A property that lets you set an object as a property", "A property that lets you nest components in other components", "A property that adds child values to state"],
    correctAnswer: "A property that lets you nest components in other components",
  },
];
