import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import EmployeeFormPage from "./components/AddEmployee/EmployeeFormPage";
import HomePage from "./components/EmployeeView/HomePage";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/employee-form", element: <EmployeeFormPage /> },
]);

const App: FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
