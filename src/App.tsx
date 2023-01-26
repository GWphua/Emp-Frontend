import React from "react";

import "./App.css";
import EmployeeFormPage from "./components/AddEmployee/EmployeeFormPage";
import HomePage from "./components/EmployeeView/HomePage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/employee-form", element: <EmployeeFormPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
