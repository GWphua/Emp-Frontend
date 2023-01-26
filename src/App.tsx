import React from "react";

import "./App.css";
import EmployeeFormPage from "./components/AddEmployee/EmployeeFormPage";
import HomePage from "./components/EmployeeView/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/employee-form", element: <EmployeeFormPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
