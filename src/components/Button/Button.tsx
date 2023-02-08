import { FC, MouseEventHandler, useEffect, useState } from "react";
import "./Button.css";

interface IButton {
  buttonType?: "button" | "submit" | "reset";
  backgroundColor?: string;
  hoverColor?: string;
  onClick: MouseEventHandler;
  children: React.ReactNode;
}

const Button: FC<IButton> = ({
  buttonType = undefined,
  backgroundColor = "transparent",
  hoverColor = backgroundColor,
  onClick,
  children,
}) => {
  const [buttonColor, setButtonColor] = useState(backgroundColor);

  useEffect(() => {
    setButtonColor(backgroundColor);
  }, [backgroundColor]);

  return (
    <button
      type={buttonType}
      onClick={onClick}
      className="button"
      style={
        buttonColor === "transparent"
          ? { backgroundColor: "transparent", boxShadow: "none" }
          : { backgroundColor: buttonColor }
      }
      onMouseEnter={() => setButtonColor(hoverColor)}
      onMouseLeave={() => setButtonColor(backgroundColor)}
    >
      {children}
    </button>
  );
};

export default Button;
