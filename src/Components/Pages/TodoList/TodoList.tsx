import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { SingleTodo } from "./components/SingleTodo";
import { tableItems } from "./todo";
import { usetheme } from "./hooks/useTheme";
import { useParams } from "react-router-dom";
import { Slug } from "../Home/types/hologram.types";

export enum STATUS {
  pending = "pending",
  completed = "completed",
  reserve = "reserve",
}

export interface TodosType {
  task: string;
  status: STATUS;
}
interface TodoType {
  task: string;
}

export const TodoList: React.FC = (): JSX.Element => {
  const { slug } = useParams<{ slug?: string | undefined }>();

  const [todos, setTodos] = useState<TodosType[]>([]);
  const [draggedTodo, setDraggedTodo] = useState<TodosType | null>();

  const { toggleTheme, theme, colors } = usetheme();

  const { register, handleSubmit, resetField } = useForm<TodoType>();

  const onSubmitHandler = (values: TodoType) => {
    const isDuplicate = todos.find((item) => item.task == values.task) || false;
    if (!isDuplicate && values.task) {
      let newTodo: TodosType = {
        task: values.task,
        status: STATUS.reserve,
      };
      setTodos([...todos, newTodo]);
      resetField("task");
    } else {
      alert("Duplicate Item");
    }
  };
  const addHandler = (todoTask: string) => {
    todos.map((todo) => {
      if (todo.task == todoTask) {
        todo.status === STATUS.reserve
          ? (todo.status = STATUS.pending)
          : (todo.status = STATUS.completed);
      }
    });
    setTodos([...todos]);
  };
  const ondragstart = (todo: TodosType) => {
    setDraggedTodo(todo);
  };
  const onDropTodo = (status: STATUS) => {
    todos.forEach((item) => {
      if (item.task === draggedTodo?.task) {
        item.status = status;
      }
    });
    setDraggedTodo(null);
  };

  return (
    <div
    
      className={`h-full w-[100%]  overflow-hidden relative transition-all duration-300 ${slug !== Slug.todolist && "blur-[2px]"}`}
      style={{ backgroundColor: colors.background1 }}>
      <div
        className=" w-full transition-all flex items-center justify-center py-6 duration-300"
        style={{ background: colors.background2 }}>
        <div className={`w-fit transition-all duration-300 ${slug !== Slug.todolist ? "scale-[0.7]": ""}`}>
          <div className="flex items-center justify-between">
            <h2
              className="text-[35px] tracking-[10px] font-bold transition-all duration-300"
              style={{ color: colors.text }}>
              TODO
            </h2>
            <button onClick={toggleTheme}>
              {theme === "dark" ? (
                <MdOutlineDarkMode
                  style={{ color: colors.text }}
                  className="text-[35px] transition-all duration-300"
                />
              ) : (
                <MdOutlineLightMode
                  className="text-[35px] transition-all duration-300"
                  style={{ color: colors.text }}
                />
              )}
            </button>
          </div>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <fieldset disabled={slug !== Slug.todolist}>

            <div
              className=" rounded-[8px] mt-8 flex  items-center  p-4 transition-all duration-300"
              style={{ backgroundColor: colors.boxBg }}>
              <div className="w-[30px] h-full">
                <div className="rounded-full w-[30px] h-[30px] hover:bg-hoverbg transition-all duration-300 relative  border-[0.2px] border-[#4d5066] p-2 flex items-center justify-center">
                  <button
                    type="submit"
                    className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-55%]  w-full h-full flex items-center justify-center transition-all duration-300"
                    style={{ color: colors.text }}>
                    +
                  </button>
                </div>
              </div>
              <input
                {...register("task")}
                id="task"
                type="text"
                autoFocus
                placeholder="Create a new todo"
                className="bg-transparent outline-none w-[400px]  ml-4 flex-grow transition-all duration-300"
                style={{ color: colors.text }}
              />
            </div>
            </fieldset>
          </form>
        </div>
      </div>
      <ul className="w-full h-full py-4 grid grid-cols-3  ">
        {tableItems.map((item, index) => (
          <li
            key={item.title}
            onDrop={() => onDropTodo(STATUS[item.status])}
            onDragOver={(e) => e.preventDefault()}
            onDragLeave={(e) => e.preventDefault()}
            className={` h-full flex flex-col w-full items-center `}
            style={{
              borderRight: `${
                index !== tableItems.length - 1 && `2px dashed ${colors.text}`
              }`,
            }}>
            <h2
              className={`w-full rounded-t-md py-2 text-xl text-center font-bold transition-all duration-300 ${slug !== Slug.todolist ? "scale-[0.5] translate-y-[-12px]" : "" }`}
              style={{ color: colors.text }}>
              {item.title}
            </h2>
            <div className="flex flex-col relative w-full flex-1 px-4 transition-all duration-300">
              {todos.length ? (
                todos
                  .filter((todo) => todo.status === item.status)
                  .map((el) => (
                    <SingleTodo
                      key={el.task}
                      onDragStart={ondragstart}
                      addHandler={addHandler}
                      todo={el}
                    />
                  ))
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
