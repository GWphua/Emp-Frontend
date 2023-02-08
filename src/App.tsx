import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import EmployeeFormPage from "./pages/AddEmployee/EmployeeFormPage";
import HomePage from "./pages/EmployeeView/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Toast } from "./components/Toast/Toast";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  {
    path: "/employee-form",
    element: <EmployeeFormPage />,
    errorElement: <ErrorPage />,
  },
]);

const App: FC = () => {
  return (
    <>
      <Toast />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
