import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";

import "./App.css";
import { Home } from "./Components/Pages/Home/Home";
import { TodoList } from "./Components/Pages/TodoList/TodoList";
import { QuizApp } from "./Components/Pages/QuizApp/QuizApp";
import { FilterApp } from "./Components/Pages/FilterApp/FilterApp";

const App: React.FC = (): React.ReactNode => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<FilterApp/>}>
        <Route element={null} path="/:slug"></Route>
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
