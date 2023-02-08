import { FC } from "react";
import "./Button.css";

interface IButton {
  color: string;
  children: React.ReactNode;
}

export const Button: FC<IButton> = ({ color, children }) => {
  return (
    <button className="button" style={{ backgroundColor: color }}>
      {children}
    </button>
  );
};
