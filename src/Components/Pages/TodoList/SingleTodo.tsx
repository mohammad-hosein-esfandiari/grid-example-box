import { motion } from "framer-motion";

import { TodosType } from "./TodoList";

interface SingleTodoProps {
  todo: TodosType;
  addHandler: (p: string) => void;
  onDragStart: (t: TodosType) => void;
}
export const SingleTodo = ({
  todo,
  addHandler,
  onDragStart,
}: SingleTodoProps): React.ReactNode => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      draggable
      onDrag={() => onDragStart(todo)}
      className={`bg-boxBg rounded-[8px] mt-2 flex items-center p-2`}>
      <div
        className={` w-[25px] h-[25px] relative ${
          todo.status == "reserve"
            ? ""
            : "rounded-full border-[0.2px] border-[#4d5066]"
        }   items-center flex justify-center p-2`}>
        <button
          onClick={() => addHandler(todo.task)}
          className={`absolute rounded-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[20px]  transition-all duration-200 w-full h-full flex items-center justify-center text-[#e4e5f1] ${
            todo.status === "completed" ? "bg-hoverbg" : "hover:scale-[1.3]"
          } `}>
          {todo.status == "reserve" ? "+" : ""}
        </button>
      </div>
      <span
        className={`ml-4 text-[#e4e5f1] ${
          todo.status === "completed"
            ? "line-through text-[#8d8d8db0]"
            : undefined
        }`}>
        {todo.task}
      </span>
    </motion.div>
  );
};
