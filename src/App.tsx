import { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import EmployeeFormPage from "./pages/AddEmployee/EmployeeFormPage";
import HomePage from "./pages/EmployeeView/HomePage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { Toast } from "./components/Toast/Toast";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";

const router = createBrowserRouter([
  { path: "/", element: <LoginPage />, errorElement: <ErrorPage /> },
  {path: '/signup', element: <SignUpPage />, errorElement: <ErrorPage />},
  { path: "/homepage", element: <HomePage />, errorElement: <ErrorPage /> },
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
