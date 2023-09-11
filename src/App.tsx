import {
  RouterProvider,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
} from "react-router-dom";
import { Provider } from "react-redux";
import doseStore from "./Components/Pages/Dose/store";

import "./App.css";
import { Home } from "./Components/Pages/Home/Home";
import { TodoList } from "./Components/Pages/TodoList/TodoList";
import { QuizApp } from "./Components/Pages/QuizApp/QuizApp";
import { FilterApp } from "./Components/Pages/FilterApp/FilterApp";
import { Dose } from "./Components/Pages/Dose/Dose";

const App: React.FC = (): React.ReactNode => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Home/>}>
        <Route  path="/:slug"></Route>
      </Route>
    )
  );

  return (
    <Provider store={doseStore}>
      <RouterProvider router={router} />
    </Provider>
  );
};

export default App;
