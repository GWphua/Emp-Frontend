import { FC } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Toast: FC = () => {
  return <ToastContainer autoClose={5000} />;
};
